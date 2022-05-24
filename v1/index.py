import sys

sys.path.append('python')

import indexBlog

indexBlog.main()

import createRSS
print("Create RSS:")
print(createRSS.blogPost("Home","Home",220520,"Home Page").export(1))
createRSS.main()
