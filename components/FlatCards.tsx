import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
        </View>
    )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24
    }
})