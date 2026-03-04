# Internal Docs

社内向けドキュメント共有プラットフォーム

## 概要

このプロジェクトは、社内向けにドキュメントを共有するための静的サイトジェネレーターです。VitePressを使用しており、GitHub Pagesで自動デプロイされます。

## 機能

- 🔍 **ローカル検索**: Algolia不要で完全にローカルに動作する検索機能
- 📱 **モバイル対応**: レスポンシブデザイン
- 🎨 **美しいUI**: VitePressのデフォルトテーマ
- 🚀 **自動デプロイ**: mainブランチへのpushでGitHub Pagesに自動デプロイ

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run docs:dev

# ビルド
npm run docs:build

# プレビュー
npm run docs:preview
```

## プロジェクト構成

```
internal-docs/
├── docs/
│   ├── .vitepress/
│   │   └── config.ts        # VitePress設定
│   ├── index.md             # トップページ
│   └── projects/            # プロジェクト別ドキュメント
│       └── ono-mansion/     # 小野マンションプロジェクト
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions
└── package.json
```

## 新規プロジェクトの追加

1. `docs/projects/new-project/` ディレクトリを作成
2. `docs/.vitepress/config.ts` にサイドバー設定を追加
3. `nav` にプロジェクトリンクを追加

詳細は [CONTRIBUTING.md](docs/CONTRIBUTING.md) を参照してください。

## ライセンス

MIT License

## 作者

genki-denki
