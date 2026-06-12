import pandas as pd

class Language:
  def __init__(self, language, dialect, proficiency, familiarity):
    self.language = language.title().strip()
    if pd.isna(dialect):
      self.dialect = ""
    else:
      self.dialect = dialect.title().strip()
    self.proficiency = int(self.proficiency_to_int(proficiency))
    self.familiarity = int(familiarity)

  def proficiency_to_int(self, proficiency) -> int:
    d = {
      "Elementary Proficiency (A2)": 0,
      "Limited Working Proficiency (B1)": 1,
      "Professional Working Proficiency (B2)": 2,
      "Full Professional Proficiency (C1)": 3,
      "Native / Bilingual Proficiency (C2)": 4
    }

    if proficiency in d.keys():
      return d[proficiency]
    else:
      return -1

  def __str__(self):
    return f'Language\u007b\n\tlanguage="{ self.language }",\n\tdialect="{ self.dialect }",\n\tproficiency={ self.proficiency },\n\tfamiliarity={ self.familiarity }\n\u007d'

class Person:
  def __init__(self, age: int, gender: str, nationality: str, residence: str, education):
    self.age = age
    self.gender = gender.title().strip()
    self.nationality = nationality.title().strip()
    if pd.isna(residence):
      self.residence = ""
    else:
      self.residence = residence.title().strip()
    self.education = self.ed_to_int(education)
    self.langs = []
    self.distances = {}

  def add_lang(self, l):
    self.langs += [l]

  def add_distances(self, l1, l2, dist):
    self.distances[(l1, l2)] = dist

  def ed_to_int(self, ed) -> int:
    d = {
      "Have not finished high school / done an apprenticeship": 0,
      "Apprenticeship": 1,
      "High School": 2,
      "Undergraduate's / Bachelor's Degree": 3,
      "Graduate's / Master's Degree": 4,
      "Post-Graduate's Degree / Doctorate": 5
    }

    if ed in d.keys():
      return d[ed]
    else:
      return -1

  def __str__(self):
    langs = "\t\t" + ",\n\t\t".join([str(l).replace("\n", " ").replace("\t", "") for l in self.langs])
    distances = "\t\t" + ",\n\t\t".join([f'"{ k[0] }<->{k[1] }"={ int(v) }' for k, v in self.distances.items()])
    return f'Person\u007b\n\tage={ self.age },\n\tgender="{ self.gender }",\n\tnationality="{ self.nationality }",\n\tresidence="{ self.residence }", \n\teducation={ self.education },\n\tlanguages=[\n{ langs }\n\t],\n\tdistances=\u007b\n{ distances }\n\t\u007d\n\u007d'


count_columns = [
  "Do you wish to submit another language?", # NO = Submit = NO Dist, YES = 2 Langs...
  "Do you wish to submit another language?.1",
  "Do you wish to submit another language?.2",
  "Do you wish to submit another language?.3"
]

column_names_per_count = {
  1: [],
  2: ["Distance between LANGUAGE 1 and LANGUAGE 2"],
  3: ['Distance between LANGUAGE 1 and LANGUAGE 2.1', 'Distance between LANGUAGE 1 and LANGUAGE 3', 'Distance between LANGUAGE 2 and LANGUAGE 3'],
  4: ['Distance between LANGUAGE 1 and LANGUAGE 2.2', 'Distance between LANGUAGE 1 and LANGUAGE 3.1', 'Distance between LANGUAGE 1 and LANGUAGE 4', 'Distance between LANGUAGE 2 and LANGUAGE 3.1', 'Distance between LANGUAGE 2 and LANGUAGE 4', 'Distance between LANGUAGE 3 and LANGUAGE 4'],
  5: ['Distance between LANGUAGE 1 and LANGUAGE 2.3', 'Distance between LANGUAGE 1 and LANGUAGE 3.2', 'Distance between LANGUAGE 1 and LANGUAGE 4.1', 'Distance between LANGUAGE 1 and LANGUAGE 5', 'Distance between LANGUAGE 2 and LANGUAGE 3.2', 'Distance between LANGUAGE 2 and LANGUAGE 4.1', 'Distance between LANGUAGE 2 and LANGUAGE 5', 'Distance between LANGUAGE 3 and LANGUAGE 4.1', 'Distance between LANGUAGE 3 and LANGUAGE 5', 'Distance between LANGUAGE 4 and LANGUAGE 5']
}

df = pd.read_csv("./data.csv", encoding="utf-8", mangle_dupe_cols=True)

people = []
for i, r in df.iterrows():
  p = Person(r["Age"], r["Gender"], r["Nationality"], r["Country of Residence"], r["Level of Education"])

  columns = [r[cname] for cname in count_columns]
  if "No" not in columns:
    number_of_langs = 5
  else:
    number_of_langs = columns.index("No") + 1

  for l in range(number_of_langs):
    if (l == 0):
      suffix = ""
    else:
      suffix = "." + str(l)
    p.add_lang(Language(r["Language" + suffix], r["Dialect" + suffix], r["Proficiency" + suffix], r["Familiarity" + suffix]))

  for cname in column_names_per_count[number_of_langs]:
    p.add_distances(int(cname[26]), int(cname[41]), int(r[cname]))
  people += [p]

cypher_output="MATCH (n) DETACH DELETE (n);\n"
output = "\n\n".join([str(p) for p in people])

total_langs = []
for p in people:
  l = list(map(lambda x: x.language, p.langs))
  total_langs = list(set(total_langs + l))

for l in total_langs:
  cypher_output += 'CREATE (l:Language { name: "%s" });\n' % (l)

cypher_endbuffer = "";
for i in range(len(people)):
  p = people[i]
  cypher_output += 'CREATE (p:Person { id: %d, age: %d, gender: "%s", nationality: "%s", residence: "%s", education: %d });\n' % (i + 1, p.age, p.gender, p.nationality, p.residence, p.education)
  langs = p.langs
  for l in langs:
    cypher_endbuffer += """MATCH (p: Person { id: %d }) MATCH (l:Language { name: "%s" }) MERGE (p)-[:KNOWS_LANGUAGE { dialect: "%s", proficiency: %d, familiarity: %d }]-(l);\n""" % (i + 1, l.language, l.dialect, l.proficiency, l.familiarity)
  for k, v in p.distances.items():
    l1 = langs[k[0] - 1].language
    l2 = langs[k[1] - 1].language
    cypher_endbuffer += """MATCH (l1: Language { name: "%s" }) MATCH (l2: Language { name: "%s" }) MERGE (l1)-[:HAS_DISTANCE { emitter: %d, distance: %d }]-(l2);\n""" % (l1, l2, i + 1, v)

from codecs import open as copen
with copen("./exported.log", "w", encoding="utf-8") as f:
  f.write(output)
  f.close()

with copen("./cypher.output", "w", encoding="utf-8") as f:
  f.write(cypher_output)
  f.write(cypher_endbuffer)
  f.close()
