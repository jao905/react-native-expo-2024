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
        {/* Banner 1 com imagem */}
        <View key="1" style={styles.page}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia29473/pastagem-cpt.jpg",
            }}
          />
        </View>

        {/* Banner 2 com imagem */}
        <View key="2" style={styles.page}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.sementesbonamigo.com.br/wp-content/uploads/2023/08/formacao-pastagens-jeito-certo-e1691261839591-1.jpg",
            }}
          />
        </View>

        {/* Banner 3 com imagem */}
        <View key="3" style={styles.page}>
          <Image
            style={styles.image}
            source={{
              uri: "https://pastocomciencia.com.br/wp-content/uploads/2019/08/IMG_3975.jpg",
            }}
          />
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
  },
  content: {
    marginTop: 20, // Ajusta o espaçamento do topo
    height: 200, // Altura do banner
    width: "95%", // Largura ajustada para não colar nas laterais
    alignSelf: "center", // Centraliza o banner horizontalmente
    borderRadius: 20, // Arredondamento
    overflow: "hidden", // Garante que a imagem siga o arredondamento
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%", // Preenche o banner horizontalmente
    height: "100%", // Preenche o banner verticalmente
    resizeMode: "cover", // Ajusta a imagem sem distorção
    borderRadius: 20, // Arredondamento da imagem
  },
  bulletContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
