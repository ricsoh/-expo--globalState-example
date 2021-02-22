// ************************************
// ScreenTwo.js
// ************************************
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getGlobalStateCount } from "../global/globalState.js";
import { useIsFocused } from '@react-navigation/native'; // useIsFocus to render and get updated global state

export default function ScreenTwo() {
    const [localCount, setLocalCount] = useState(0);
    const isFocus = useIsFocused(); // Re-rendering screen, this will ensure global state updated with latest

    return (
        <View style={styles.container}>
            <Text style={{ color: 'red', fontSize: 30, fontWeight: 'bold', marginBottom: 10 }} >Global Count</Text>
            <Text style={{ color: 'red', fontSize: 30, marginBottom: 10 }} >{getGlobalStateCount("")}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }} >Local Count</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 5, width: '100%' }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}
                    onPress={() => {
                        setLocalCount(localCount - 1); // decrement local count
                        getGlobalStateCount("DECREMENT");
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Decrement</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, marginBottom: 10 }} >{localCount}</Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}
                    onPress={() => {
                        setLocalCount(localCount + 1); // increment local count
                        getGlobalStateCount("INCREMENT");
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Increment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});