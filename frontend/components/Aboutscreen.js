import React, { useState,useEffect } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import axios from 'axios'

export default function AboutScreen() {
  const [data, setData] = useState([]);

  const fetch = () => {
    
    axios.get('http://127.0.0.1:8000/tech/list-tech')
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }

  const dele = (id) => {
    axios.delete(`http://127.0.0.1:8000/tech/techDel/${id}`).then(
      fetch()
    )
  }
      useEffect(() => {
        fetch()
        dele()
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