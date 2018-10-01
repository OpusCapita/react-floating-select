# react-floating-select

### Description
Originally this component was introduced in order to enhance react-select by fixing [bug#810](https://github.com/JedWatson/react-select/issues/810). When react-select was upgraded to version 2.0.0, the original need for this component disappeared. Since react-select v2.0.0 this component is needed for specifying OC specific styles for the floating select component.

### Installation
```
npm install @opuscapita/react-floating-select
```

### Demo
View the [Demo](https://opuscapita.github.io/react-floating-select)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API

* [react-select props](https://react-select.com/props)
* [Grouped options](https://github.com/JedWatson/react-select/issues/2417)

Additionally

| Prop name     | Type   | Default | Description                  |
| ------------- | ------ | ------- | ---------------------------- |
| controlHeight | string |         | Custom height of the control |


### Code example
```jsx
import React from 'react';
import { FloatingSelect } from '@opuscapita/react-floating-select';

export default class ReactView extends React.Component {
  render() {
    return (
      <FloatingSelect
        propName="propValue"
      />
    );
  }
}
```