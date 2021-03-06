#!/bin/bash

# Decrypt the deploy key
openssl aes-256-cbc -K $encrypted_e40f4962dafa_key -iv $encrypted_e40f4962dafa_iv -in .travis/secrets.tar.enc -out .travis/secrets.tar -d
tar xvf .travis/secrets.tar -C $HOME/.ssh/ >/dev/null
# Set the permission of the key
chmod 600 $HOME/.ssh/deploy_key.pri
# Start SSH agent
eval $(ssh-agent)
# Add deploy key to SSH agent
ssh-add $HOME/.ssh/deploy_key.pri
# Set git config
git config --global user.name "h404bi"
git config --global user.email "h404bi@gmail.com"
# Clone deploy history (keep build commits)
git clone --depth=1 --branch=gh-pages git@github.com:h404bi/www.h404bi.com.git .deploy_git
# Clear old files
rm -rf .deploy_git/*
# Copy new files
cp -r public/* .deploy_git
# Publish new commit to gh-pages
cd .deploy_git
git add -A
COMMITDATE=`date '+%Y-%m-%d %H:%M:%S'`
git commit -m "Site updated at $COMMITDATE"
git branch -m gh-pages
git push -q -u origin gh-pages
