import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const onPressHandler = () => {
        navigation.navigate('Details');
        // navigation.push('Details');
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button 
                title='Write a Review'
                onPress={onPressHandler}
            />
        </View>
    )
}
