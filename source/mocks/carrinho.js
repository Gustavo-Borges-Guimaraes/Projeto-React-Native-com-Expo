import topo from "../../assets/topo.png";
import logoVendedor from "../../assets/logo.png";

import antena2g from "../../assets/Itens/antena2g3g.png";
import antenaWifi from "../../assets/Itens/antenaWifi.png";
import modem from "../../assets/Itens/modem.png";
import node from "../../assets/Itens/nodeMcu.png";

import alicate from "../../assets/Item2/alicate.jpg";
import cabo from "../../assets/Item2/caboRede.jpg";
import estabilizador from "../../assets/Item2/estabilizador.png";
import filtro from "../../assets/Item2/filtro.jpg";
import contato from "../../assets/Item2/limpaContato.jpg";

const carrinho = {
  topo: {
    titulo: "Carrinho",
    imagem: topo,
  },
  detalhes: {
    titulo: "Detalhes do Carrinho",
    tituloProduto: "Kit IoT",
    descricao: "Um kit IoT que revoluciona a vida dos estudante",
    logoVendedor: logoVendedor,
    nomeVendedor: "Nuvem's shopping",
    preco: "R$ 99,00",
  },
  itens: {
    titulo: "Itens do Carrinho",
    lista: [
      {
        nome: "Antena 2g/3g",
        imagem: antena2g,
      },
      {
        nome: "Antena Wifi",
        imagem: antenaWifi,
      },
      {
        nome: "Modem",
        imagem: modem,
      },
      {
        nome: "Node MCU",
        imagem: node,
      },
    ],
    titulo2: "Itens Recomendados",
    lista2: [
      {
        nome: "Alicate de Crimpar",
        imagem: alicate,
      },
      {
        nome: "Cabo de Rede",
        imagem: cabo,
      },
      {
        nome: "Estabilizador",
        imagem: estabilizador,
      },
      {
        nome: "Filtro de Linha",
        imagem: filtro,
      },
      {
        nome: "Limpa Contato",
        imagem: contato,
      },
    ],
  },
};

export default carrinho;
