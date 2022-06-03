import os
from os.path import join, isfile
import datetime
import time
from email import utils
import re
import yaml

class blogPost:
    def __init__(self, fileName, title, date, time, description):
        self.fileName = fileName
        self.title = title
        self.date = "20" + str(date) + " " + str(time) + ":00"
        self.description = description
    def formatTime(self):
        dt = datetime.datetime.strptime(str(self.date), '%Y%m%d %H:%M:%S')
        timetuple = dt.timetuple()
        timetimestamp = time.mktime(timetuple)
        rcf = utils.formatdate(timetimestamp)
        rcf822 = rcf[0:len(rcf)-5] + '-0600'
        return rcf822
        
    def export(self, exportNum):
        exportStr = "<item><title>{{title}}</title><pubDate>{{date}}</pubDate><link>https://blog.craftidore.com/v1/?page={{fileName}}</link><guid>https://blog.craftidore.com/v1/item{{exportNum}}</guid><description>{{description}}</description></item>"
        exportStr = exportStr.replace("{{title}}", self.title)
        exportStr = exportStr.replace("{{date}}", self.formatTime())
        exportStr = exportStr.replace("{{fileName}}", self.fileName)
        exportStr = exportStr.replace("{{exportNum}}", str(exportNum))
        exportStr = exportStr.replace("{{description}}", self.description)

        return exportStr

def main():
    createRSS()

def createRSS():
    posts = getItems(getBlogPosts())#.sort(key = lambda post:post.date)
    for post in posts:
        print("Date Time: " + str(post.formatTime()))
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
    outer = "<?xml version=\"1.0\" encoding=\"utf-8\"?> <rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\"> <channel> <atom:link href=\"https://blog.craftidore.com/v1/feed.rss\" rel=\"self\" type=\"application/rss+xml\" /> <title>Craftidore's Blog</title> <link>https://blog.craftidore.com</link> <description>Craftidore's Coding Blog</description> <language>en-us</language> <image> <title>Craftidore's Blog</title> <link>https://blog.craftidore.com</link> <url>https://blog.craftidore.com/source/img/Logo.png</url> <width>50</width> <height>50</height> </image>{{items}}</channel></rss>" 
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
        if (not isfile(fileName)) and re.match(r".*\.txt$", fileName):
            l.append(re.sub(r"(.*)\.txt$", "\\1", fileName))
        else:
            print(fileName + " is not a file")
    return l

def getItems(fileNames):
    l = []
    for fileName in fileNames:
        f = open(join("./blog/", fileName + ".txt"), "r")
        print("Reading " + fileName)
        markdown = f.read()
        f.close()
        title, date, time, description = getYaml(markdown)
        if title == "":
            title = fileName
        if description == "":
            description = title
        print("Title: " + title)
        print("Date: " + str(date))
        print("Time: " + time)
        print("Description: " + description)
        l.append(blogPost(fileName, title, date, time, description))
    return l

def getYaml(markdown):
    frontmatter = getFrontmatter(markdown)
    yml = yaml.safe_load("yaml: false")
    try: 
        yml = yaml.safe_load(frontmatter)
    except yaml.YAMLError as e:
        print(e)
    print(yml)
    title, date, time, description = ("", 0, "10:00", "")
    if "title" in yml:
        title = yml["title"]
    if "date" in yml:
        date = yml["date"]
    if "time" in yml:
        time = yml["time"]
    if "description" in yml:
        description = yml["description"]
    return (title, date, time, description)
    
def getFrontmatter(markdown):
    return re.compile(r"^---(\r|\n)((.|\r|\n)+)---").match(markdown)[2]


if __name__ == "__main__":
    main()
