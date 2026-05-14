# dummy-text

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple web component for generating Japanese dummy text (`あいうえお。`).

## Demo

[View the demo](https://code4fukui.github.io/dummy-text/)

## Features

- Generates a configurable amount of Japanese dummy text.
- Implemented as a lightweight, dependency-free web component.

## Usage

Import the component and use the `<dummy-text>` tag in your HTML.

```html
<script type="module" src="https://code4fukui.github.io/dummy-text/dummy-text.js"></script>

<!-- Generates the default amount of text (approx. 10KB) -->
<dummy-text></dummy-text>
```

### Customizing Text Length

To generate a specific number of characters, instantiate the component in JavaScript and pass the desired length to the constructor.

```html
<div id="container"></div>

<script type="module">
  import { DummyText } from "https://code4fukui.github.io/dummy-text/dummy-text.js";

  // Generate 100 characters of dummy text
  const customText = new DummyText(100);
  document.getElementById("container").appendChild(customText);
</script>
```

## License

MIT License