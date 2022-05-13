import os
from os.path import join, isfile
import json
import re
import yaml

class blogPost:
    def __init__(self, fileName, title, date):
            pass

def main():
    posts = getBlogPosts()
    for post in posts:
        f = open(join("./blog/", post + ".md"), "r")
        print("Reading " + post)
        markdown = f.read()
        title, date = getYaml(markdown)
        print("Title: " + str(title))
        print("Date: " + str(date))
        f.close()
        
def getBlogPosts():
    l = []
    for fileName in os.listdir(path="./blog/"):
        if (not isfile(fileName)) and re.match(r".*\.md$", fileName):
            l.append(re.sub("(.*)\.md$", "\\1", fileName))
        else:
            print(fileName + " is not a file")
    return l
def getYaml(markdown):
    frontmatter = getFrontmatter(markdown)
    yml = yaml.safe_load("yaml: false")
    try: 
        yml = yaml.safe_load(frontmatter)
    except yaml.YAMLError as e:
        print(e)
    print(yml)
    title, date = ("", 999999)
    if "title" in yml:
        title = yml["title"]
    if "date" in yml:
        date = yml["date"]
    return (title, date)
    
def getFrontmatter(markdown):
    return re.compile("^---(\r|\n)((.|\r|\n)+)---").match(markdown)[2]


if __name__ == "__main__":
    main()