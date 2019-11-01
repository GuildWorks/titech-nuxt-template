# Nuxt.js Project edit

## git install

### [git install(For Windows)](https://gitforwindows.org/)

### git install(For Mac)
1. Git comes with OS X. Please check the version of git.
```$xslt
$ git --version
```

### git概要
- [公式ドキュメント](https://www.git-scm.com/doc)
- [GitHub Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
- [Visual Git Cheat Sheet](https://ndpsoftware.com/git-cheatsheet.html#loc=local_repo;)
- [https://qiita.com/gilly/items/aed8eab37d0f72d6106d](https://qiita.com/gilly/items/aed8eab37d0f72d6106d)
- [https://qiita.com/nh321/items/6517b0964c6ed1685ecf](https://qiita.com/nh321/items/6517b0964c6ed1685ecf)

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
$ npx create-nuxt-app sample
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

## install Visual Studio Code
- [Visual Studio Code](https://code.visualstudio.com/)
- [Veture](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## Practice1: Hello world
- [https://ja.nuxtjs.org/examples](https://ja.nuxtjs.org/examples)

## Practice2: Routing
- [https://ja.nuxtjs.org/guide/routing](https://ja.nuxtjs.org/guide/routing)
- [Dynamic Routes](https://vueschool.io/lessons/nuxtjs-dynamic-routes?friend=nuxt)
- [source code](https://github.com/vueschool/nuxt-fundamentals/blob/817ec3205b3085e1bf2f1d6c9d5ca1be21736494/pages/posts/_id.vue)
1. `pages/posts/_id.vue` に投稿詳細を作成してみよう
2. `pages/index.vue` に静的な投稿一覧を作成し、投稿詳細へ遷移できるようにしてみよう

## build & start for production
```
$ cd ~/workspace/<project-name>/
$ yarn build
$ yarn start
```

open browser
[localhost:3000](http://localhost:3000)

## Development tools
- [vue-devtools](https://github.com/vuejs/vue-devtools)
