import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );
  }
}
export default App;

