# 秀和システム「{本のタイトル} 」サンプルアプリケーション
書籍「{本のタイトル}」内で使用しているサンプルアプリケーションのコードをGitHub上で公開しています。

## サンプルアプリケーションについて
TODO:

### 各章とブランチの対応表
TODO:

### 実行環境
本アプリケーションは下記環境で実装されています。ご自身の環境で利用する場合、各種ツールのバージョンをご確認の上で利用してください。

* Docker: 19 以上
* Node.js: 12 以上
* Yarn: 1.22 以上

### アプリケーションの起動
本リポジトリを `git clone` するか、もしくはGitHub上のダウンロードリンクからコードをダウンロードして、ご自身の環境で利用してください。下記のAPIの環境構築手順を実行してAPIサーバを起動後、 `npx serve --listen 9000` を実行することでクライアント側のサーバが起動します。画面はブラウザから `http://localhost:9000` にアクセスすると表示されます。

**APIの環境構築手順**
```bash
$ git clone git@github.com:tkdn/shuwa-frontend-book-app.git
$ cd shuwa-frontend-book-app
$ docker-compose build # 2回目以降は不要
$ docker-compose up -d
```

## 書籍情報
* [{本のタイトル}]()
