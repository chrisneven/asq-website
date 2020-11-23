#!/usr/bin/env sh

# ------------------------------
# Define functions:
# ------------------------------

RED='\033[0;31m'
NC='\033[0m' # No Color
# Prints warning. (White text, red background).
function print_warning {
    # Print colored text:
    echo -e "\033[37;41m$1\033[0m"
}

echo "-------------------------------------------------------------"
echo "Performing repository update"
echo "-------------------------------------------------------------"
cd /app
git pull

echo "-------------------------------------------------------------"
echo "Performing npm ci"
echo "-------------------------------------------------------------"
npm ci

echo "-------------------------------------------------------------"
echo "Creating production build"
echo "-------------------------------------------------------------"
npm run build

if [ "$?" -ne "0" ]; then
    print_warning "Build failed, exiting."
    exit 1
fi

echo "-------------------------------------------------------------"
echo "Reloading pm2 app"
echo "-------------------------------------------------------------"
touch deployed.lock
pm2 reload ./pm2.json

echo "-------------------------------------------------------------"
echo "Build finished"
echo "-------------------------------------------------------------"
