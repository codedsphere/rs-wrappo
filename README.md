# Redux-Saga-Wrappo

[![build status](https://img.shields.io/travis/codedsphere/rs-wrappo/master.svg?style=flat-square)](https://travis-ci.org/codedsphere/rs-wrappo)
[![npm version](https://img.shields.io/npm/v/rs-wrappo.svg?style=flat-square)](https://www.npmjs.com/package/rs-wrappo)
[![npm downloads](https://img.shields.io/npm/dm/rs-wrappo.svg?style=flat-square)](https://www.npmjs.com/package/rs-wrappo)

```js
npm install --save rs-wrappo
yarn add rs-wrappo
```

## What is this?

This is a wrapper around Redux Saga, which enables you to

1.  Easily dispatch your actions
2.  Retrieve your reducers states easily in your components
3.  Dynamic component fetching.

## Use Me ?

Probably yes, probably not :)
This is actually a private project, created for our own usage.
You can use it, but it will not have really proper documentation.
We will try our best to work on this repo to improve it in the future.

## Installation

```
npm install --save rs-wrappo
```

Then, to enable rs-wrappo,

```js
//Index.js
import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router-dom";
import { appCreator, history } from "redux-saga-wrappo";

// App init
appCreator(
  <ConnectedRouter history={history}>
    <Route path="/" component={App} />
  </ConnectedRouter>,
  document.getElementById("root"),
  { rootSaga, rootReducer }
);
```

## Sample Code

In Progress.

```js
class Example extends PureComponent {
  componentWillMount = () => {
    const {
      exampleModel,
      userModel,
      authenticationSaga,
      exampleReducer
    } = this.props;
    exampleModel.updateState({ somethingNew: "new day" });
    exampleModel.removeState(["somethingNew"]);
    userModel.updateState({ name: "louis" });
    userModel.initializeAll();
    authenticationSaga.Login(1);
    authenticationSaga.getValidatePic();
    exampleReducer.Other_Reducer();
  };
  render() {
    const { exampleModel } = this.props;
    const { webUniqueCodea, webUniqueCodeb, somethingNew } = exampleModel;
    const { Default } = this.props.layouts;
    return (
      <Default>
        {JSON.stringify({ webUniqueCodea, webUniqueCodeb, somethingNew })}
      </Default>
    );
  }
}

const connectConfig = {
  mapActionToProps: { authenticationSaga, exampleReducer },
  mapStateToProps: ({ userModel, exampleModel }) => ({
    userModel,
    exampleModel
  })
};

export default getClientItem(["layouts"])(connect(connectConfig)(Example));
```
You can refer more on this boilerplate that I have prepared:
(https://github.com/codedsphere/redux-saga-wrappo-boilerplate)
