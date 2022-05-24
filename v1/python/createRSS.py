import os
from os.path import join, isfile
import re
import yaml

class blogPost:
    def __init__(self, fileName, title, date, description):
        self.fileName = fileName
        self.title = title
        self.date = date
        self.description = description
    def export(self, exportNum):
        exportStr = "<item><title>{{title}}</title><pubDate>{{date}}</pubDate><link>https://blog.craftidore.com/v1/?page={{fileName}}</link><guid>https://blog.craftidore.com/v1/item{{exportNum}}</guid><description>{{description}}</description></item>"
        exportStr = exportStr.replace("{{title}}", self.title)
        exportStr = exportStr.replace("{{date}}", "Mon, 6 Sep 2010 12:40:21 GMT")
        exportStr = exportStr.replace("{{fileName}}", self.fileName)
        exportStr = exportStr.replace("{{exportNum}}", str(exportNum))
        exportStr = exportStr.replace("{{description}}", self.description)

        return exportStr

def main():
    createRSS()

def createRSS():
    posts = getItems(getBlogPosts())#.sort(key = lambda post:post.date)
    posts.sort(key = lambda post:post.date, reverse=True)
    reducedPosts = []
    for x in posts:
        reducedPosts.append(x)
        if x == 15:
            break
        
    renderedPosts = renderItems(posts)
    
    f = open(join(".", "feed.rss"), "w")
    f.write(renderRSS(renderedPosts))
    f.close()

def renderRSS(items):
    outer = "<?xml version=\"1.0\" encoding=\"utf-8\"?> <rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\"> <channel> <atom:link href=\"http://blog.craftidore.com/v1/feed.rss\" rel=\"self\" type=\"application/rss+xml\" /> <title>Craftidore's Blog</title> <link>https://blog.craftidore.com</link> <description>Craftidore's Coding Blog</description> <language>en-us</language> <image> <title>Craftidore's Blog</title> <link>https://blog.craftidore.com</link> <url>https://blog.craftidore.com/source/img/Logo.png</url> <width>50</width> <height>50</height> </image>{{items}}</channel></rss>" 
    return outer.replace("{{items}}", ''.join(items))

def renderItems(posts):
    l = []
    for i in range(len(posts)):
        post = posts[i]
        l.append(post.export(i))
    return l

def getBlogPosts():
    l = []
    for fileName in os.listdir(path="./blog/"):
        if (not isfile(fileName)) and re.match(r".*\.md$", fileName):
            l.append(re.sub(r"(.*)\.md$", "\\1", fileName))
        else:
            print(fileName + " is not a file")
    return l

def getItems(fileNames):
    l = []
    for fileName in fileNames:
        f = open(join("./blog/", fileName + ".md"), "r")
        print("Reading " + fileName)
        markdown = f.read()
        f.close()
        title, date, description = getYaml(markdown)
        if title == "":
            title = fileName
        if description == "":
            description = title
        print("Title: " + title)
        print("Date: " + str(date))
        print("Description: " + description)
        l.append(blogPost(fileName, title, date, description))
    return l

def getYaml(markdown):
    frontmatter = getFrontmatter(markdown)
    yml = yaml.safe_load("yaml: false")
    try: 
        yml = yaml.safe_load(frontmatter)
    except yaml.YAMLError as e:
        print(e)
    print(yml)
    title, date, description = ("", 0, "")
    if "title" in yml:
        title = yml["title"]
    if "date" in yml:
        date = yml["date"]
    if "description" in yml:
        description = yml["description"]
    return (title, date, description)
    
def getFrontmatter(markdown):
    return re.compile(r"^---(\r|\n)((.|\r|\n)+)---").match(markdown)[2]


if __name__ == "__main__":
    main()