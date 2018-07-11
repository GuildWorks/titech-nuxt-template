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

`localhost:3000`でAPIサーバーを起動
```
$ yarn api
```

別タブで `localhost:8080`でフロントのリソースを配信
```
$ yarn serve
```

## [json-server](https://github.com/typicode/json-server)
- APIサーバーのモックに使用
- [db.js](https://github.com/GuildWorks/titech-vue-template/blob/master/db.js)に初期データとAPIのエンドポイントを設定
- 詳しい使い方は [ドキュメント](https://github.com/typicode/json-server)を参照
