# VitePressドキュメントサイト・セットアップ完了ガイド

> 作成日: 2026-02-05
> 更新日: 2026-02-06
> ステータス: **公開完了** 🎉

---

## ✅ 完了した作業

1. **VitePressインストール**: npmでVitePress 1.6.4をインストール
2. **設定ファイル作成**:
   - `package.json`: スクリプトと依存関係
   - `docs/.vitepress/config.ts`: サイト設定（ナビゲーション・サイドバー）

3. **コンテンツ移動**: 21ファイルのMarkdownを`docs/`ディレクトリに移動
4. **ローカルビルドテスト**: ビルド成功を確認（2.32秒）
5. **Cloudflare Pagesデプロイ完了**: 本番URL `https://ono-mansion.pages.dev` で公開中

---

## 🔵 Git連携設定（オプション：自動デプロイ有効化）

**現在の状態**: Wrangler CLIで手動デプロイ完了（`https://ono-mansion.pages.dev`）

**Git連携のメリット**: `git push` で自動ビルド＆デプロイ

### Step 1: Cloudflare PagesでGit連携を有効化

1. **Cloudflare Pagesダッシュボードを開く**:
   ```
   https://dash.cloudflare.com/
   ```

2. **「Create a project」をクリック**

3. **Git連携を設定**:
   - **Connect to Git**: GitHubを選択
   - **リポジトリ**: `nifoche/ono-mansion`を選択

4. **ビルド設定を入力**:
   ```
   Framework preset: None
   Build command: npm run docs:build
   Build output directory: docs/.vitepress/dist
   Root directory: (空のまま)
   ```

5. **「Save and Deploy」をクリック**

---

## 🚀 自動デプロイの仕組み

Cloudflare PagesとGitHubを連携すると、以下のタイミングで自動デプロイされます：

1. **mainブランチへのプッシュ時**: 本番環境へデプロイ
2. **プルリクエスト作成時**: プレビュー環境を自動生成

---

## 📊 デプロイ状況の確認方法

### 方法1: Cloudflare Pagesダッシュボード

1. **プロジェクトページを開く**:
   - Cloudflareダッシュボード > Pages > ono-mansion

2. **デプロイ履歴を確認**:
   - 最新のデプロイステータス
   - ビルドログ
   - デプロイ済みURL

### 方法2: Cloudflare CLI（wrangler）

```bash
# デプロイ一覧を確認
wrangler pages deployment list --project-name=ono-mansion

# 最新のデプロイ詳細を確認
wrangler pages deployment tail --project-name=ono-mansion
```

---

## 🌐 サイトにアクセス

### 🎉 本番URL

サイトは既に公開されています。以下のURLからアクセスできます：

**本番URL**: **https://ono-mansion.pages.dev**

### 期待される表示内容

- **ヒーローセクション**: 「小野マンション・不動産投資・コンセプト設計・リフォーム計画」
- **ナビゲーション**: ホーム、計画、ガイド、レポート
- **サイドバー**: プランC（ハイブリッド）、ROI分析、資材リストなど

---

## 🛠️ ローカル開発環境の使い方

### ローカルで開発サーバーを起動

```bash
cd /Users/sales/genki-denki/dev/genki/ono-mansion

# 開発サーバー起動（http://localhost:5173）
npm run docs:dev
```

### ローカルでビルドしてプレビュー

```bash
# ビルド
npm run docs:build

# プレビューサーバー起動
npm run docs:preview
```

---

## 📝 コンテンツの更新方法

### 現在の方法：Wrangler CLIで手動デプロイ

1. `docs/`ディレクトリ以下のMarkdownファイルを編集
2. ビルド:
   ```bash
   npm run docs:build
   ```
3. デプロイ:
   ```bash
   wrangler pages deploy docs/.vitepress/dist --project-name=ono-mansion
   ```
4. 数秒で `https://ono-mansion.pages.dev` に反映

### Git連携後：自動デプロイ

1. `docs/`ディレクトリ以下のMarkdownファイルを編集
2. コミットしてプッシュ:
   ```bash
   git add .
   git commit -m "update: ドキュメント更新"
   git push
   ```
3. Cloudflare Pagesが自動でビルド＆デプロイ

### 設定を変更する場合

1. `docs/.vitepress/config.ts`を編集
2. ローカルでテスト: `npm run docs:build`
3. コミットしてプッシュ

---

## 🔧 トラブルシューティング

### デプロイが失敗する場合

**確認事項**:
1. ビルド設定が正しいか（`npm run docs:build`、`docs/.vitepress/dist`）
2. Cloudflare Pagesのビルドログを確認
3. Node.jsバージョン（20以上推奨）

### ローカルビルドが失敗する場合

```bash
# キャッシュをクリアして再ビルド
rm -rf node_modules docs/.vitepress/dist
npm install
npm run docs:build
```

### スタイルが適用されない場合

現在の設定ではデフォルトテーマを使用しています。カスタムスタイルを適用するには：

1. `docs/.vitepress/theme/index.ts`を作成:
   ```typescript
   import './custom.css'
   ```

2. `docs/.vitepress/theme/custom.css`を作成:
   ```css
   :root {
     --vp-c-brand-1: #3c8772;
     --vp-c-brand-2: #347562;
   }
   ```

---

## 🚀 Cloudflare Pagesの利点

- **無料枠**: 無制限のリクエスト、帯域幅
- **自動デプロイ**: Gitプッシュで自動ビルド＆デプロイ
- **グローバルCDN**: 200以上のロケーションで高速配信
- **プレビューURL**: PRごとに自動生成
- **カスタムドメイン**: 無料でHTTPS対応

---

## 📚 参考リンク

- **VitePress公式ドキュメント**: https://vitepress.dev/
- **Cloudflare Pagesドキュメント**: https://developers.cloudflare.com/pages/
- **Cloudflare PagesとGitHub連携**: https://developers.cloudflare.com/pages/configuration/build-configuration/

---

**🎉 公開完了**: VitePressドキュメントサイトが **https://ono-mansion.pages.dev** で公開中です。

Git連携を設定すると、`git push` で自動デプロイが可能になります。
