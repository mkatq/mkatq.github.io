#!/bin/bash

# Step 1: Switch to dev branch
git switch dev

# Step 2: Move to project folder
cd "myportfolio" || exit 1

# Step 3: Install dependencies & build
npm install
npm run build

echo "✅ Project built successfully!"

# Step 4: Copy build to a temporary folder
rm -rf ../temp        # remove old temp if exists
mkdir -p ../temp      # create temp folder
cp -r dist/* ../temp  # copy contents of dist to temp

# Step 5: Switch to main branch
git switch main

# Step 6: Remove old myportfolio folder if needed
rm -rf myportfolio    # WARNING: deletes old folder

# Step 7: Copy temp folder as new myportfolio
cp -r ../temp myportfolio

echo "✅ Build copied to main branch!"
