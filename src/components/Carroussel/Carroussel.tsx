import { useEffect, useRef, useState } from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const destaques = [
  {
    categoria: "Política",
    titulo: "Debates presidenciais têm datas confirmadas para outubro",
    data: "01 Set 2026",
    imagem: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
  },
  {
    categoria: "Eleições",
    titulo: "Conheça as principais notícias do cenário eleitoral",
    data: "05 Set 2026",
    imagem: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c",
  },
  {
    categoria: "Brasil",
    titulo: "Acompanhe as novidades da política brasileira",
    data: "10 Set 2026",
    imagem: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9",
  },
];

export default function Carroussel() {
  const [indice, setIndice] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Valor inicial da opacidade
  const destaque = destaques[indice];

  function avancar() {
    setIndice((atual) => (atual + 1) % destaques.length);
  }

  function voltar() {
    setIndice(
      (atual) => (atual - 1 + destaques.length) % destaques.length
    );
  }

  useEffect(() => {
    fadeAnim.setValue(0.3); 
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 450, 
      useNativeDriver: true,
    }).start();
  }, [indice]);

  useEffect(() => {
    const tempo = setInterval(() => {
      avancar();
    }, 4000);

    return () => clearInterval(tempo);
  }, [indice]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ImageBackground
          source={{ uri: destaque.imagem }}
          style={styles.banner}
          imageStyle={styles.imagem}
          resizeMode="cover"
        >
          <View style={styles.sombra}>
            <View style={styles.conteudo}>
              <Text style={styles.categoria}>{destaque.categoria}</Text>
              <Text style={styles.titulo}>{destaque.titulo}</Text>
              <Text style={styles.data}>{destaque.data}</Text>
            </View>

            <TouchableOpacity
              style={[styles.seta, styles.esquerda]}
              onPress={voltar}
              accessibilityLabel="Destaque anterior"
            >
              <Text style={styles.textoSeta}>‹</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.seta, styles.direita]}
              onPress={avancar}
              accessibilityLabel="Próximo destaque"
            >
              <Text style={styles.textoSeta}>›</Text>
            </TouchableOpacity>

            <View style={styles.indicadores}>
              {destaques.map((item, i) => (
                <TouchableOpacity
                  key={item.categoria}
                  onPress={() => setIndice(i)}
                  accessibilityLabel={`Destaque ${i + 1}`}
                  style={[
                    styles.indicador,
                    indice === i && styles.ativo,
                  ]}
                />
              ))}
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  banner: {
    height: 158,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  imagem: {
    borderRadius: 14,
  },
  sombra: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 14,
    overflow: "hidden",
  },
  conteudo: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingRight: 38,
  },
  categoria: {
    color: "#FFFFFF",
    backgroundColor: "#092B3B",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 10,
    marginBottom: 5,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    lineHeight: 17,
  },
  data: {
    color: "#FFFFFF",
    fontSize: 10,
    marginTop: 4,
  },
  seta: {
    position: "absolute",
    top: "45%",
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: "rgba(0,30,45,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  esquerda: {
    left: 6,
  },
  direita: {
    right: 6,
  },
  textoSeta: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 26,
    marginTop: -3,
  },
  indicadores: {
    position: "absolute",
    bottom: 7,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  indicador: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.6)",
  },
  ativo: {
    width: 16,
    backgroundColor: "#FFFFFF",
  },
});