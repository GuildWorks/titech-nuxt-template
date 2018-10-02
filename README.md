# Vue.jsプロジェクト テンプレート

## インストール手順

1. ToDo yarnのインストール
```$xslt
$ npm install yarn -g
```
2. ToDo nodeのインストール(For Mac)
```$xslt
$ brew install nodebrew
$ nodebrew install-binary latest
```
3. yarn install
```$xslt
$ yarn install
```

## 初回起動準備
1. envファイルの設定
```$xslt
$ cp .env.development.sample .env.development
```
※ 設定ファイルを自身の環境と合わせる

## 起動

別タブで `localhost:8080`でフロントのリソースを配信
```
$ yarn serve
```

## 開発ツール
- [Visual Studio Code](https://code.visualstudio.com/)
- [Veture](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [vue-devtools](https://github.com/vuejs/vue-devtools)
