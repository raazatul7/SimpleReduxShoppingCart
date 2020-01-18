import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ShoppingCartIcon from './src/containers/ShoppingCartIcon'
import HomeScreen from './src/containers/HomeSceen';
import ElectronicsScreen from './src/containers/ElectronicsScreen';
import BooksScreen from './src/containers/BooksScreen';
import CartScreen from './src/containers/Cart';

class ShoppingCart extends Component {
    render() {
        return (
            <AppStackContainer />
        );
    }
}


const RootStack = createStackNavigator({
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart : CartScreen
}, {
    defaultNavigationOptions: {
            headerRight:()=> (
                <ShoppingCartIcon />
            )
    }
})

const AppStackContainer = createAppContainer(RootStack);

export default ShoppingCart;
