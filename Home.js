import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from "react-native";
import AccountComponent from "./AccountComponent";
import BillComponent from "./BillComponent";
import Bill from './Bill';

const Home = ({navigation, route}) => {
    return (
      <View style={styles.container}>
        <AccountComponent></AccountComponent>
        <BillComponent></BillComponent>
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

export default Home;
