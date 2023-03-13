import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKrKMIaHpV7UuiC0ymI6-OcAvaeM7Op04rCl_FROMoA&s"
                    }}
                    style={styles.cardImage}
                />
                <View>
                    <Text style={styles.cardTitle}>Title</Text>
                    <Text style={styles.cardLabel}>Label</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quisquam minus non voluptate atque nulla, ea cumque, temporibus eveniet dolore deleniti nemo eius! Inventore suscipit aperiam hic voluptates sed. Odit, sequi quo! Molestiae animi commodi omnis odio. Dolores, veritatis nam.</Text>
                    <Text style={styles.cardFooter}>15mins away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12
    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 3
    },
    cardImage: {
        height: 180,
        marginBottom: 8
    },
    cardTitle: {
        fontWeight: '800',
        fontSize: 22,
        marginBottom: 4
    },
    cardLabel: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4
    },
    cardDescription: {
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        fontWeight: 'bold'
    }
})