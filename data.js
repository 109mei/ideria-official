/* =============================================================
   data.js — IDERIA公式サイトのコンテンツデータ
   正は docs/SITE_SPEC.md §6。ここに§6にない情報を足さないこと。
   お知らせの追記手順は §7 を参照（news 配列の先頭に1件足す）。
   ============================================================= */

window.IDERIA_DATA = {

  /* ---------- サイト基本情報 ---------- */
  site: {
    name: "IDERIA",
    tagline: "アイデアを、遊べるかたちに。",
    // assets/logo.png を置くと、自動でタイポからロゴ画像に差し替わる
    logo: "assets/logo.png",
    logoAlt: "IDERIA ロゴ"
  },

  /* ---------- About（§3-2） ---------- */
  about: {
    lead: "IDERIA は、ゲーム・教材の企画制作を行う団体です。",
    body: "高校・大学と連携した制作活動（高大連携）を実施しています。",
    facts: [
      { label: "代表", value: "永野斗遠（九州情報大学大学院）" },
      { label: "活動", value: "ゲーム・教材の企画制作" },
      { label: "連携", value: "高校・大学と連携した制作活動（高大連携）" }
    ]
  },

  /* ---------- 作品図鑑（§6） ---------- */
  works: [
    {
      no: "01",
      title: "チョコパキ！",
      desc: "Python+Pygameの対戦ゲーム。ゲーム学会 第21回ゲームコンペ優秀賞。物理的触覚体験（おもちゃ化）の試作も実施",
      image: "https://109mei.github.io/game-learning-archive/images/games/ideria-chokopaki.png",
      links: [
        { label: "遊ぶ", url: "https://109mei.github.io/game-learning-archive/games/ideria-chokopaki/" }
      ]
    },
    {
      no: "02",
      title: "OneButtonGames",
      desc: "高校生・大学生が制作した1ボタンゲーム10作品を収録した専用ランチャー。IDERIA×純真高等学校×九州情報大学の高大連携プロジェクト。ゲーム学会第24回全国大会でデモ展示",
      image: "",
      links: [
        { label: "アーカイブ", url: "https://109mei.github.io/game-learning-archive/activities/one-button-games/" }
      ]
    },
    {
      no: "03",
      title: "しまっぴー先生の覚えてクイズ",
      desc: "TyranoScript製の記憶クイズゲーム",
      image: "",
      links: []
    },
    {
      no: "04",
      title: "ひらがなUNO（SHIRITORI）",
      desc: "ひらがなカードでしりとりを行うカードゲーム",
      image: "",
      links: []
    },
    {
      no: "05",
      title: "オセロカードゲーム（試作）",
      desc: "オセロを題材にしたアナログカードゲームの試作",
      image: "",
      links: []
    },
    {
      no: "06",
      title: "IDERIAロゴ・大会ポスター",
      desc: "IDERIAロゴ、ゲーム学会第24回全国大会（九州情報大学開催）テーマポスターのデザイン",
      image: "",
      links: []
    },
    {
      no: "07",
      title: "ゲーム制作・プログラミング学習アーカイブ",
      desc: "ゲームジャム・授業・高大連携の作品をブラウザで遊べる形で公開する学習サイト",
      image: "",
      links: [
        { label: "サイトを見る", url: "https://109mei.github.io/game-learning-archive/" }
      ]
    }
  ],

  /* ---------- 活動（§6） ---------- */
  activities: [
    {
      title: "教育用ゲームジャムの企画運営",
      rows: [
        { when: "2025",    what: "九州情報大学で第1回・第2回" },
        { when: "2025-03", what: "福岡県立嘉穂総合高等学校で1日完結型の試行" },
        { when: "2025-11", what: "純真高等学校 eスポーツ部で第3回" },
        { when: "2026-08", what: "九州情報大学で第4回（夏の集中講義内）" }
      ],
      links: [
        { label: "純真高等学校の紹介記事", url: "https://junshin-hs.ed.jp/club/archives/19744" }
      ]
    },
    {
      title: "VRを用いた3Dモデル制作体験会",
      rows: [
        { when: "2026-01", what: "純真高等学校" }
      ],
      links: []
    },
    {
      title: "高大連携制作プロジェクト OneButtonGames",
      rows: [
        { when: "2026-01〜", what: "IDERIA×純真高等学校×九州情報大学の高大連携プロジェクト" }
      ],
      links: [
        { label: "活動の記録", url: "https://109mei.github.io/game-learning-archive/activities/one-button-games/" }
      ]
    }
  ],

  // 活動セクションから学習アーカイブの活動記録ページへ（§3-4）
  activitiesMoreUrl: "https://109mei.github.io/game-learning-archive/activities/",

  /* ---------- 受賞・実績（§6） ---------- */
  awards: [
    {
      badge: "優秀賞",
      title: "ゲーム学会 第21回ゲームコンペ",
      detail: "「チョコパキ！」（永野斗遠・田村明日香）"
    },
    {
      badge: "2年連続",
      title: "令和の都だざいふ 世界に羽ばたく人材育成表彰",
      detail: "名義: 永野斗遠・田村明日香・IDERIA"
    },
    {
      badge: "発表・展示",
      title: "ゲーム学会 第24回全国大会で発表・デモ展示",
      detail: "チョコパキ！おもちゃ化 OC3／VR体験 DP4／OneButtonGames DP5"
    }
  ],

  /* ---------- お知らせ（§6・§7） ----------
     新しいものを先頭に足す。date は "YYYY-MM-DD" または "YYYY-MM"。
     30日以内（未来の予定を含む）は自動で NEW バッジが付く。 */
  news: [
    {
      date: "2026-09-05",
      title: "ゲーム学会「ゲームと健康科学」第3回研究会で発表（予定）"
    },
    {
      date: "2026-09",
      title: "ゲーム制作・プログラミング学習アーカイブを公開しました",
      url: "https://109mei.github.io/game-learning-archive/"
    },
    {
      date: "2026-02",
      title: "令和の都だざいふ 世界に羽ばたく人材育成表彰を受賞（2年連続）"
    }
  ],

  /* ---------- フッター（§3-7） ---------- */
  footerLinks: [
    { label: "ゲーム制作・プログラミング学習アーカイブ", url: "https://109mei.github.io/game-learning-archive/", note: "遊ぶ・学ぶ" },
    { label: "ポートフォリオ", url: "https://109mei.github.io/", note: "" }
  ],

  // SNS: 空のままなら、フッターのSNS欄そのものが表示されない
  // 例) { label: "X", url: "https://..." }
  social: []
};
