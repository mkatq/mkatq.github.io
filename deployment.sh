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
cd ../
# Step 5: Switch to main branch
git switch main

# Step 6: Remove old files in main (but keep .git and scripts)
echo "🧹 Cleaning old files..."
find . -mindepth 1 -maxdepth 1 \
  ! -name ".git" \
  ! -name ".gitignore" \
  ! -name "temp" \
  -exec rm -rf {} +



# Step 7: Copy new build files to root
cp -r temp/* .
rm -rf temp        # remove old temp if exists

# # Step 8: Push changes
# git add .
# git commit -m "Update build from dev"
# git push

# echo "✅ Build copied to main branch!"
