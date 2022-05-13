import os
from os.path import join, isfile
import json
import re
import yaml

class blogPost:
    def __init__(self, fileName, title, date):
        self.fileName = fileName
        self.title = title
        self.date = date
    def toDict(self):
        return  self.__dict__
def toJson(posts):
    return json.dumps(posts, default=lambda o: o.__dict__)

def main():
    fileNames = getBlogPosts()
    posts = iterateFiles(fileNames)
    postLists = splitByHundred(posts)
    writeJSON("postPage01", "", "", postLists[0])


def getBlogPosts():
    l = []
    for fileName in os.listdir(path="./blog/"):
        if (not isfile(fileName)) and re.match(r".*\.md$", fileName):
            l.append(re.sub(r"(.*)\.md$", "\\1", fileName))
        else:
            print(fileName + " is not a file")
    return l
def iterateFiles(fileNames):
    l = []
    for fileName in fileNames:
        f = open(join("./blog/", fileName + ".md"), "r")
        print("Reading " + fileName)
        markdown = f.read()
        f.close()
        title, date = getYaml(markdown)
        if title == "":
            title = fileName
        print("Title: " + title)
        print("Date: " + str(date))
        l.append(blogPost(fileName, title, date))
    return l
def splitByHundred(posts):
    # later, I'll set this up to return a list of a list posts maxed out at 100 posts. 
    # That's not a problem yet.
    return [posts]
def writeJSON(fileName, prev, next, posts):
    if prev == "":
        pass
    if next == "":
        pass
    f = open(join("json", fileName + ".json"), "w")
    f.write(toJson(posts))
    f.close()
def getYaml(markdown):
    frontmatter = getFrontmatter(markdown)
    yml = yaml.safe_load("yaml: false")
    try: 
        yml = yaml.safe_load(frontmatter)
    except yaml.YAMLError as e:
        print(e)
    print(yml)
    title, date = ("", 0)
    if "title" in yml:
        title = yml["title"]
    if "date" in yml:
        date = yml["date"]
    return (title, date)
    
def getFrontmatter(markdown):
    return re.compile(r"^---(\r|\n)((.|\r|\n)+)---").match(markdown)[2]


if __name__ == "__main__":
    main()