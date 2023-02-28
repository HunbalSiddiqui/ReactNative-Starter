import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.whiteText}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.whiteText}>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.whiteText}>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.whiteText}>scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.whiteText}>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.whiteText}>😆</Text>
                </View>
            </ScrollView>
        </View>
    )
}

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
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 8
    },
    cardElevated: {
        backgroundColor: 'darkblue',
        elevation: 4
    },
    whiteText: {
        color: '#FFFFFF'
    }
})