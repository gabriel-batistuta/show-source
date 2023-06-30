import requests
from bs4 import BeautifulSoup
import sys

param = sys.argv[1]

htmlPage = requests.get(param).content
soup = BeautifulSoup(htmlPage, 'html.parser')
htmlPage = soup.prettify()
print(htmlPage)
    