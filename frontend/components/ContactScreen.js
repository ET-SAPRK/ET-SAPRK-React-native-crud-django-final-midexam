import React, { useEffect,useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
import axios from 'axios'

export default function ContactScreen() {
  const [data, setData] = useState([]);

  const fetch = () => {
    
    axios.get('http://127.0.0.1:8000/stud/list-student')
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }

  const dele = (id) => {
    axios.delete(`http://127.0.0.1:8000/stud/studel/${id}`).then(
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
