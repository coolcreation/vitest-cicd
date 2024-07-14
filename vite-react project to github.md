#### Deploy vite-react project to github - hosted live!
https://www.youtube.com/watch?v=tg-Xgx-lqXM
Go to github, make new repo named "vitest-cicd"
On pc, create a new folder called "vitest-cicd" and then....
cd vitest-cicd
npm create vite@latest    ( project name is nothing, so type ".")
npm install
npm install -D gh-pages

```js
//edit package.json:
  "homepage": "https://coolcreation.github.io.vitest-cicd/",  // add this line
  "name": "react-vite-website",
  "type": "module",
  "scripts": {
    "predeploy": "npm run build",      // add this line
    "deploy": "gh-pages -d dist",      // add this line
    "dev": "vite",
    "build": "vite build",
  },
```

```js
// edit vite.config
export default defineConfig({
  base: "/vitest-cicd/",           // add this line
  plugins: [react()],
})
```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/coolcreation/vitest-cicd.git
git push -u origin main
npm run deploy


