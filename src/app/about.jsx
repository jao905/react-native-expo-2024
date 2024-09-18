import { router } from "expo-router";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sobre</Text>
        <TouchableOpacity style={styles.button} onPress={() => { router.replace("/") }}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        Este é um exemplo de texto que pode ser adicionado à tela "Sobre". Aqui você pode fornecer informações sobre o aplicativo, sua finalidade e como usá-lo.
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
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20, // Espaçamento entre o cabeçalho e o texto
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 10, // Espaçamento entre o título e o botão
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 'auto', // Alinha o botão à direita
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'left', // Alinhamento do texto
  },
});
