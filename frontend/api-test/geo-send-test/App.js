import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCFzo5u_OOvUmE-NGVR1v7bGsLPGdYcxFs',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
        // ,
        // body: JSON.stringify({
        //   key1: 'value1',
        //   key2: 'value2',
        //   // Add more key-value pairs as needed
        // }),

      });
      const json = await response.json();
      if (json){
        setData(json);
      }
      else {
        console.error('Empty response body');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        <Text>{`Lat: ${data.location.lat}, Lon: ${data.location.lng}`}</Text>
        <Text>{JSON.stringify(data)}</Text>
      </Text>
      
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
