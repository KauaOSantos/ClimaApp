import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";

export default function Index() {
  return (
  <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
    <Image source={require("../assets/images/logo.png")}/>
    <Image source={require("../assets/images/clima.png")}/>
    <Text style={style.texto}>Boas-Vindas!</Text>

    <TouchableOpacity style={style.styleBtn}>
      <Text style={style.tituloBtn}>Entrar</Text>
      <MaterialIcon name="arrow-forward" size={24} color={"#01080E"}/>
    </TouchableOpacity>
  </LinearGradient>
  );
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 64, 
    paddingVertical: 79,
    paddingHorizontal: 32
  },

  texto: {
    color: "#FFF",
    fontSize: 25, 
    fontFamily: "Montserrat_400Regular"
  },

  styleBtn: {
    width: "100%",
    height: 40,
    backgroundColor: "#7693FF",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8
  },

  tituloBtn: {
    color: "#01080E",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold"
  }
});