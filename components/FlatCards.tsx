import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.whiteText}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.whiteText}>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.whiteText}>Yellow</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.whiteText}>Red</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card: {
        minWidth: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'green',
    },
    cardThree: {
        backgroundColor: 'yellow',
    },
    whiteText: {
        color: '#FFFFFF'
    },
})