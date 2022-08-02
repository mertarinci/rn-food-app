import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

    const [term, setTerm] = useState("")
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === "$" || "$$" || "$$$"

        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <Text style={styles.headerStyle}>What do you want to eat today?</Text>

            <SearchBar
                tern={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList results={filterResultsByPrice("₺")} title="Almost Free" />
                <ResultsList results={filterResultsByPrice("₺₺")} title="Middle Class" />
                <ResultsList results={filterResultsByPrice("₺₺₺")} title="Feel rich?" />
                <ResultsList results={filterResultsByPrice(undefined)} title="No Price Information" />
            </ScrollView>


        </>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    }
})