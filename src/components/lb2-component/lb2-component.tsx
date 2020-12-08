import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'lb2-component2',
  styleUrl: 'lb2-component.css',
  shadow: true,
})
export class Lb2Component {
  @Prop() name: string;

  render() {
    return <p>My name is {this.name}</p>;
  }
}
