import { router } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useMaintenanceDatabase } from "../database/useMaintenanceDatabase";

export default function Maintenance() {

  const { resetDatabase } = useMaintenanceDatabase();

    const handleReset = async () => {
        //reset database
        try {
            //fazer o chamado da função resetDatabase
            await resetDatabase();
            Alert.alert("Payments", "Banco de Dados limpo com sucesso!");
            
        } catch (error) {
            Alert.alert("Payments", "Erro ao limpar o banco de dados" + error.message,);
        }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.windowTitle}>Manutenção do Banco</Text>
      <View style={styles.contentButtons}>
        <Button title="zerar" onPress={handleReset} />
        <Button title="importar usuários" />
        <Button title="importar usuários" />
        <Button title="voltar" onPress={()=> router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  windowTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contentButtons: {
    padding: 10,
    marginVertical: 20,
    gap: 10,
  },
  //   buttonText: {
  //     color: "black",
  //     fontSize: 16,
  //     fontWeight: "bold",
  //   },
});
