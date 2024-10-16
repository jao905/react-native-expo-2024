import { router } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sobre</Text>
        <TouchableOpacity style={styles.button} onPress={() => { router.back() }}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <Image 
        source={{ uri: 'http://www.github.com/jao905.png' }} 
        style={styles.photo} 
      />
      <Text style={styles.description}>
      Este app é voltado para garantir a produtividade e a sustentabilidade da pecuária, com um foco especial na rotação de pastagens. Ele oferece práticas que visam otimizar a qualidade e a produção do pasto, proporcionando aos animais uma alimentação adequada e mantendo o solo saudável. Através da rotação de pastagens, o app ajuda a evitar o sobrepastoreio, permitindo a recuperação da vegetação e mantendo um ecossistema equilibrado.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: '#e0f7e0', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#2e7d32', 
  },
  button: {
    backgroundColor: '#66bb6a',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 'auto',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000', 
    textAlign: 'left',
  },
});