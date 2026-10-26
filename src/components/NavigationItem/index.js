
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

function NavigationItem(props) {
  return (
    <TouchableOpacity
    activeOpacity={1}
      onPress={props.onPress}
      style={styles.container}
    >
      <Image
        source={
          props.selecionado
            ? props.opcao.selecionada
            : props.opcao.icone
        }
        style={styles.icone}
      />

      <Text
        style={[
          styles.text,
          props.selecionado && styles.textSelecionado,
        ]}
      >
        {props.opcao.nome}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  icone: {
    width: 21,
    height: 21,
  },
  text: {
    fontSize: 11,
    fontWeight: "600",
    color: "#647084",
    fontFamily: "Inter",
  },
  textSelecionado: {
    color: "#7923C5",
  },
});

export default NavigationItem;
