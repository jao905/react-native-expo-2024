import { StatusBar } from "expo-status-bar";
import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
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
      <View style={styles.logoContainer}>
        {/* <Image source={require('./path/to/logo.png')} style={styles.logo} /> */}
      </View>
      <Text style={styles.appTitle}>PastoMais</Text>
      <Text style={styles.subtitle}>Bem-vindo! Faça login para continuar.</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="#4caf50" />
        <TextInput
          style={styles.emailinput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="#4caf50" />
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
            color="#4caf50"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.largeButton} onPress={handleEntrarSuper}>
        <Text style={styles.largeButtonText}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.smallButton} onPress={() => router.push("/about")}>
        <Text style={styles.smallButtonText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.smallButton}
        onPress={() => router.push("/maintenance")}
      >
        <Text style={styles.smallButtonText}>Banco de Dados</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.smallButton}
        onPress={() => BackHandler.exitApp()}
      >
        <Text style={styles.smallButtonText}>Sair do Aplicativo</Text>
      </TouchableOpacity>

      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8E6C9", // Fundo verde claro moderno
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  appTitle: {
    fontSize: 50,
    // fontWeight: "bold",
    fontFamily: "black",
    color: "#1b5e20", // Verde mais escuro
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 19,
    color: "#388e3c", // Verde moderno
    marginBottom: 20,
  },
  inputbox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  emailinput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  largeButton: {
    backgroundColor: "rgba(0, 100, 0, 1)", // Verde mais moderno e vibrante
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  largeButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  smallButton: {
    backgroundColor: "rgba(0, 100, 0, 1)", // Verde mais claro e moderno
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  smallButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
