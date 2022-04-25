import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
    const [count, setCount ] = useState(0)

    useEffect(
        () => {
            console.log(count);
        },
        [count]
    )

    return (
        <View style = {styles.countBox}>
            <Text style = {styles.countText}>{count}</Text>
            <Button 
                onPress={() => {setCount(count + 1)}}
                title = {"カウント"}
            />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    countText: {
        textAlign: 'center',
        color: '#fff',
    },
    countBox: {
        backgroundColor: '#f00',
        width: '100%'
    }
})