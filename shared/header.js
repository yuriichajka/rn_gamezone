import React from "react";
import {StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function Header({ title }) {
    return (
        <ImageBackground
            style={styles.header}
            source={require('../assets/game_bg.png')}
        >
            <View style={styles.headerTitle}>
                <Image
                    source={require('../assets/heart_logo.png')}
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#333',
        letterSpacing: 1,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
        marginTop: 5
    },
    headerTitle: {
        flexDirection: 'row',
    }
})

