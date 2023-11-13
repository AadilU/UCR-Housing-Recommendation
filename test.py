import json
import requests
from bs4 import BeautifulSoup


URL = [
    "https://www.yelp.com/biz/bannockburn-commercial-and-residential-complex-riverside",
    "https://www.yelp.com/biz/ucr-falkirk-apartments-riverside",
    "https://www.yelp.com/biz/glen-mor-riverside",
    "https://www.yelp.com/biz/stonehaven-apts-riverside",
    "https://www.yelp.com/biz/the-plaza-ucr-student-housing-riverside",
    "https://www.yelp.com/biz/grand-marc-at-university-village-riverside-4",
    "https://www.yelp.com/biz/university-village-towers-riverside"
    ]

num_pages = [
    0,
    0,
    0,
    50,
    0,
    140,
    60
]

housing_data = [
    {
        "name": "Bannockburn",
        "reviews": []
    },

    {
        "name": "Falkirk",
        "reviews": []
    },
    
    {
        "name": "Glen Mor",
        "reviews": []
    },
    
    {
        "name": "Stonehaven",
        "reviews": []
    },
    
    {
        "name": "Plaza",
        "reviews": []
    },
    
    {
        "name": "Grandmarc",
        "reviews": []
    },
    
    {
        "name": "University Village Towers",
        "reviews": []
    },
]

for i in range(0, len(URL)):
    for j in range(0, num_pages[i]+1, 10):
        r = requests.get(URL[i] + "?start=" + str(j))
        soup = BeautifulSoup(r.content, 'html5lib')
        reviews = soup.find("div", id="reviews").find_all("span", class_="raw__09f24__T4Ezm", lang="en")
        for review in reviews:
            housing_data[i]["reviews"].append(review.text)

with open("housing_reviews.json", "w") as output:
    json.dump(housing_data, output)