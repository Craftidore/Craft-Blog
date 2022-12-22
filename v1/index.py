#!/bin/python

import createRSS
import indexBlog
import sys

sys.path.append('python')


indexBlog.main()

createRSS.main()
