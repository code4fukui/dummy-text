# dummy-text

日本語のダミーテキスト（`あいうえお。`）を生成するシンプルなWebコンポーネントです。

## デモ

[デモを見る](https://code4fukui.github.io/dummy-text/)

## 特徴

- 指定した分量の日本語ダミーテキストを生成します。
- 依存関係のない軽量なWebコンポーネントとして実装されています。

## 使い方

コンポーネントをインポートし、HTML内で`<dummy-text>`タグを使用します。

```html
<script type="module" src="https://code4fukui.github.io/dummy-text/dummy-text.js"></script>

<!-- デフォルトの分量（約10KB）のテキストを生成 -->
<dummy-text></dummy-text>
```

### 文字数のカスタマイズ

特定の文字数を生成するには、JavaScriptでコンポーネントをインスタンス化し、コンストラクタに希望する文字数を渡します。

```html
<div id="container"></div>

<script type="module">
  import { DummyText } from "https://code4fukui.github.io/dummy-text/dummy-text.js";

  // 100文字のダミーテキストを生成
  const customText = new DummyText(100);
  document.getElementById("container").appendChild(customText);
</script>
```

## ライセンス

MIT License
