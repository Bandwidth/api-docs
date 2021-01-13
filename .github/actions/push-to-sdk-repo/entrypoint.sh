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

# Mark files in the .gitkeep file as "un-tracked".  Uses Git pathspec globbing
# Then deletes the entire checked-out repo.
git update-index --skip-worktree $(git ls-files $(cat .gitkeep))
rm -rf

#add files. cp -R forces overwites and preserves directory structure
#mv does not do the same
cp -R ../unzip-tmp/bandwidth/$3* .
rm -rf ../unzip-tmp

#checkout files to ignore
ignoreFileString=$2 #I don't know why the parameter needs to be reassigned, but
#shell is unhappy with doing an if statement with the variable as $2
if test ${#ignoreFileString} -gt 0; then
    ignoreFileList=$(echo $ignoreFileString | tr " " "\n")
    for ignoreFile in $ignoreFileList
    do
        git checkout $ignoreFile
    done
fi

git add .
git config user.name $BW_GITHUB_USERNAME
git config user.email $BW_GITHUB_EMAIL
git commit -m "New deploy"
git push --set-upstream origin "$BRANCH"

#Set current directory back to the initial location
cd ..
rm -rf git-push
