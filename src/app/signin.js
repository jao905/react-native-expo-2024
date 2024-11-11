import { StatusBar } from "expo-status-bar";
import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password });
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PastoMais</Text>

      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="#666" />
        <TextInput
          style={styles.emailinput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="#666" />
        <TextInput
          style={styles.emailinput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={passwordVisibility}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons
            name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.smallButton} onPress={handleEntrarSuper}>
        <Text style={styles.smallButtonText}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.smallButton} onPress={() => router.push("/about")}>
        <Text style={styles.smallButtonText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.smallButton}
        onPress={() => BackHandler.exitApp()}
      >
        <Text style={styles.smallButtonText}>Sair do Aplicativo</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.smallButton}
        onPress={() => router.push("/maintenance")}
      >
        <Text style={styles.smallButtonText}>Banco de Dados</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: 24,
    marginBottom: 20,
    color: "#333",
  },
  inputbox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 19,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Para Android
  },
  emailinput: {
    flex: 1,
    fontFamily: "regular",
    fontSize: 18,
    paddingHorizontal: 10,
  },
  smallButton: {
    backgroundColor: "gray",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    width: "80%", // Largura ajustada
    alignItems: "center",
  },
  smallButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
