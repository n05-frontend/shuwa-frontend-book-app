# 秀和システム「フロントエンド開発入門 プロフェッショナルな開発ツールと設計・実装 」サンプルアプリケーション
書籍「フロントエンド開発入門 プロフェッショナルな開発ツールと設計・実装」内で使用するサンプルアプリケーションのコードを GitHub 上で公開しています。

## ブランチと書籍の対応表
ブランチは「Part 2 実践編 どう使うかを学ぶ」の各チャプターに対応しています。

| ブランチ | 書籍 |
| --- | --- |
| 2-2-1_webpack_babel | 6-1 フロントエンド環境の構築 |
| 2-2-3_typescript | 6-2 TypeScript の導入 |
| 2-2-4_esmodules | 6-3 コードの分割 |
| 2-2-5_unit-testing | 6-4 Jest を利用したユニットテスト |
| 2-2-6_react-component | 6-5 React の導入 |
| 2-2-7_component-testing | 6-6 Enzyme を使ったコンポーネントのテスト |
| 2-2-8_styled-components | 6-7 styled-components の導入 |
| 2-3-1_continuous-integration | 7-1 CI/CD によって受けられるメリット |
| 2-3-2_measure-perf-with-lh | 7-2 パフォーマンスと改善 |

## 実行環境
本アプリケーションは下記環境を想定して実装されています。
ご自身の環境で利用する場合は各種ツールのバージョンをご確認の上で利用してください。

- Docker: 19.x
- Node.js: 12.x
- Yarn: 1.22.x

## アプリケーションの起動
本リポジトリを `git clone` するか、もしくは GitHub 上のダウンロードリンクからコードをダウンロードしてご自身の環境で利用してください。

### API の環境構築手順
```bash
git clone git@github.com:n05-frontend/shuwa-frontend-book-app.git
cd shuwa-frontend-book-app
docker-compose build # 2回目以降は不要
docker-compose up -d # Docker コンテナ起動
```

## 書籍情報
- [フロントエンド開発入門 プロフェッショナルな開発ツールと設計・実装](https://www.shuwasystem.co.jp/book/9784798061771.html)
