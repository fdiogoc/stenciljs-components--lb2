![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

## Using this component


## Getting Started

To create a new project using an interactive cli, run:

```bash
npm init stencil
```

To start developing your new Stencil project, run:

```bash
npm start
```


## Creating components

Stencil components are TypeScript classes with decorator metadata. The decorators themselves are purely build-time annotations so the compiler can read metadata about each component, and removed entirely for smaller efficient components.

Create new components by creating files with a `.tsx` extension, such as `my-component.tsx`, and place them in `src/components`.

```tsx
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
```

Note: the `.tsx` extension is required, as this is the standard for TypeScript classes that use JSX.

To use this component, just use it like any other HTML element:

```html
<my-component first="Stencil" last="JS"></my-component>
```


## API

The API for stencil closely mirrors the API for Custom Elements v1.

### Components

| Decorator      | Description                             |
| -------------- | ---                                     |
| `@Component()` | Indicate a class is a Stencil component. |
|                |                                         |
| `@Prop()`      | Creates a property that will exist on the element and be data-bound to this component.  |
| `@State()`     | Creates a local state variable that will not be placed on the element. |
| `@Method()`    | Expose specific methods to be publicly accessible. |


## Why "Stencil?"

A Stencil is a tool artists use for drawing perfect shapes easily. We want Stencil to be a similar tool for web developers: a tool that helps web developers build powerful Web Components and apps that use them, but without creating non-standard runtime requirements.

Stencil is a tool developers use to create Web Components with some powerful features baked in, but it gets out of the way at runtime.

- [Using Web Components in Ionic - Polymer Summit](https://youtu.be/UfD-k7aHkQE)
- [Stencil: A built-time approach to the web - JSConf EU](https://youtu.be/M1F81V-NhP0)
- [Architecting A Component Compiler - dotJS](https://youtu.be/RZ6MLELGsD8)


## Related

 - [Stencil Documentation](https://stenciljs.com/)
 - [Stencil Worldwide Slack](https://stencil-worldwide.herokuapp.com)
 - [Ionic](https://ionicframework.com/)
 - [Ionic Worldwide Slack](http://ionicworldwide.herokuapp.com/)
 - [Ionicons](http://ionicons.com/)
 - [Capacitor](https://capacitorjs.com/)


