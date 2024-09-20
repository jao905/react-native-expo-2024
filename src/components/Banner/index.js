
  import { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page, setPage] = useState(0);

  const onPageSelected = (e) => {
    setPage(e.nativeEvent.position);
  };

  return (
    <View style={styles.container}>
      <PagerView
        initialPage={0}
        style={styles.content}
        onPageSelected={onPageSelected}
      >
        <View key="1" style={styles.page}>
        <Image source={{ uri: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia29473/pastagem-cpt.jpg' }} style={styles.image} /> 

        </View>

        <View key="2" style={styles.page}>
        <Image source={{ uri: 'https://www.sementesbonamigo.com.br/wp-content/uploads/2023/08/formacao-pastagens-jeito-certo-e1691261839591-1.jpg' }} style={styles.image} />
        </View>

        <View key="3" style={styles.page}>
        <Image source={{ uri: 'https://pastocomciencia.com.br/wp-content/uploads/2019/08/IMG_3975.jpg' }} style={styles.image} />
        </View>
      </PagerView>
      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
        <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  content: {
    marginTop: 20,
    height: 300, // Ajustar a altura para acomodar a imagem
    width: "100%",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    overflow: "hidden", // Garantir que a imagem não ultrapasse os limites do banner
  },
  image: {
    width: "100%",
    height: "100%", // Ajustar a altura da imagem para ocupar todo o banner
    resizeMode: "cover",
  },
  bulletContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray",
    margin: 10,
  },
  activeBullet: {
    backgroundColor: "#000",
  },
});