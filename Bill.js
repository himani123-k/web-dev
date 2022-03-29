import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from "react-native";
import { useState } from 'react';


const Bill = ({navigation, route}) => {
    const {onPeak} = route.params;
    const {midPeak} = route.params;
    const {offPeak} = route.params;
    console.log(onPeak);
    return (
      <View style={styles.container}>
        <Text>Bill Calculate</Text>
        <StatusBar style="auto" />
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

export default Bill;