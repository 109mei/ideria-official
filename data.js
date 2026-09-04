/* =============================================================
   data.js — IDERIA公式サイトのコンテンツデータ
   正は docs/SITE_SPEC.md §6。ここに§6にない情報を足さないこと。
   お知らせの追記手順は §7 を参照（news 配列の先頭に1件足す）。

   members[].id と、works/awards/talks/papers の by[] を対応させると、
   「メンバー」セクションにその人の功績が自動でまとまる（§3-2a）。
   ============================================================= */

window.IDERIA_DATA = {

  /* ---------- サイト基本情報 ---------- */
  site: {
    name: "IDERIA",
    tagline: "遊びを、学びのかたちに。",
    /* assets/logo.png を置いたうえで、この行を "assets/logo.png" に戻すと
       タイポグラフィからロゴ画像に差し替わる。ファイルが無い間は読みに行かない */
    logo: null,
    logoAlt: "IDERIA ロゴ"
  },

  /* ---------- About（§3-2） ---------- */
  about: {
    lead: "IDERIA は、教育的な価値のあるゲームづくりを主な活動とする制作団体です。",
    body: "短期記憶力の向上や、ASMRによるリラックス効果など、遊ぶことがそのまま学びや心の変化につながるゲーム・教材を企画制作しています。あわせて、経験のない小中高生を対象としたVRの体験活動や公開講座も行っています。",
    // 団体名の由来（§6）
    origin: "「イデアル（ideal・理想）」の最初と、「イストリア（istoria・物語）」の最後をつないで IDERIA。",
    facts: [
      { label: "代表", value: "永野斗遠（九州情報大学大学院）" },
      { label: "主な活動", value: "教育的な価値のあるゲーム・教材の企画制作" },
      { label: "そのほか", value: "小中高生向けのVR体験活動・公開講座" },
      { label: "所属", value: "九州情報大学 荒平ゼミ" }
    ],
    // 学習アーカイブとの役割分担（§1）。{link} がリンクに置き換わる
    note: "IDERIAの作品も収録した「遊ぶ・学ぶ」の場は {link} にあります（代表 永野斗遠が個人で運営）。この公式サイトは団体としての情報を置く場所です。",
    noteLink: { label: "PLAYCE（ゲーム制作・プログラミング学習アーカイブ）", url: "https://109mei.github.io/game-learning-archive/" }
  },

  /* ---------- メンバー（§3-2a・§6） ----------
     id は works / awards / talks / papers の by[] から参照される。
     by[] に id を足すだけで、その人のカードに功績が並ぶ。 */
  members: [
    {
      id: "nagano",
      name: "永野 斗遠",
      role: "代表",
      org: "九州情報大学大学院",
      focus: "企画・プログラム",
      note: "「チョコパキ！」での受賞をきっかけに、より多くの人とつくるため IDERIA を立ち上げた。"
    },
    {
      id: "tamura",
      name: "田村 明日香",
      role: "メンバー",
      org: "九州情報大学",
      focus: "デザイン",
      note: "IDERIA のロゴと、ゲーム学会 第24回全国大会のテーマポスターをデザイン。「チョコパキ！」ではデザインを担当。",
      // 本人がデザインした大会テーマポスター（学会公式が公開しているものを参照）
      image: "https://www.gameamusementsociety.org/images/GAS2025_poster.png",
      imageAlt: "ゲーム学会 第24回全国大会のテーマポスター（デザイン: 田村明日香）",
      imageCaption: "ゲーム学会 第24回全国大会 テーマポスター"
    },
    {
      id: "izaki",
      name: "伊嵜 音子",
      role: "メンバー",
      org: "純真高等学校",
      focus: "高大連携",
      note: "アプリ「Photary」の提案で、学会発表の筆頭著者をつとめた。"
    }
  ],

  /* ---------- 作品（§6） ---------- */
  works: [
    {
      no: "01",
      motif: "chokopaki",
      title: "チョコパキ！",
      desc: "Python+Pygameの対戦ゲーム。ゲーム学会 第21回ゲームコンペ優秀賞。物理的触覚体験（おもちゃ化）の試作も実施",
      credit: "永野斗遠（企画・プログラム）／田村明日香（デザイン）",
      by: ["nagano", "tamura"],
      image: "https://109mei.github.io/game-learning-archive/images/games/ideria-chokopaki.png",
      links: [
        { label: "遊ぶ", url: "https://109mei.github.io/game-learning-archive/games/ideria-chokopaki/" }
      ]
    },
    {
      no: "02",
      motif: "one-button",
      title: "OneButtonGames",
      desc: "高校生・大学生が制作した1ボタンゲーム10作品を収録した専用ランチャー。IDERIA×純真高等学校×九州情報大学の高大連携プロジェクト。ゲーム学会第24回全国大会でデモ展示",
      credit: "",
      by: ["nagano", "tamura"],
      image: "https://109mei.github.io/game-learning-archive/images/games/obg-launcher.png",
      links: [
        { label: "アーカイブ", url: "https://109mei.github.io/game-learning-archive/activities/one-button-games/" }
      ]
    },
    {
      no: "03",
      motif: "quiz",
      title: "しまっぴー先生の覚えてクイズ",
      desc: "TyranoScript製の記憶クイズゲーム。短期記憶を働かせながら歴史上の人物を覚える",
      credit: "",
      by: ["nagano"],
      image: "assets/works/03.png",
      links: []
    },
    {
      no: "04",
      motif: "cards",
      title: "ひらがなUNO（SHIRITORI）",
      desc: "ひらがなカードでしりとりを行うカードゲーム",
      credit: "",
      by: [],
      image: "assets/works/04.png",
      links: []
    },
    {
      no: "05",
      motif: "othello",
      title: "オセロカードゲーム（試作）",
      desc: "オセロを題材にしたアナログカードゲームの試作",
      credit: "",
      by: [],
      image: "assets/works/05.jpg",
      links: []
    },
    {
      no: "06",
      motif: "poster",
      title: "IDERIAロゴ・大会ポスター",
      desc: "IDERIAロゴ、ゲーム学会第24回全国大会（九州情報大学開催）テーマポスターのデザイン",
      credit: "田村明日香",
      by: ["tamura"],
      image: "https://www.gameamusementsociety.org/images/GAS2025_poster.png",
      links: [
        { label: "大会ページ", url: "https://www.gameamusementsociety.org/html/NationalConvention_24.html" }
      ]
    },
    {
      no: "07",
      motif: "photo-diary",
      title: "Photary（フォタリー）",
      desc: "写真と一言から感情を読み取り、日記として記録・振り返るアプリの提案。純真高等学校との高大連携。現時点は提案段階で、実装と評価は今後の課題",
      credit: "伊嵜音子（純真高等学校）ほか",
      by: ["izaki", "nagano"],
      image: "assets/works/07.png",
      links: [
        { label: "ポスターを見る", url: "assets/works/07-poster.png" }
      ]
    }
  ],

  /* ---------- 活動（§6） ----------
     教育用ゲームジャムの企画運営と学習アーカイブは代表個人の活動なので、
     IDERIAの活動としては載せない（§6）。 */
  activities: [
    {
      title: "小中高生向けのVR体験活動",
      rows: [
        { when: "2026-01", what: "純真高等学校でVRを用いた3Dモデル制作体験会" }
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

  /* ---------- 受賞（§6） ----------
     新しい順。url は表彰の裏づけになる公式ページ。 */
  awards: [
    {
      date: "2026-02-08",
      badge: "一般表彰（団体）",
      title: "太宰府市 令和7年度「令和の都だざいふ 世界に羽ばたく人材育成表彰」",
      detail: "荒平ゼミ「IDERIA」として受賞（2年連続）。会場: プラム・カルコア太宰府",
      by: [],
      url: "https://www.kiis.ac.jp/info/%E5%A4%AA%E5%AE%B0%E5%BA%9C%E5%B8%82%E3%80%80%E4%BB%A4%E5%92%8C7%E5%B9%B4%E5%BA%A6%E3%80%8C%E4%BB%A4%E5%92%8C%E3%81%AE%E9%83%BD%E3%81%A0%E3%81%96%E3%81%84%E3%81%B5%E4%B8%96%E7%95%8C%E3%81%AB%E7%BE%BD/",
      urlLabel: "九州情報大学の記事"
    },
    {
      date: "2025-02-09",
      badge: "一般表彰（団体）",
      title: "太宰府市 令和6年度「世界に羽ばたく人材育成表彰」",
      detail: "荒平ゼミ「IDERIA」として受賞。太宰府市市制40周年記念事業の一環。会場: プラム・カルコア太宰府",
      by: [],
      url: "https://www.kiis.ac.jp/info/%E5%A4%AA%E5%AE%B0%E5%BA%9C%E5%B8%82%E3%80%80%E4%BB%A4%E5%92%8C6%E5%B9%B4%E5%BA%A6%E3%80%8C%E4%B8%96%E7%95%8C%E3%81%AB%E7%BE%BD%E3%81%B0%E3%81%9F%E3%81%8F%E4%BA%BA%E6%9D%90%E8%82%B2%E6%88%90%E3%80%8D/",
      urlLabel: "九州情報大学の記事"
    },
    {
      date: "2024-03-02",
      badge: "優秀賞",
      title: "ゲーム学会 第21回ゲームコンペ 優秀賞",
      detail: "作品「チョコパキ！」永野斗遠・田村明日香（九州情報大学）。表彰式はゲーム学会 第22回全国大会",
      by: ["nagano", "tamura"],
      url: "https://www.gameamusementsociety.org/html/GameCompe21_Award2.html",
      urlLabel: "受賞作品紹介"
    }
  ],

  /* ---------- 学会発表（§6） ----------
     「チョコパキ！」受賞以降で、メンバーが著者に入っているもの。新しい順。
     authors は大会プログラム記載のとおり（所属は発表時のもの）。 */
  talks: [
    {
      date: "2026-09-05",
      venue: "ゲーム学会「ゲームと健康科学」研究部会 第3回研究会",
      place: "九州情報大学",
      title: "写真・一言分析から感情を読み取り記録していくアプリケーションの提案",
      authors: "伊嵜音子・椎葉圭（純真高等学校）・永野斗遠・荒平高章（九州情報大学大学院）",
      by: ["izaki", "nagano"],
      note: ""
    },
    {
      date: "2026-09-05",
      venue: "ゲーム学会「ゲームと健康科学」研究部会 第3回研究会",
      place: "九州情報大学",
      title: "初心者向けゲームジャムの実施 〜第1回の実施結果と次回への課題〜",
      authors: "永野斗遠・荒平高章",
      by: ["nagano"],
      note: "ポスター発表"
    },
    {
      date: "2026-07-10",
      venue: "ゲーム学会「ゲームと健康科学」研究部会 第2回研究会",
      place: "オンライン",
      title: "VRを用いた3Dモデル制作体験会の実施と課題",
      authors: "永野斗遠・荒平高章（九州情報大学）",
      by: ["nagano"],
      note: ""
    },
    {
      date: "2026-03-01",
      venue: "ゲーム学会 第24回全国大会",
      place: "九州情報大学太宰府キャンパス",
      session: "OB3",
      title: "新しいゲームコンテストの試行と評価",
      authors: "永野斗遠・荒平高章（九州情報大学）",
      by: ["nagano"],
      note: "一般研究発表",
      url: "https://www.gameamusementsociety.org/html/NationalConvention_24_prog2.html",
      urlLabel: "大会プログラム"
    },
    {
      date: "2026-03-01",
      venue: "ゲーム学会 第24回全国大会",
      place: "九州情報大学太宰府キャンパス",
      session: "OC3",
      title: "自主制作ゲーム『チョコパキ！』の物理的触覚体験への拡張と試作",
      authors: "田村明日香・永野斗遠・荒平高章（九州情報大学）",
      by: ["tamura", "nagano"],
      note: "一般研究発表",
      url: "https://www.gameamusementsociety.org/html/NationalConvention_24_prog2.html",
      urlLabel: "大会プログラム"
    },
    {
      date: "2026-02-28",
      venue: "ゲーム学会 第24回全国大会",
      place: "九州情報大学太宰府キャンパス",
      session: "DP4",
      title: "VRを用いた3Dモデル制作体験",
      authors: "永野斗遠・田村明日香・中嶋文萌・荒平高章（九州情報大学）",
      by: ["nagano", "tamura"],
      note: "デモ・ポスター発表",
      url: "https://www.gameamusementsociety.org/html/NationalConvention_24_prog1.html",
      urlLabel: "大会プログラム"
    },
    {
      date: "2026-02-28",
      venue: "ゲーム学会 第24回全国大会",
      place: "九州情報大学太宰府キャンパス",
      session: "DP5",
      title: "高大連携による制作ゲーム『OneButtonGames』",
      authors: "永野斗遠・田村明日香・椎葉圭・荒平高章（九州情報大学）",
      by: ["nagano", "tamura"],
      note: "デモ・ポスター発表",
      url: "https://www.gameamusementsociety.org/html/NationalConvention_24_prog1.html",
      urlLabel: "大会プログラム"
    },
    {
      date: "2025-07-25",
      venue: "ゲーム学会「ゲームと健康科学」研究部会 第1回研究会",
      place: "九州情報大学太宰府キャンパス（オンライン開催）",
      title: "自主制作ゲーム『チョコパキ！』の改良と触覚体験への拡張",
      authors: "田村明日香・永野斗遠・荒平高章（九州情報大学）",
      by: ["tamura", "nagano"],
      url: "https://www.gameamusementsociety.org/html/GameHealthScience_1.html",
      urlLabel: "研究会プログラム"
    },
    {
      date: "2025-07-25",
      venue: "ゲーム学会「ゲームと健康科学」研究部会 第1回研究会",
      place: "九州情報大学太宰府キャンパス（オンライン開催）",
      title: "新しいゲームコンテストの試行と評価",
      authors: "永野斗遠・荒平高章（九州情報大学）",
      by: ["nagano"],
      url: "https://www.gameamusementsociety.org/html/GameHealthScience_1.html",
      urlLabel: "研究会プログラム"
    },
    {
      date: "2025-07-25",
      venue: "ゲーム学会「ゲームと健康科学」研究部会 第1回研究会",
      place: "九州情報大学太宰府キャンパス（オンライン開催）",
      title: "VRを用いた3Dモデリング教育の提案",
      authors: "中嶋文萌・永野斗遠・田村明日香・荒平高章（九州情報大学）",
      by: ["nagano", "tamura"],
      url: "https://www.gameamusementsociety.org/html/GameHealthScience_1.html",
      urlLabel: "研究会プログラム"
    },
    {
      date: "2024-07-26",
      venue: "ゲーム学会「ゲームと教育」研究部会 第20回研究会",
      place: "香川大学幸町キャンパス（オンライン開催）",
      title: "プログラマー向けゲーム制作コンテストの提案",
      authors: "永野斗遠・荒平高章（九州情報大学）",
      by: ["nagano"],
      url: "https://www.eng.kagawa-u.ac.jp/~hayashi/gas/2024-GE-1.pdf",
      urlLabel: "研究報告（予稿集PDF）"
    },
    {
      date: "2024-07-26",
      venue: "ゲーム学会「ゲームと教育」研究部会 第20回研究会",
      place: "香川大学幸町キャンパス（オンライン開催）",
      title: "自主制作ゲーム「チョコパキ！」の客観的評価",
      authors: "田村明日香・永野斗遠・荒平高章（九州情報大学）",
      by: ["tamura", "nagano"],
      url: "https://www.eng.kagawa-u.ac.jp/~hayashi/gas/2024-GE-1.pdf",
      urlLabel: "研究報告（予稿集PDF）"
    }
  ],

  /* ---------- 論文（§6） ----------
     採録は決定済み。掲載巻号・掲載年は確認中のため書かない。 */
  papers: [
    {
      venue: "ゲーム学会誌",
      type: "ショートノート",
      title: "プログラミング重視型ゲームコンテストの提案と実践",
      authors: "永野斗遠・荒平高章",
      by: ["nagano"],
      status: "採録決定（掲載巻号は確認中）"
    },
    {
      venue: "ゲーム学会誌",
      type: "ショートノート",
      title: "自主制作ゲーム『チョコパキ！』の概要と検証",
      authors: "田村明日香・永野斗遠・荒平高章",
      by: ["tamura", "nagano"],
      status: "採録決定（掲載巻号は確認中）"
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
      date: "2026-02-08",
      title: "太宰府市 令和7年度「令和の都だざいふ 世界に羽ばたく人材育成表彰」を受賞（2年連続）",
      url: "https://www.kiis.ac.jp/info/%E5%A4%AA%E5%AE%B0%E5%BA%9C%E5%B8%82%E3%80%80%E4%BB%A4%E5%92%8C7%E5%B9%B4%E5%BA%A6%E3%80%8C%E4%BB%A4%E5%92%8C%E3%81%AE%E9%83%BD%E3%81%A0%E3%81%96%E3%81%84%E3%81%B5%E4%B8%96%E7%95%8C%E3%81%AB%E7%BE%BD/"
    },
    {
      date: "2025-02-09",
      title: "太宰府市 令和6年度「世界に羽ばたく人材育成表彰」を受賞",
      url: "https://www.kiis.ac.jp/info/%E5%A4%AA%E5%AE%B0%E5%BA%9C%E5%B8%82%E3%80%80%E4%BB%A4%E5%92%8C6%E5%B9%B4%E5%BA%A6%E3%80%8C%E4%B8%96%E7%95%8C%E3%81%AB%E7%BE%BD%E3%81%B0%E3%81%9F%E3%81%8F%E4%BA%BA%E6%9D%90%E8%82%B2%E6%88%90%E3%80%8D/"
    }
  ],

  /* ---------- 関連サイト（§3-7・§6） ---------- */
  relatedSites: [
    {
      name: "PLAYCE（ゲーム制作・プログラミング学習アーカイブ）",
      desc: "代表 永野斗遠が個人で運営。IDERIAの作品も収録",
      url: "https://109mei.github.io/game-learning-archive/"
    },
    {
      name: "永野斗遠 ポートフォリオ",
      desc: "代表・永野斗遠の業績と活動",
      url: "https://109mei.github.io/"
    }
  ],

  /* ---------- フッター（§3-8） ----------
     外部サイトへの導線は「関連サイト」が担うので、ここでは繰り返さない。
     セクション目次はページ構成から自動生成される。 */

  // SNS: 空のままなら、フッターのSNS欄そのものが表示されない
  social: []
};
