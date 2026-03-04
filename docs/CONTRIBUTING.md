# プロジェクト追加ガイド

このガイドでは、新しいプロジェクトのドキュメントをInternal Docsに追加する方法を説明します。

## 新規プロジェクトの追加手順

### 1. ディレクトリの作成

```bash
mkdir -p docs/projects/new-project/{plans,guides,checklists,resources,research,reports}
```

### 2. ドキュメントの配置

プロジェクトのMarkdownファイルを適切なサブディレクトリに配置します：

- `plans/`: 計画書・仕様書
- `guides/`: ガイド・手順書
- `checklists/`: チェックリスト
- `resources/`: リソース・テンプレート
- `research/`: 調査・研究資料
- `reports/`: レポート・報告書

### 3. VitePress設定の更新

`docs/.vitepress/config.ts` を編集します：

#### ナビゲーションに追加

```typescript
nav: [
  { text: 'ホーム', link: '/' },
  { text: 'ono-mansion', link: '/projects/ono-mansion/' },
  { text: 'new-project', link: '/projects/new-project/' },  // 追加
],
```

#### サイドバーに追加

```typescript
sidebar: {
  '/projects/new-project/': [
    {
      text: '新規プロジェクト',
      items: [
        { text: 'はじめに', link: '/projects/new-project/' },
        // その他のドキュメント...
      ]
    }
  ]
}
```

### 4. トップページの作成（オプション）

`docs/projects/new-project/index.md` を作成します：

```markdown
# 新規プロジェクト

プロジェクトの概要をここに記載します。

## 主なドキュメント

- [計画書](/projects/new-project/plans/plan-name)
- [ガイド](/projects/new-project/guides/guide-name)
```

### 5. 動作確認

```bash
npm run docs:dev
```

ブラウザで `http://localhost:5173/projects/new-project/` にアクセスして確認します。

### 6. コミット＆プッシュ

```bash
git add .
git commit -m "docs: 新規プロジェクト「new-project」を追加"
git push origin main
```

## 注意事項

### 秘密情報の取り扱い

以下の情報を含める前に、必ず確認してください：

- APIキー
- パスワード
- トークン
- 個人情報（電話番号、メールアドレス、住所）
- 機密情報

これらの情報が誤って含まれないよう、コミット前にレビューを行ってください。

### 内部リンク

VitePressでは、拡張子なしのパスを使用します：

```markdown
✅ 正しい: [/projects/ono-mansion/plans/plan-a](/projects/ono-mansion/plans/plan-a)
❌ 誤り: [/projects/ono-mansion/plans/plan-a.md](/projects/ono-mansion/plans/plan-a.md)
```

### 画像とアセット

画像やその他のアセットは `docs/public/` ディレクトリに配置します：

```markdown
![画像説明](/image-name.png)
```

## テンプレート

新規プロジェクト用のテンプレートを以下に用意しています：

```typescript
// config.ts のサイドバーテンプレート
sidebar: {
  '/projects/new-project/': [
    {
      text: 'プロジェクト名',
      items: [
        { text: 'はじめに', link: '/projects/new-project/' },
        {
          text: '計画書',
          collapsed: true,
          items: [
            { text: '計画1', link: '/projects/new-project/plans/plan-1' },
            { text: '計画2', link: '/projects/new-project/plans/plan-2' },
          ]
        },
        {
          text: 'ガイド',
          collapsed: true,
          items: [
            { text: 'ガイド1', link: '/projects/new-project/guides/guide-1' },
          ]
        },
      ]
    }
  ]
}
```

---

ご不明な点があれば、プロジェクトメンテナーにお問い合わせください。
