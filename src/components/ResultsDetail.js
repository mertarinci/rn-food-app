import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url ? result.image_url : "https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg" }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating}/5 Stars - {result.review_count} Reviews </Text>
        </View>
    )
}

export default ResultsDetail

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 120,
        borderRadius: 4,
        margin: 5,
    },
    nameStyle: {

        fontSize: 16,
        fontWeight: 'bold'
    },
    container: {
        marginLeft: 15
    }
})