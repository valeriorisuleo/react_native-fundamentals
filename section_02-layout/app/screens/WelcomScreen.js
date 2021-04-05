import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function WelcomScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}
            >
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')} />
                <Text>Sell What You don't need</Text>
            </View>

            <View style={styles.login}></View>
            <View style={styles.register}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    login: {
        width: '100%',
        height: '8%',
        backgroundColor: colors.primary
    },
    register: {
        width: '100%',
        height: '8%',
        backgroundColor: colors.secondary
    }
})

export default WelcomScreen;


// BAAAAAAAD CODE!

// <View style={{
//     flex: 1,
//     backgroundColor: 'yellow',
// }}>
//     <ImageBackground
//         source={require('./app/assets/background.jpg')}
//         style={{
//             flex: 8.5,
//             resizeMode: "cover",
//             justifyContent: "center"
//         }}>
//     </ImageBackground>
//     {/* _________________________LOGO CONTAINER_________________________ */}
//     <View
//         style={{
//             width: 180,
//             height: 100,
//             // backgroundColor: 'blue',
//             position: 'absolute',
//             alignSelf: "center",
//             marginVertical: 70
//         }}>
//         {/* Logo */}
//         <View style={{
//             height: 60,
//         }}>
//             <Image
//                 source={require('./app/assets/logo-red.png')}
//                 style={{
//                     flex: 1,
//                     width: 180,
//                     resizeMode: 'contain',
//                     // backgroundColor: 'green'
//                 }} />
//         </View>
//         {/* Subtitle */}
//         <View style={{
//             height: 40,
//             // backgroundColor: 'red',
//             // vertial align txt...
//             justifyContent: "center"
//         }}>
//             <Text style={{
//                 color: 'black',
//                 textAlign: 'center',
//             }}>
//                 Sell What You don't need
//             </Text>
//         </View>
//     </View>

//     <View style={{
//         flex: 0.75,
//         backgroundColor: '#fc5c65'
//     }} />
//     <View style={{
//         flex: 0.75,
//         backgroundColor: '#4ECDC4'
//     }} />
// </View>