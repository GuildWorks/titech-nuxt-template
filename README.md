# Vue.js Project

## git install

### [git install(For Windows)](https://gitforwindows.org/)

### git install(For Mac)
1. Git comes with OS X. Please check the version of git.
```$xslt
$ git --version
```

## node install

### node install(For Windows)
- [install link](https://nodejs.org/en/download/)
- [how to install](https://qiita.com/Masayuki-M/items/840a997a824e18f576d8)

### node install(For Mac)
- [install link](https://nodejs.org/en/download/)

### node version
チーム内でnodeのバージョンが一致していることを確認してください

Please align node versions with your team
```
node --version
```

## install nuxt
### 作業ディレクトリの作成
```
$ mkdir ~/workspace
$ cd ~/workspace/
```

### create-nuxt-app を使用してプロジェクトの雛形を作成
[https://ja.nuxtjs.org/guide/installation/](https://ja.nuxtjs.org/guide/installation/)

### プロジェクトの雛形作成の実行例
#### プロジェクト名が `sample` のとき
```
TomoakinoMacBook-Pro:workspace t_koshi$ npx create-nuxt-app sample
npx: installed 350 in 11.522s

create-nuxt-app v2.11.1
✨  Generating Nuxt.js project in sample
? Project name sample
? Project description My extraordinary Nuxt.js project
? Author name t-koshi
? Choose the package manager Yarn
? Choose UI framework Vuetify.js
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules (Press <space> to select, <a> to toggle all, <i> to inv
ert selection)
? Choose linting tools (Press <space> to select, <a> to toggle all, <i> to inver
t selection)
? Choose test framework None
? Choose rendering mode Single Page App
? Choose development tools (Press <space> to select, <a> to toggle all, <i> to i
nvert selection)

🎉  Successfully created project sample

  To get started:

	cd sample
	yarn dev

  To build & start for production:

	cd sample
	yarn build
	yarn start

TomoakinoMacBook-Pro:workspace t_koshi$
```


## Initial launch
1. Install libraries
```$xslt
$ cd ~/workspace/<project-name>/
$ yarn install
```

## Launch application for local
```
$ cd ~/workspace/<project-name>/
$ yarn dev
```

## Hello world
[https://ja.nuxtjs.org/examples](https://ja.nuxtjs.org/examples)

## build & start for production
```
$ cd ~/workspace/<project-name>/
$ yarn build
$ yarn start
```

open browser
[localhost:3000](http://localhost:3000)

## Development tools
- [Visual Studio Code](https://code.visualstudio.com/)
- [Veture](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [vue-devtools](https://github.com/vuejs/vue-devtools)
