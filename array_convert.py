import json

a = """[
  {
    "path": "2020_10_15+hello-world",
    "component": "",
    "data": {
      "title": "Hello World!",
      "description": "The first post on AtomicMaya's Blog. Wow!",
      "imageUrl": "/assets/images/post/2020/201015-hello-world/hw.png",
      "tags": [
        "TAG_PERSONAL"
      ],
      "date": [
        2021,
        10,
        15
      ],
      "readingTime": 1
    }
  },
  {
    "path": "2020_10_19+i-participated-in-the-conint-ctf",
    "component": "",
    "data": {
      "title": "I participated in the conINT CTF!",
      "description": "Discussing my participation in the conINT TraceLabs OSINT capture the flag event.",
      "imageUrl": "/assets/images/post/2020/201019-conint/conint_logo.png",
      "tags": [
        "TAG_CONFERENCE",
        "TAG_CTF",
        "TAG_OSINT"
      ],
      "date": [
        2021,
        10,
        19
      ],
      "readingTime": 5
    }
  },
  {
    "path": "2020_11_02+i-gave-a-talk-at-beercon2",
    "data": {
      "title": "I gave a talk at BeerCon2!",
      "description": "I gave a talk at BeerCon2, a rookie infosec conference.",
      "imageUrl": "/assets/images/post/2020/201102-beercon2/bc2_zoombg.png",
      "tags": [
        "TAG_INFOSEC",
        "TAG_IOT",
        "TAG_TALKS",
        "TAG_CONFERENCE"
      ],
      "date": [
        2021,
        11,
        2
      ],
      "readingTime": 10
    }
  },
  {
    "path": "2020_11_09+i-talked-at-bsides-islamabad",
    "data": {
      "title": "I talked at BSides Islamabad!",
      "description": "I gave a talk at BSides Islamabad, Pakistan's first cybersecurity conference.",
      "imageUrl": "/assets/images/post/2020/201109-bsides-islamabad/card.png",
      "tags": [
        "TAG_INFOSEC",
        "TAG_IOT",
        "TAG_TALKS",
        "TAG_CONFERENCE"
      ],
      "date": [
        2021,
        11,
        9
      ],
      "readingTime": 3
    }
  },
  {
    "path": "2020_11_12+mentoring",
    "data": {
      "title": "Mentoring!",
      "description": "I want to help you with your endeavors.",
      "tags": [
        "TAG_PERSONAL",
        "TAG_COMMUNITY"
      ],
      "date": [
        2021,
        11,
        12
      ],
      "readingTime": 2
    }
  },
  {
    "path": "2020_11_12+reading-materials",
    "data": {
      "title": "Reading Materials!",
      "description": "Some books I plan on reading.",
      "tags": [
        "TAG_INFOSEC"
      ],
      "date": [
        2021,
        11,
        12
      ],
      "readingTime": 1
    }
  },
  {
    "path": "2020_12_12+security-coffeehouse-bc2-speaker-interviews",
    "data": {
      "title": "Security CoffeeHouse: BC2 Speaker Interviews",
      "description": "I participated in James Bore's Security CoffeeHouse!",
      "imageUrl": "/assets/images/post/2020/201212-coffeehouse/coffeehouse_backdrop.png",
      "tags": [
        "TAG_COMMUNITY",
        "TAG_CONFERENCE"
      ],
      "date": [
        2021,
        12,
        12
      ],
      "readingTime": 2
    }
  }
]"""

d = json.loads(a)
for e in d:
    print(f"title: '{e['data']['title']}'")
    print(f"description: '{e['data']['description']}'")
    print(f"pubDate: '{"-".join(map(str, e['data']['date']))}'")
    print(f"updatedDate: '{"-".join(map(str, e['data']['date']))}'")
    print(f"readingTime: {e['data']['readingTime']}")
    if "imageUrl" in e['data'].keys():
        print(f"image: '{e['data']['imageUrl']}'")
    print(f"keywords:")
    for t in e['data']['tags']:
        print(f"- '{t}'")
    print("---")
