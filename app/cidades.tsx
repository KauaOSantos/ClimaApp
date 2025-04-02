import { StyleSheet, View, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import dadosCidade from "../dados/cidades.json"

const Cidades = () => {
    return (
        <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
            {dadosCidade.map((city) => (
                <View style={style.listaItens}> 
                    <image></>
                    <Text style={style.cityName}>{city.city}</Text>
                    <Text style={style.cityTemp}>{city.temp}</Text>
                </View>
            ))}
        </LinearGradient>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        gap: 16
    },

    listaItens: {
        height: 63,
        width: "100%",
        backgroundColor: "#rgba(255,255,255,0.15)",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 16, 
        flexDirection: "row"
    },

    cityName: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_500Medium"
    },

    cityTemp: {
        fontSize: 25, 
        color: "#fff",
        fontFamily: "Montserrat_700Bold"
    }

});

export default Cidades;