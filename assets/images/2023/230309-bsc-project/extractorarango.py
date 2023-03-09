import pandas as pd
import string
from codecs import open

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

  def __str2__(self):
    return f'Language\u007b\n\tlanguage="{ self.language }",\n\tdialect="{ self.dialect }",\n\tproficiency={ self.proficiency },\n\tfamiliarity={ self.familiarity }\n\u007d'

  def __str__(self):
    return f'"{ self.language }","{ self.dialect }",{ self.proficiency },{ self.familiarity }'

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

  def __str2__(self):
    langs = "\t\t" + ",\n\t\t".join([str(l).replace("\n", " ").replace("\t", "") for l in self.langs])
    distances = "\t\t" + ",\n\t\t".join([f'"{ k[0] }<->{k[1] }"={ int(v) }' for k, v in self.distances.items()])
    return f'Person\u007b\n\tage={ self.age },\n\tgender="{ self.gender }",\n\tnationality="{ self.nationality }",\n\tresidence="{ self.residence }", \n\teducation={ self.education },\n\tlanguages=[\n{ langs }\n\t],\n\tdistances=\u007b\n{ distances }\n\t\u007d\n\u007d'

  def __str__(self):
    #langs = "\t\t" + ",\n\t\t".join([str(l).replace("\n", " ").replace("\t", "") for l in self.langs])
    #distances = "\t\t" + ",\n\t\t".join([f'"{ k[0] }<->{k[1] }"={ int(v) }' for k, v in self.distances.items()])
    return f'{ self.age },"{ self.gender }","{ self.nationality }","{ self.residence }",{ self.education }'

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

dataset_name = input("Please name this dataset [a-zA-Z0-9] (be aware of collisions): ")
if len(set(list(dataset_name)) - set(string.ascii_letters + string.digits)) > 0:
  print("Please enter a dataset name with only letters and numbers.")
  exit(0)

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
total_langs = []
for p in people:
  l = list(map(lambda x: x.language, p.langs))
  total_langs = list(set(total_langs + l))

total_langs = sorted(total_langs)

csv_people = """"_key","age","gender","nationality","residence","education"\n"""
for i in range(len(people)):
  csv_people += f""""0x{hex(i + 1)[2:].zfill(16)}",{str(people[i])}\n"""

#print(csv_people)
with open(f"./data/people-{dataset_name}.csv", "w", encoding="utf-8") as f:
  f.write(csv_people)
  f.close()

csv_langs = """"_key","name"\n"""
for i in range(len(total_langs)):
  csv_langs += f""""0x{hex(i + 1)[2:].zfill(8)}","{total_langs[i]}"\n"""

with open(f"./data/languages-{dataset_name}.csv", "w", encoding="utf-8") as f:
  f.write(csv_langs)
  f.close()


csv_knows = """"_from","_to","dialect","familiarity","proficiency","snapshot"\n"""
csv_distance = """"_from","_to","emitter","distance","snapshot"\n"""
for i in range(len(people)):
  p = people[i]
  l_indices = [(total_langs.index(a.language), a.dialect, a.familiarity, a.proficiency) for a in p.langs]
  for j in l_indices:
    csv_knows += f""""people-{dataset_name}/0x{hex(i + 1)[2:].zfill(16)}","languages-{dataset_name}/0x{hex(j[0] + 1)[2:].zfill(8)}","{j[1]}",{j[2]},{j[3]},1\n"""
  for k, v in p.distances.items():
    csv_distance += f""""languages-{dataset_name}/0x{hex(l_indices[k[0] - 1][0] + 1)[2:].zfill(8)}","languages-{dataset_name}/0x{hex(l_indices[k[1] - 1][0] + 1)[2:].zfill(8)}","people-{dataset_name}/0x{hex(i + 1)[2:].zfill(16)}",{v},1\n"""

with open(f"./data/knowsLanguage-{dataset_name}.csv", "w", encoding="utf-8") as f:
  f.write(csv_knows)
  f.close()

with open(f"./data/hasDistance-{dataset_name}.csv", "w", encoding="utf-8") as f:
  f.write(csv_distance)
  f.close()
