import { router, useLocalSearchParams } from "expo-router";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useEffect, useState } from "react";
import { formatDateToBrazilian } from "../../utils/formatData";
import { formatCurrencyBRL } from "../../utils/formatCurrent";
import { usePickImage } from "../../utils/pickImage"; // Importação correta
import { useConfig } from "../../hooks/Config";

export default function Details() {
  const { id } = useLocalSearchParams()
  const { getPayment, setImagePayment } = usePaymentsDatabase()
  const [payment, setPayment] = useState({})
  const { pickImage } = usePickImage() // Uso correto
  const { directory } = useConfig();

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


  const handlePickImage = async () => {
    try {
      const image = await pickImage();
      if (!!!image) return;
      setPayment({ ...payment, imagem: image })
      await setImagePayment(id, image);
      // console.log("Image:" , image);
    } catch (error) {
      console.log("handlePickImage" , error);
      Alert.alert("Erro ao buscar imagem")
    }
  }

  const handleRemoveImage = async () => {
    try {
      setPayment({ ...payment, imagem: "" })
      await setImagePayment(id, "");
    } catch (error) {
      console.log("handleRemoveImage" , error);
      Alert.alert("Erro ao remover imagem")
    }
  }
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Nome: {payment?.nome ?? 'N/A'}</Text>
        <Text style={styles.text}>Data de pagamento: {payment?.data_pagamento ? formatDateToBrazilian(payment.data_pagamento) : 'N/A'}</Text>
        <Text style={styles.text}>Num Recibo: {payment?.numero_recibo ?? 'N/A'}</Text>
        <Text style={styles.text} >Valor Pago: {payment?.valor_pago ? formatCurrencyBRL(payment.valor_pago) : 'N/A'}</Text>
        <Text style={styles.text}>Observação: {payment?.observacao ?? 'N/A'}</Text>
      </View>
      <View style={styles.contentImage}>
        {
          !!payment?.imagem ? (
            <Image source={{ uri: `${directory}/${payment.imagem}` }} style={{ width: 200, height: 200 }} />
          ) : <Text>Não há imagem cadastrada</Text>
        }
        
      </View>
      <View style={styles.containerButtons}>
        <Button title="Editar" disabled />
        <Button title="Imagem" onPress={handlePickImage} />
        <Button title="Remover Imagem" onPress={ handleRemoveImage } />
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
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentImage:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "regular"
  }
});