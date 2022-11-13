# Home Page
## This project is used to create my home page.

It mainly focuses on the front end environment for building a simple web page 

It uses gulp.js to bundle the whole project and optimize for the best performance. 

It also provides a way to show a simple responsive web design that can adjust for different screen sizes and viewports.

---

Use gulp as a task runner
- Minify and uglify js 
- Minify css
- Minify html
- Combine all files to a bundle file
- Create a webserver with liveload
- Clean all files
- Copy files to destination folder

---

## Environment:
- Windows 10

- node v10.24.1 
- npm 6.14.12
- nvm 1.1.7
- gulp 3.8.11
  - CLI version 3.8.11
  - Local version 3.8.11
- version of node packages (refer to package.json)
- gulp-concat ^2.6.1
- gulp-contrib-copy ^0.1.3
- gulp-html-replace ^1.6.2
- gulp-minify-css ^1.2.4
- gulp-minify-html ^1.0.6
- gulp-rename ^2.0.0
- gulp-uglify ^3.0.2
- gulp-webserver ^0.9.1
- rimraf ^3.0.2
- browser-sync@2.27.10

---

## Installation
### `Nvm`, `Node`
Install nvm for window users
1. Go to https://github.com/coreybutler/nvm-windows/releases

Install node version 10.24.1
```cmd
nvm install 10.24.1
```

Change to node version 10.24.1
```cmd
nvm use 10.24.1
```

### `gulp`
### Install gulp globally 
```cmd
npm i -g gulp
```

### Install the gulp package in your devDependencies
```cmd
npm i --save-dev gulp
```

### Edit the system environment variables
Edit the PATH variable and add a new value "C:\Users\Username\AppData\Roaming\npm".

### To update Local version 
npm install gulp@version_you_need --save-dev

npm install gulp@3.8.11 --save-dev

### To update CLI version 
npm install -g gulp@version_you_need

npm install -g gulp@3.8.11

### `Node modules`
```cmd
npm i
```

Full details:
```cmd
npm i --save-dev gulp-webserver 
npm i --save-dev gulp-minify-css gulp-uglify gulp-concat gulp-rename 
npm i --save-dev gulp-html-replace gulp-minify-html 
npm i --save-dev rimraf gulp-contrib-copy 
npm i --save-dev browser-sync 
```

---

## Usage

### `npm run dev`
Runs the app in development mode and the dev server (Port 3000).

Open http://localhost:3000 to view it in the browser

### `npm run build`
Builds for production to the dest folder.

It bundles the app in production mode and optimizes the build for the best performance.

---

## Version
### Check the version for node, npm, nvm
#### Node
```cmd
node -v
npm -v
nvm version
```

#### Check the version for gulp (after installation)
```cmd
gulp -v
```

#### List all the node packages
```cmd
npm list 
```
or list one package

```cmd
npm list browser-sync
```

#### List the installed version of node and all latest versions.
```cmd
nvm list
nvm list available
```

---