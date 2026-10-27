
import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";

function List({ icon, titulo, subtitulo, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.alinhamento}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.icon}>
          <Image
            source={icon}
            style={styles.imagem}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>

        <Image
          source={require("../../assets/img/chevron-right.png")}
          style={styles.seta}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 352,
    height: 70,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E8E5ED",
    borderRadius: 12,
    overflow: "hidden",
    margin: 5
  },

  alinhamento: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  icon: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#F3E8FF",
    alignItems: "center",
    justifyContent: "center",
  },

  imagem: {
    width: 21,
    height: 21,
  },

  textos: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  titulo: {
    fontFamily: 'Inter_18pt-SemiBold',
    fontSize: 14,
    color: "#2D3748",
  },

  subtitulo: {
    fontFamily: 'Inter_18pt-Regular',
    fontSize: 12,
    color: "#718096",
  },

  seta: {
    width: 18,
    height: 18,
  },
});

export default List;
