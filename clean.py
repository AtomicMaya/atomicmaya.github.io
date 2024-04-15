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
<p>What is the value of Flag1?</p>
</blockquote>
<pre><code class="lang-php"><span class="hljs-keyword">include</span> <span class="hljs-string">"connection.php"</span>;

    $query=<span class="hljs-string">"select * from users where id="</span>.intval($_GET[<span class="hljs-string">'id'</span>]);
    $elves_rs=mysqli_query($db,$query);

    <span class="hljs-keyword">if</span>(!$elves_rs)
    {
        <span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;font color=red size=10&gt;Error: Invalid SQL Query&lt;/font&gt;"</span>;
        <span class="hljs-keyword">die</span>($query);
    }

    <span class="hljs-comment">// Get the first result. There should be a single elf here.</span>
    $elf=mysqli_fetch_assoc($elves_rs);

    <span class="hljs-comment">//Now get the toys associated to this elf</span>
    $query=<span class="hljs-string">"select * from toys where creator_id="</span>.intval($_GET[<span class="hljs-string">'id'</span>]);
    $toys_rs=mysqli_query($db,$query);

    <span class="hljs-keyword">if</span>(!$toys_rs)
    {
        <span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;font color=red size=10&gt;Error: Invalid SQL Query&lt;/font&gt;"</span>;
        <span class="hljs-keyword">die</span>($query);
    }
</code></pre>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day16/1.png?raw=true" alt=""></p>
<p>Answer: <code>THM{McCode, Elf McCode}</code></p>
<h3 id="question-2">Question 2</h3>
<blockquote>
<p>What is the value of Flag2?</p>
</blockquote>
<pre><code class="lang-php">$query=<span class="hljs-string">"select * from toys where name like ? or description like ?"</span>;
$stmt = mysqli_prepare($db, $query);
$q = <span class="hljs-string">"%"</span>.$_GET[<span class="hljs-string">'q'</span>].<span class="hljs-string">"%"</span>;
mysqli_stmt_bind_param($stmt, <span class="hljs-string">'ss'</span>, $q, $q);
mysqli_stmt_execute($stmt);
$toys_rs=mysqli_stmt_get_result($stmt);

<span class="hljs-keyword">if</span>(!$toys_rs)
{
    <span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;font color=red size=10&gt;Error: Invalid SQL Query&lt;/font&gt;"</span>;
    <span class="hljs-keyword">die</span>($query);
}
</code></pre>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day16/2.png?raw=true" alt=""></p>
<p>Answer: <code>THM{KodeNRoll}</code></p>
<h3 id="question-3">Question 3</h3>
<blockquote>
<p>What is the value of Flag3?</p>
</blockquote>
<pre><code class="lang-php">        <span class="hljs-keyword">include</span> <span class="hljs-string">"connection.php"</span>;

    $query=<span class="hljs-string">"select * from toys where id="</span>.intval($_GET[<span class="hljs-string">'id'</span>]);
    $toys_rs=mysqli_query($db,$query);

    <span class="hljs-keyword">if</span>(!$toys_rs)
    {
        <span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;font color=red size=10&gt;Error: Invalid SQL Query&lt;/font&gt;"</span>;
        <span class="hljs-keyword">die</span>($query);
    }

    <span class="hljs-comment">// Get the first result. There should be a single elf here.</span>
    $toy=mysqli_fetch_assoc($toys_rs);

    <span class="hljs-comment">//query info on the creator elf</span>
    $query=<span class="hljs-string">"select * from users where id="</span>.intval($toy[<span class="hljs-string">'creator_id'</span>]);
    $elves_rs=mysqli_query($db,$query);

    <span class="hljs-keyword">if</span>(!$elves_rs)
    {
        <span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;font color=red size=10&gt;Error: Invalid SQL Query&lt;/font&gt;"</span>;
        <span class="hljs-keyword">die</span>($query);
    }

    <span class="hljs-comment">// Get the first result. There should be a single elf here.</span>
    $elf=mysqli_fetch_assoc($elves_rs);

    <span class="hljs-comment">//query info on planned deliveries</span>
    $query=<span class="hljs-string">"select * from kids where assigned_toy_id="</span>.intval($_GET[<span class="hljs-string">'id'</span>]);
    $kids_rs=mysqli_query($db,$query);

    <span class="hljs-keyword">if</span>(!$kids_rs)
    {
        <span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;font color=red size=10&gt;Error: Invalid SQL Query&lt;/font&gt;"</span>;
        <span class="hljs-keyword">die</span>($query);
    }
</code></pre>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day16/3.png?raw=true" alt=""></p>
<p>Answer: <code>THM{Are we secure yet?}</code></p>
<h3 id="question-4">Question 4</h3>
<blockquote>
<p>What is the value of Flag4?</p>
</blockquote>
<pre><code class="lang-php"><span class="hljs-keyword">if</span>(<span class="hljs-keyword">isset</span>($_POST[<span class="hljs-string">'username'</span>]) &amp;&amp; <span class="hljs-keyword">isset</span>($_POST[<span class="hljs-string">'password'</span>])){
    $username=$_POST[<span class="hljs-string">'username'</span>];
    $password=$_POST[<span class="hljs-string">'password'</span>];
    $query=<span class="hljs-string">"select * from users where username=? and password=?"</span>;
    $stmt = mysqli_prepare($db, $query);
    mysqli_stmt_bind_param($stmt, <span class="hljs-string">'ss'</span>, $username, $password);
    mysqli_stmt_execute($stmt);
    $users_rs=mysqli_stmt_get_result($stmt);

    <span class="hljs-keyword">if</span>(mysqli_num_rows($users_rs)&gt;<span class="hljs-number">0</span>)
    {
        $_SESSION[<span class="hljs-string">'username'</span>]=$username;
        <span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;script&gt;window.location='admin.php';&lt;/script&gt;"</span>;
    }
    <span class="hljs-keyword">else</span>
    {
        $message=<span class="hljs-string">"Incorrect username/password found!"</span>;
        <span class="hljs-keyword">echo</span> <span class="hljs-string">"&lt;script type='text/javascript'&gt;alert('$message');&lt;/script&gt;"</span>;
    }
}
</code></pre>
<p><img src="https://github.com/AtomicMaya/knowledge-base/blob/main/writeup_resources/aoc4/day16/4.png?raw=true" alt=""></p>
<p>Answer: <code>THM{SQLi_who???}</code></p>

"""
day = 16

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
