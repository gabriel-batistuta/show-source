import requests
from bs4 import BeautifulSoup

def getSource(url):
    htmlPage = requests.get(url).content
    soup = BeautifulSoup(htmlPage, 'html.parser')
    htmlPage = soup.prettify()

    return htmlPage