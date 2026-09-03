# ideria-official — IDERIA公式サイト

公開予定URL: https://109mei.github.io/ideria-official/

## 公開手順（初回のみ）

1. リポジトリを **Public** にする（Settings → General → Danger Zone → Change visibility）
2. Settings → Pages → Source を **Deploy from a branch** → Branch: main / (root) → Save
3. 以後は main への push だけで反映

## 運用ルール（重要）

このサイトの内容・デザインの**正は `docs/SITE_SPEC.md`** です。
変更したいときは、まず仕様書を追記・修正してから、Claude（Codeタスク）に「docs/SITE_SPEC.md の変更点を実装して」と依頼します。

## 構成

- `index.html` — サイト本体（単一ページ・依存パッケージなし）
- `data.js` — 作品・お知らせデータ（仕様書§6と対応）
- `assets/` — 画像等
  - `logo.png` を置くとロゴが差し替わる（`assets/README.md`）
  - `works/` に作品の図版を置ける（`assets/works/README.md`）
  - `ogp.png` — SNSでシェアしたときのカード画像
  - `apple-touch-icon.png`
- `feed.xml` — お知らせのRSS（お知らせを足したらここにも1件足す。仕様書§7）
- `sitemap.xml` / `robots.txt` — 検索エンジン向け
- `docs/SITE_SPEC.md` — 仕様書（正）
