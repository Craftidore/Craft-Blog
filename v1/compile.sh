#!/bin/bash

# Start typescript compiler
cat tsconfig.json > /dev/null && tsc -w > /dev/null &

# Start scss compiler
cat ./source/scss/style.scss > /dev/null && sass --watch ./source/scss/style.scss ./css/style.css > /dev/null &

# Browser-sync init
browser-sync start --server --directory --files "**/*" 

