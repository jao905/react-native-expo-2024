
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function List() {
  const [data, setData] = useState([]);

 async function fetchData() {
  //vai buscar no banco de dados os dados os pagaments
  return [];
 }

 useEffect (() => {
  //Executa a primeira fez a busca de dados
  const tempData = fetchData();
  setData(tempData);
 }, [])

    return (
    <View style={{ flex: 1 , justifyContent: "center", alignItems: "center" }} >
    <Text>Listagem</Text>
    {
      data?.length > 0 && data.map((item, index) => {
        return <Text key={index}>{item}</Text>
      })  
    }
  </View>
);
}