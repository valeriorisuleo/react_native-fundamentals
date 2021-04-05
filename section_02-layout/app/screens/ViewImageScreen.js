import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.iconClose}></View>
            <View style={styles.iconDelete}></View>
            <Image
                style={styles.image}
                source={require('../assets/chair.jpg')}>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },  
    iconClose: {
        backgroundColor: colors.secondary,
        height: 50,
        width: 50,
        position: 'absolute',
        top: 50,
        left: 50
    },  
    iconDelete: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        position: 'absolute',
        top: 50,
        right: 50
    },  
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
})

export default ViewImageScreen;