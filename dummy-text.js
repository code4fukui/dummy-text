const dummy = "あいうえお。";

export class DummyText extends HTMLElement {
  constructor(n = 1024 * 10) {
    super();
    const s = dummy.repeat(n / dummy.length);
    this.textContent = s;
  }
}

customElements.define("dummy-text", DummyText);
