import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button
} from "react-native";

class Products extends Component {

    renderProducts = (products) => {
        console.log('products=>', products)
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 20 }}>
                    <Button title={item.name + ' - ' + item.price}
                        onPress={() => this.props.onPress(item)} />
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});