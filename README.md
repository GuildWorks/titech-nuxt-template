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
1. install home brew

```$xslt
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. install node
```$xslt
$ brew install nodebrew
$ nodebrew install-binary latest
```

## yarn install
1. yarn install
```$xslt
$ npm install yarn -g
```
2. yarnの確認コマンド（インストールされたyarnのバージョンが表示される）
```$xslt
$ yarn --version
```

## git clone
```$xslt
git clone https://github.com/GuildWorks/titech-vue-template.git
```
```$xslt
cd titech-vue-template
```


## Initial launch
1. Install libraries
```$xslt
$ yarn install
```

## create work branch
```
$ git checkout -b work-branch refs/tags/work1
```

## Launch application
```
$ yarn serve
```

## Development tools
- [Visual Studio Code](https://code.visualstudio.com/)
- [Veture](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [vue-devtools](https://github.com/vuejs/vue-devtools)
