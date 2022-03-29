import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Button, Alert} from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { useState } from "react";



const AccountComponent = () => {

    const [accountNumber, onNumberChange] = useState('');
    const [name, onNameChange] = useState('');
    const [address, onAddressChange] = useState('');
    const SaveInfo = () =>{
        if(name != '' && accountNumber != '' && address != ''){
            onNumberChange(accountNumber);
            onAddressChange(address);
            onNameChange(name);
            console.log(name);
            console.log(accountNumber);
            console.log(address);
        }
        else{
            Alert.alert('Error', 'Fields cannot be empty');
        }
        
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Account Info</Text>
        <TextInput 
            style={styles.input}
            onChangeText={onNumberChange} 
            value={accountNumber} 
            placeholder='Enter Account Number'/>

        <TextInput 
            style={styles.input}
            onChangeText={onNameChange} 
            value={name}
            placeholder='Account Holder Name'></TextInput>

        <TextInput 
            style={styles.input}
            onChangeText={onAddressChange} 
            value={address}
            placeholder='Enter Address'></TextInput>

        <Button title='Save Account Info' onPress={SaveInfo}></Button>
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
    input: {
        borderColor: 'black',
        width:300,
        height: 40,
        margin: 8,
        padding: 10,
    },
    text: {
        textAlign: 'left',
        color: 'black',
        fontSize: 40,
    }
  });

export default AccountComponent;