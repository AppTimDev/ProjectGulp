## A template project to show how to use gulp.

---

1. Minify and uglify js 
2. Minify css
3. Minify html
4. Combine all files to a bundle file
5. Create a webserver with liveload

---

## Environment:
- Windows 10

- node v10.24.1
- npm 6.14.12
- gulp 3.8.11
  CLI version 3.8.11
  Local version 3.8.11
- gulp-webserver@0.9.1

---

## Installation
### Install gulp globally 
```cmd
npm install -g gulp
```

### Install the gulp package in your devDependencies
```cmd
npm install gulp --save-dev
```

### Edit the system environment variables
Edit the PATH variable and add a new value "C:\Users\Username\AppData\Roaming\npm".

### To update Local version 
npm install gulp@version_you_need --save-dev
npm install gulp@3.8.11 --save-dev

### To update CLI version 
npm install -g gulp@version_you_need
npm install -g gulp@3.8.11
---

## Installation of the 
### 

---

## Install nvm for window users
1. Go to https://github.com/coreybutler/nvm-windows/releases

## Nvm Commands 
### Install the version for node
```cmd
nvm install 10.24.1
```
### Use the node version
```cmd
nvm use 10.24.1
```
### List the installed version of node and all latest versions.
```cmd
nvm list
nvm list available
```

---

## Commands 
### Check the version for node, npm
```cmd
node -v
npm -v
```
### Check the version for gulp (after installation)
```cmd
gulp -v
```

### List all the node packages
```cmd
npm list 
```

### Check the version of node packages
```cmd
npm list gulp-webserver
```

---