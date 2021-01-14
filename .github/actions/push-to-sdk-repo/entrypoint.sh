#!/bin/sh

#unzip folder
mkdir unzip-tmp
cd unzip-tmp
mv ../sdk-generation/bandwidth.zip .
unzip bandwidth.zip
rm bandwidth.zip
cd ..

#setup repo
mkdir git-push
cd git-push
git init
git remote add origin "https://$BW_GITHUB_USERNAME:$BW_GITHUB_PASSWORD@github.com/Bandwidth/$1.git"
git pull origin main

#generate branch
BRANCH=$(date +"expr "%Y-%m-%d-%H-%M-%S"" | sh)
BRANCH="release/${BRANCH}"
git checkout -b "$BRANCH"

# Ignore the files/folders in .gitkeep
# Then remove folder contents
git update-index --skip-worktree $(git ls-files $(cat .gitkeep))
rm -rf .

# mv sdk files into local git repo
mv ../unzip-tmp/bandwidth/$2* .

# Add to git config and commit
git add .
git config user.name $BW_GITHUB_USERNAME
git config user.email $BW_GITHUB_EMAIL
git commit -m "New deploy"
git push --set-upstream origin "$BRANCH"

#Set current directory back to the initial location
cd ..
rm -rf git-push
