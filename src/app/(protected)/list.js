import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDataBase";
import { FlashList } from "@shopify/flash-list";

export default function List() {
  const [data, setData] = useState([]);
  const { getPayments } = usePaymentsDatabase();

  async function fetchData() {
    //vai buscar no banco de dados os dados os pagaments
    const payments = await getPayments();
    console.log(payments);
    setData(payments);
  }

  useEffect(() => {
    //Executa a primeira fez a busca de dados
    fetchData(); 
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Listagem</Text>
      <FlashList
      data={data}
      renderItem={({ item }) => <Text>{item.id}</Text>}
      estimatedItemSize={200}

    />
    </View>
  );
}