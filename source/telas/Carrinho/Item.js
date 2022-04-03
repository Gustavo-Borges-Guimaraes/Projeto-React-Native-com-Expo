import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texto from "../../components/Texto";

export default function Item({ item: { nome, imagem } }) {
  return (
    <>
      <View style={estilos.item} key={nome}>
        <Texto style={estilos.nome}>{nome}</Texto>
        <Image style={estilos.imagem} source={imagem} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 15,
    alignItems: "center",
  },
  imagem: {
    width: 50,
    height: 50,
  },
  nome: {
    fontSize: 18,
    color: "#464646",
    marginLeft: 15,
    lineHeight: 25,
  },
});
