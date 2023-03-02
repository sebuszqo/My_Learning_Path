### All commands for git usage, from simple to these that can be used to cooperate with others developers

git init - initializing new git repo

git add ./ <file/dir>

### We have to remember that we are committing only files that we WROTE, not these like node_modules or dist !

We have to use .gitignore

### commits

git commit -m"Your comment about this commit"

### status

git status

### checking history

git log

git show --color --pretty=format:%b <hash commita>

### going before in history

git reset --hard <hash or tag of commit that we want to go>

git revert <hash or tag of commit that we want to go>

### git commit and git add in one click thanks to webstorm

crtl + alt + K --> git push commit and add in one - then crlt + enter to push
crtl + enter --> git commit and add in one

### new repository

git remote add origin <link to repository>
git branch -M main
git push -u origin main

### git pull

giti merge + conflicts

### branches

git checkout -b <branch_name>
