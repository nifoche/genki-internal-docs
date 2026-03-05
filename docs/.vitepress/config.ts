import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Internal Docs',
  description: '社内向けドキュメント共有プラットフォーム',
  lang: 'ja-JP',

  // GitHub Pages用baseパス設定
  base: '/genki-internal-docs/',

  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],

  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'ono-mansion', link: '/projects/ono-mansion/' },
    ],

    sidebar: {
      '/projects/ono-mansion/': [
        {
          text: '小野マンション',
          items: [
            { text: 'はじめに', link: '/projects/ono-mansion/' },
            {
              text: 'プランA（大人の秘密基地）',
              collapsed: false,
              items: [
                { text: '施工手順書', link: '/projects/ono-mansion/plans/plan-a-construction-guide' },
                { text: '買い物リスト（基本）', link: '/projects/ono-mansion/plans/plan-a-shopping-list' },
                { text: '買い物リスト（詳細）', link: '/projects/ono-mansion/plans/plan-a-shopping-detailed' },
                { text: '完了チェックリスト', link: '/projects/ono-mansion/plans/plan-a-completion-checklist' },
                { text: '遮音ガイド', link: '/projects/ono-mansion/guides/plan-a-soundproofing-guide' },
              ]
            },
            {
              text: 'プラン',
              collapsed: true,
              items: [
                { text: 'プランC（ハイブリッド）', link: '/projects/ono-mansion/plans/plan-c-hybrid-implementation' },
                { text: '詳細WBS（45日工期）', link: '/projects/ono-mansion/plans/wbs-detailed-schedule' },
                { text: 'コンセプトルーム（34㎡ 2K）', link: '/projects/ono-mansion/plans/00-concept-room' },
                { text: 'コンセプトルーム（43.91㎡ 1LDK・60点版）', link: '/projects/ono-mansion/plans/01-concept-room-1ldk-43-91sqm' },
                { text: 'コンセプトルーム（43.91㎡ 1LDK・100点版）', link: '/projects/ono-mansion/plans/02-concept-room-1ldk-43-91sqm-pro-level' },
                { text: '60点→100点への改善計画', link: '/projects/ono-mansion/plans/concept-room-60-to-100-gap-analysis' },
                { text: '大人の秘密基底プラン', link: '/projects/ono-mansion/plans/2026-03-04-adult-secret-base-plan' },
                { text: '猫ルームInstagramプラン', link: '/projects/ono-mansion/plans/neko_room_instagram_plan_1' },
              ]
            },
            {
              text: 'ガイド',
              collapsed: true,
              items: [
                { text: 'コンセプトルームガイド', link: '/projects/ono-mansion/guides/ono-mansion-concept-room-guide' },
                { text: 'ボタニカル実験ガイド', link: '/projects/ono-mansion/guides/ono-mansion-market-experiment-botanical' },
                { text: 'SNS投稿カレンダー', link: '/projects/ono-mansion/guides/ono-mansion-sns-posting-calendar' },
                { text: 'トラブルシューティング', link: '/projects/ono-mansion/guides/ono-mansion-troubleshooting-guide' },
              ]
            },
            {
              text: 'チェックリスト',
              collapsed: true,
              items: [
                { text: '市場実験チェックリスト', link: '/projects/ono-mansion/checklists/market-experiment-execution-checklist' },
                { text: '小野マンション市場実験チェックリスト', link: '/projects/ono-mansion/checklists/ono-mansion-market-experiment-execution-checklist' },
              ]
            },
            {
              text: 'リソース',
              collapsed: true,
              items: [
                { text: 'アクションプラン詳細', link: '/projects/ono-mansion/resources/renovation-action-plan-detailed' },
                { text: '施工チェックシート', link: '/projects/ono-mansion/resources/renovation-construction-check-sheet' },
                { text: '資材詳細リスト', link: '/projects/ono-mansion/resources/renovation-materials-detailed-list' },
                { text: '資材価格検証データ', link: '/projects/ono-mansion/resources/renovation-materials-detailed-list-low-budget' },
              ]
            },
            {
              text: 'テンプレート集',
              collapsed: true,
              items: [
                { text: 'テンプレート索引', link: '/projects/ono-mansion/resources/MATERIAL_RESEARCH_TEMPLATES_INDEX' },
                { text: 'アクションプラン', link: '/projects/ono-mansion/resources/action-plan' },
                { text: '施工スケジュール', link: '/projects/ono-mansion/resources/construction-schedule' },
                { text: '業者連絡先リスト', link: '/projects/ono-mansion/resources/contractor-contact-list' },
                { text: '業者見積依頼テンプレート', link: '/projects/ono-mansion/resources/contractor-estimate-request-template' },
                { text: 'DIY道具リスト', link: '/projects/ono-mansion/resources/diy-tools-list' },
                { text: '現地測量チェックリスト', link: '/projects/ono-mansion/resources/site-measurement-checklist' },
                { text: '購入計画', link: '/projects/ono-mansion/resources/purchase-plan' },
              ]
            },
            {
              text: '資材調査テンプレート',
              collapsed: true,
              items: [
                { text: '空気清浄機', link: '/projects/ono-mansion/resources/material-research-template-air-purifier' },
                { text: '猫壁', link: '/projects/ono-mansion/resources/material-research-template-cat-wall' },
                { text: 'クッションフロア', link: '/projects/ono-mansion/resources/material-research-template-cushion-floor' },
                { text: 'ドア', link: '/projects/ono-mansion/resources/material-research-template-door' },
                { text: '照明タイマー', link: '/projects/ono-mansion/resources/material-research-template-lamp-timer' },
                { text: 'LEDライト', link: '/projects/ono-mansion/resources/material-research-template-led-light' },
                { text: 'LEDテープ', link: '/projects/ono-mansion/resources/material-research-template-led-tape' },
                { text: '観葉植物', link: '/projects/ono-mansion/resources/material-research-template-plants' },
                { text: '棚', link: '/projects/ono-mansion/resources/material-research-template-shelf' },
                { text: 'トイレ', link: '/projects/ono-mansion/resources/material-research-template-toilet' },
                { text: 'ユニットバス', link: '/projects/ono-mansion/resources/material-research-template-unit-bath' },
                { text: '換気', link: '/projects/ono-mansion/resources/material-research-template-ventilation' },
                { text: '壁紙', link: '/projects/ono-mansion/resources/material-research-template-wallpaper' },
                { text: '洗面化粧台', link: '/projects/ono-mansion/resources/material-research-template-washstand' },
                { text: '給湯器', link: '/projects/ono-mansion/resources/material-research-template-water-heater' },
              ]
            },
            {
              text: 'レポート',
              collapsed: true,
              items: [
                { text: '役員向け資料', link: '/projects/ono-mansion/reports/executive-proposal-2026-02-05' },
                { text: 'プロジェクトサマリー', link: '/projects/ono-mansion/reports/ono-mansion-project-summary-2026-02-05' },
              ]
            },
            {
              text: '調査・研究',
              collapsed: true,
              items: [
                { text: '猫ルーム実例', link: '/projects/ono-mansion/research/cat-room-examples' },
                { text: 'ボタニカルルーム実例', link: '/projects/ono-mansion/research/botanical-room-examples' },
                { text: 'ゲーミングルーム実例', link: '/projects/ono-mansion/research/gaming-room-examples' },
                { text: 'サウナルーム実例', link: '/projects/ono-mansion/research/sauna-room-examples' },
                { text: 'ホームジム実例', link: '/projects/ono-mansion/research/home-gym-examples' },
                { text: '大型犬対応実例', link: '/projects/ono-mansion/research/large-dog-examples' },
              ]
            },
            {
              text: 'データ・財務',
              collapsed: true,
              items: [
                { text: '市場調査分析', link: '/projects/ono-mansion/data/ono-mansion-market-research-analysis-2026-02-05' },
                { text: '資材価格検証', link: '/projects/ono-mansion/data/material-cost-verification-2026-02-07' },
                { text: 'コスト管理シート', link: '/projects/ono-mansion/financials/ono-mansion-cost-management-sheet' },
                { text: 'プロ推奨コース：商品選定', link: '/projects/ono-mansion/financials/plan-a-pro-course-materials' },
                { text: 'プロ推奨コース：積算書', link: '/projects/ono-mansion/financials/plan-a-pro-course-cost-breakdown' },
              ]
            },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nifoche/genki-internal-docs' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present genki-denki'
    }
  }
})
