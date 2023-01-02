import React, {useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios'

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [text, setText] =useState([])

  const fetch = () => {
    
    axios.get('http://127.0.0.1:8000/emp/list-employee')
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }

  const dele = (id) => {
    axios.delete(`http://127.0.0.1:8000/emp/empdel/${id}`).then(
      fetch()
    )
  }
  useEffect(() => {
    fetch()
  },[])


    return (
      <View  style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {data.map((res) => {
          return (
            <View>
            <Text>{res.name}</Text>
            <Button
              title="Press me"
              onPress={() => dele(res.id)}
            />
          </View>
          )
        })}
      </View>
    );
  }
  

  
