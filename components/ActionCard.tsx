import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Js 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKrKMIaHpV7UuiC0ymI6-OcAvaeM7Op04rCl_FROMoA&s"
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eos natus non odit sapiente, accusamus dolor. Odio asperiores veritatis earum nostrum placeat aliquid illo, hic dolore itaque, alias, dolor vero.
                    </Text>
                </View>
                <View style={styles.cardFooterContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            openWebsite('https://responsivevoice.org/pricing/?utm_campaign=rvorg_link&utm_source=responsivevoice-org&utm_term=menu')
                        }}
                    >
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            openWebsite('https://hunbalsiddiqui.com')
                        }}
                    >
                        <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
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
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: 'white',
        elevation: 3
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    cardBodyContainer: {
        padding: 10
    },
    cardFooterContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 14,
        color: 'white',
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }
})