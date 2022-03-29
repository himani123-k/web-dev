import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { useState } from "react";

const BillComponent = ({navigation, route}) => {
    const [onPeak, onPeakChange] = useState('0.0');
    const [midPeak, onMidPeakChange] = useState('0.0');
    const [offPeak, onOffPeakChange] = useState('0.0');
    const CalculateBill = () =>{
       navigation.navigate('Bill',{onPeak: onPeak, midPeak: midPeak, offPeak: offPeak});
        
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Account Info</Text>
            <TextInput 
                keyboardType="decimal-pad"
                style={styles.inputStyle}
                onChangeText={onPeakChange} 
                value={onPeak} 
                placeholder='Enter On Peak Voltage'/>
    
            <TextInput 
                keyboardType="decimal-pad"
                style={styles.inputStyle}
                onChangeText={onMidPeakChange} 
                value={midPeak}
                placeholder='Enter Mid Peak Voltage'></TextInput>
    
            <TextInput 
                keyboardType="decimal-pad"
                style={styles.inputStyle}
                onChangeText={onOffPeakChange} 
                value={offPeak}
                placeholder='Enter Off Peak Voltage'></TextInput>
    
            <Button style={styles.buttonStyle} title='Calculate Bill' onPress={CalculateBill}></Button>
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
        inputStyle: {
            width:300,
            height: 50,
            margin: 8,
            borderColor: 'black',
            borderWidth: 1,
            padding: 5,
        },
        buttonStyle: {
            margin: 30,
            padding: 10,
            
        },
        text: {
            textAlign: 'left',
            color: 'black',
            fontSize: 40,
        }
    }
);

export default BillComponent;