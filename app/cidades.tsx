import { StyleSheet, View, Text, Image, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import dadosCidade from "../dados/cidades.json";
import { useEffect, useState } from "react";

const Cidades = () => {
    const [search, setsearch] = useState("");
    const [filteredCities, setFilteredCities] = useState(dadosCidade);

    useEffect(() => {
        const newFilteredCities = dadosCidade.filter((city) => 
            city.city.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );

        setFilteredCities(newFilteredCities)
    }, [search])

    return (
        <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
            <View style={style.inputContainer}>
                <TextInput 
                    placeholder="Digite a cidade" 
                    placeholderTextColor={"#fff"}
                    style={style.input}
                    value={search}
                    onChangeText={(value) => setsearch(value)}
                />
                <MaterialIcons name="search" size={18} color={"#fff"} />
            </View>

            <ScrollView>
                <View style={style.scrollList}>
                    {filteredCities.map((city) => (
                        <View key={city.city} style={style.listaItens}>
                            <Image
                                style={style.cityImage}
                                source={require("../assets/images/iconNuvem.png")}
                            />
                            <Text style={style.cityName}>
                                {city.city.replace(", ", " - ")}
                            </Text>
                            <Text style={style.cityTemp}>{city.temp}º</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        gap: 16,
        paddingTop: 40
    },

    scrollList: {
        gap: 16
    },

    listaItens: {
        height: 63,
        width: "100%",
        backgroundColor: "#rgba(255,255,255,0.15)",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 16,
        flexDirection: "row",
        paddingHorizontal: 16,
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
    },

    cityImage: {
        width: 27,
        height: 24
    },

    inputContainer: {
        height: 45,
        width: "100%",
        backgroundColor: "#rgba(255,255,255,0.15)",
        borderRadius: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    
    input: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_500Medium"
    }
});

export default Cidades;