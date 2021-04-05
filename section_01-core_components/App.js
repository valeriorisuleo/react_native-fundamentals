import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <Button
                color="red"
                title="Click me"
                onPress={() => Alert.prompt(
                    'Title',
                    'Name',
                    text => console.log(text)
                )}></Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        // alignItems: 'center',
        // justifyContent: 'center',
    }
});
