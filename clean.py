def clean(a):
  out = ""
  for j in range(len(a) - 1):
    i = a[j]
    if i == "{":
      out += "{{ '{' }}"
    elif i == "}":
      out += "{{ '}' }}"
    else:
      out += i
  return out

a = """
<h3 id="question-1">Question 1</h3>
<blockquote>
<p>What is the architecture of the malware sample? (32-bit/64-bit)</p>
</blockquote>
<p>We look at the architecture section in DIE.</p>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day12/1.png?raw=true" alt=""></p>
<p>Answer: <code>64-bit</code></p>
<h3 id="question-2">Question 2</h3>
<blockquote>
<p>What is the packer used in the malware sample? (format: lowercase)</p>
</blockquote>
<p>The packer is written in the DIE scan results.</p>
<p>Answer: <code>upx</code></p>
<h3 id="question-3">Question 3</h3>
<blockquote>
<p>What is the compiler used to build the malware sample? (format: lowercase)</p>
</blockquote>
<p>After decompiling the sample with <code>upx -d mysterygift</code> we can process it with <code>capa mysterygift</code> and find the compiler name.</p>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day12/3.png?raw=true" alt=""></p>
<p>Answer: <code>nim</code></p>
<h3 id="question-4">Question 4</h3>
<blockquote>
<p>How many MITRE ATT&amp;CK techniques have been discovered attributed to the DISCOVERY tactic?</p>
</blockquote>
<p>In the ATT&amp;CK Tactic section we can see two Techniques.</p>
<p>Answer: <code>2</code></p>
<h3 id="question-5">Question 5</h3>
<blockquote>
<p>What is the registry key abused by the malware?</p>
</blockquote>
<p>We check for one of the first <code>RegCloseKey</code> operations in ProcMon.</p>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day12/5.png?raw=true" alt=""></p>
<p>Answer: <code>HKCU\Software\Microsoft\Windows\CurrentVersion\Run</code></p>
<h3 id="question-6">Question 6</h3>
<blockquote>
<p>What is the value written on the registry key based on the previous question?</p>
</blockquote>
<p>We check for the next <code>RegSetValue</code> operation in ProcMon.</p>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day12/6.png?raw=true" alt=""></p>
<p>Answer: <code>C:\\Users\Administrator\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\wishes.bat</code></p>
<h3 id="question-7">Question 7</h3>
<blockquote>
<p>What are the names of two files created by the malware under the C:\\Users\Administrator\ directory? (format: file1,file2 in alphabetical order)</p>
</blockquote>
<p>We find <code>CreateFile</code> operations in ProcMon.</p>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day12/7.png?raw=true" alt=""></p>
<p>Answer: <code>test.jpg,wishes.bat</code></p>
<h3 id="question-8">Question 8</h3>
<blockquote>
<p>What are the two domains wherein malware has initiated a network connection? (format: domain1,domain2 in alphabetical order)</p>
</blockquote>
<p>We look for the two <code>TCP Connect</code> operations in ProcMon.</p>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day12/8.png?raw=true" alt=""></p>
<p>Answer: <code>bestfestivalcompany.thm,virustotal.com</code></p>
<h3 id="question-9">Question 9</h3>
<blockquote>
<p>Going back to strings inside the malware sample, what is the complete URL used to download the file hosted in the first domain accessed by the malware?</p>
</blockquote>
<p>In DIE we filter on <code>http</code> strings and find the correct string:</p>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day12/9.png?raw=true" alt=""></p>
<p>Answer: <code>http://bestfestivalcompany.thm/favicon.ico</code></p>
"""
day = 12

from bs4 import BeautifulSoup as bs
from bs4 import Tag
soup = bs(clean(a), features="html.parser", preserve_whitespace_tags=["p", "em", "span", "h3"])

for h3 in soup.find_all('h3'):
  h3.attrs = {}

img = soup.find_all('img')

parags = list(filter(lambda p: len(p.find_all('img')) > 0, soup.find_all('p')))
v = 0
for p in parags:
  img = p.find_all('img')
  link = img[0].attrs['src']
  link = link.replace(f'https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day{day}/', f'assets/images/walkthrough/thm/aoc-2022/day{day:02d}/').split('?')[0]

  p.parent.insert(p.parent.index(p)+1, Tag(builder=soup.builder, name='div', attrs={'class': 'media-container'}))
  div = soup.find_all('div', attrs={'class': 'media-container'})[v]
  div.insert(0, Tag(builder=soup.builder, name='img', attrs={ 'alt': '', 'style': "max-height: 300px", 'src': link, 'loading':"lazy"}))
  div.insert(1, Tag(builder=soup.builder, name='span'))
  span = div.find_all('span')[0]
  span.insert(0, Tag(builder=soup.builder, name='em'))

  p.replaceWith('')
  v += 1

print(soup.prettify())
