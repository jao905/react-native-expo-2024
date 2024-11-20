import { router } from "expo-router";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        {/* <Button title="zerar" onPress={handleReset} /> */}
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.touch}>Zerar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.touch}>Importar usuários</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.touch}>Não SEI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.back()}>
          <Text style={styles.touch}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8F5E9"
  },
  windowTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
   contentButtons: {
    width: "80%",
     marginVertical: 20,
     gap: 3,
  },
  touch:{
  backgroundColor: "#388e3c", // Azul médio
    color: "white",
    fontSize: 16,
    width: "90%",
    padding: 13,
    textAlign: "center",
    fontFamily: "regular",
    borderRadius: 8,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  //   buttonText: {
  //     color: "black",
  //     fontSize: 16,
  //     fontWeight: "bold",
  //   },
});
