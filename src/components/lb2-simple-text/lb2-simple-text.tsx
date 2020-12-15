import { Component, Host, h, Prop, Watch, Element } from '@stencil/core';

const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/g;
const $blue = '#0090ff';

@Component({
  tag: 'lb2-simple-text',
  styleUrl: 'lb2-simple-text.scss',
  shadow: true,
})
export class Lb2SimpleText {
  @Prop() name: string;
  @Prop() color: string = $blue;
  @Prop() value: number;

  @Watch('color')
  watchHandlerColor() {
    this.forceUpdate();
  }

  @Element() el: HTMLElement;

  private forceUpdate() {
    const color = regex.test(this.color) ? this.color : $blue;
    this.el.style.setProperty('--color', color);
  }

  componentDidLoad() {
    // Add custom font to page DOM since font-face doesn't work within Shadow DOM.
    const fontCssUrl = 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap';
    let element = document.querySelector(`link[href="${fontCssUrl}"]`);

    // Only inject the element if it's not yet present
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'stylesheet');
      element.setAttribute('href', fontCssUrl);
      document.head.appendChild(element);
    }
    this.forceUpdate();
  }

  render() {
    return (
      <Host>
        <div class="name">{this.name}</div>
        <div class="value">{this.value}</div>
      </Host>
    );
  }
}
