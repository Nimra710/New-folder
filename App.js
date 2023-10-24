import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ApiComponent from "./component/ApiComponent";

export default function App() {

  const [data043, setData043] = useState(null);
  async function getData(){
    const res = await AsyncStorage.getItem("data");
    if (res !== null){
      console.log("Response in app")
      setData043(JSON.parse(res));
      console.log(data043);
      console.log(data043)
    } 
  }
  useEffect(()=>{
    

    getData();
  },[])

  const renderItem = ({ item }) => (
    <View style={ styles.card}>
      {/* <Text>{item.key}</Text>
      <Text>{item.value}</Text> */}
      
      
      <Text style={styles.symbolText}> {item.symbol} </Text>
      <Text style={styles.rateText}> {item.rate} </Text>
    </View>
  );


  return (
		<View style={styles.container}>
			
			<ApiComponent/>


      <View style={{flex: 1, paddingTop: '20%'}}>
      <FlatList
        data={data043}
        renderItem={renderItem}
      />
      </View>
 
    
      

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

  card: {
    padding: 10,
    backgroundColor: 'yellow',
    flexDirection: 'row', // If you want the texts to be displayed horizontally
    justifyContent: 'space-between', // Adjust this based on your preference
    alignItems: 'center', // Align texts vertically in the center
    borderColor: 'black', // Border color
    borderWidth: 1, // Border width
    borderRadius: 5, // Border radius to round the corners (optional)
  },
  symbolText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Text color
    marginRight: 10, // If you want some space between symbol and rate
  },
  rateText: {
    fontSize: 16,
    color: 'black', // Text color
  },

});
