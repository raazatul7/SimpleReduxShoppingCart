import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image
} from "react-native";
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import cart from '../assets/shoppingCart.png'
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';


const ShoppingCartIcon = (props) => (

    <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>

        {/* <Icon onPress={() => this.props.navigation.navigate('Cart')} name="ios-cart" size={30} /> */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
            <View style={{ position: 'absolute', height: 20, width: 20, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', alignItems: 'center', justifyContent: 'center', zIndex: 1, right: 20, bottom: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.cartItems.length}</Text>
            </View>
            <Image source={cart} style={{ height: 40, width: 40 }} />
        </TouchableOpacity>
    </View>
)

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});