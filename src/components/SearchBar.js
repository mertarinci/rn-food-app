import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle} >
            <Feather name="search"
                style={styles.iconStyle} />

            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                autoCapitalize='none'
                onEndEditing={onTermSubmit}
                returnKeyType="search"
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#D3D3D3',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        marginBottom: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 22
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})