import { StatusBar, StyleSheet, SafeAreaView, FlatList } from "react-native";

import Topo from "./source/telas/Carrinho/Topo";
import Detalhes from "./source/telas/Carrinho/Detalhes";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Texto from "./source/components/Texto";
import Mocks from "./source/mocks/carrinho";
import Item from "./source/telas/Carrinho/Item";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <SafeAreaView></SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Mocks.itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...Mocks.topo} />
              <Detalhes {...Mocks.detalhes} />
              <Texto style={styles.titulo}>{Mocks.itens.titulo}</Texto>
            </>
          );
        }}
        ListFooterComponent={() => {
          return (
            <>
              <Texto style={styles.titulo2}>{Mocks.itens.titulo2}</Texto>
              <FlatList
                data={Mocks.itens.lista2}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
              />
            </>
          );
        }}
      />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titulo: {
    color: "#FFA500",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25,
  },
  titulo2: {
    color: "red",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25,
  },
});
