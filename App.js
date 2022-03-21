import React, { useState }from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Home Screen
function HomeScreen({navigation}){

  const [roomSize, setRoomSize] = useState(0);
  const [flooringPrice, setFlooringPrice] = useState(0);
  const [installationCost, setInstallationCost] = useState(0);
  const [itemUnit, setItemUnit] = useState("ft^2")
  
  let flooring = roomSize * flooringPrice;
  let installation = roomSize * installationCost;
  let totalCost = flooring + installation;
  let tax = totalCost*0.13;
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text>Unit is set to {itemUnit}</Text>
      <Button title="Change to m^2" color="#6D8299"onPress={() => setItemUnit("m^2")}/>
      <Button title="Change to ft^2" color="#8CA1A5"onPress={() => setItemUnit("ft^2")}/>
      <Text>Room Size</Text>
      <TextInput
        style={styles.input}
        placeholder={itemUnit}
        onChangeText={roomSize => setRoomSize(roomSize)}
        defaultValue={roomSize}
      />
      <Text>Price per unit of flooring</Text>
      <TextInput
        style={styles.input}
        placeholder={itemUnit}
        onChangeText={flooringPrice => setFlooringPrice(flooringPrice)}
        defaultValue={flooringPrice}
      />
      <Text>Price per unit of flooring installation</Text>
      <TextInput
        style={styles.input}
        placeholder={itemUnit}
        onChangeText={installationCost => setInstallationCost(installationCost)}
        defaultValue={installationCost}
      />
      <Text style={styles.text}>
        Flooring cost before tax: ${flooring} {itemUnit}
      </Text>
      <Text style={styles.text}>
        Installation cost before tax: ${installation} {itemUnit}
      </Text>
      <Text style={styles.text}>
        Total cost before tax: ${totalCost} {itemUnit}
      </Text>
      <Text style={styles.text}>
        Total cost with tax: ${tax} {itemUnit}
      </Text>
    </View>   
    
  ); 
  
}



//About Screen
function AboutScreen({navigation}){
  return(
    <View style={styles.container}>
    <Text style={styles.text}>Trisha Conde</Text>
    <Text style={styles.text}>101252967</Text>
    </View>
  );
}

const Navigation = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Navigation.Navigator initialRouteName="Home">
        <Navigation.Screen name = "Home" component = {HomeScreen}/>
        <Navigation.Screen name = "About" component = {AboutScreen}/>
      </Navigation.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#D5BFBF',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    top: 0,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 35,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#6D8299',
    borderWidth: 1
 },
});
