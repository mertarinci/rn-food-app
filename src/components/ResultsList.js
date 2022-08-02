import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {

    if (results.length > 0) {

        return (

            <View style={styles.container}>
                <Text style={styles.titleStyle}>{title}</Text>

                <FlatList
                    horizontal
                    data={results}
                    keyExtractor={(result) => result.id}
                    renderItem={({ item }) => {

                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", { id: item.id })}>
                                <ResultsDetail result={item} />
                            </TouchableOpacity>
                        )
                    }}
                    showsHorizontalScrollIndicator={false}

                />

            </View>
        )
    }
    else {
        return (
            <View>

                <Text style={styles.titleStyle}>{title}</Text>
                <Text>No Restaurants To Show</Text>

            </View>

        )
    }
}

export default withNavigation(ResultsList)

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})