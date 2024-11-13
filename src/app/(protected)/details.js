import { router, useLocalSearchParams } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useLocalSearchParams()
  const { getPayment } = usePaymentsDatabase()
  const [payment, setPayment] = useState({})

  const fetchData = async () => {
    try {
      const data = await getPayment(id);
      setPayment(data)
    } catch (error) {
      Alert.alert("Erro ao buscar pagamento", error.message)
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.estilo}>
        <Text>Nome: {payment?.nome}</Text>
        <Text>Data de pagamento: {payment?.data_pagamento}</Text>
        <Text>Num Recibo: {payment?.numero_recibo}</Text>
        <Text>Valor Pago: {payment?.valor_pago}</Text>
        <Text>Observação: {payment?.observacao}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Não há imagem cadastrada</Text>
      </View>
      <View style={styles.containerButtons}>
        <Button title="Editar" disabled />
        <Button title="Imagem" onPress={() => {}} />
        <Button title="Remover Imagem" onPress={() => {}} />
        <Button title="Voltar" onPress={() => router.push("list")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  estilo: {
    fontFamily: "bold",
    fontSize: 50,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});