import { View, StyleSheet, Text } from "react-native"
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const CityDetails = () => {
    const searchParams = useLocalSearchParams();
    const [cityDetails, setCityDetails] = useState(null);
    
    const handleData = async () => {
        try {
            const response = await fetch("https://climapp-api.vercel.app/api");
            const responseJSON = await response.json();

            console.log(searchParams, responseJSON);
            // verificar problema ao acessar parâmetro da api
            // const city = responseJSON.find(cityData => cityData.city === searchParams.cityName);

            // setCityDetails(city);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect (() => {
        handleData();
    }, [])

    // return (
    //     <LinearGradient colors={["#00457D", "#05051F"]} 
    //         style={style.container}>
    //         <View>
    //             <Text style={style.headerTitle}>{cityDetails.city}</Text>
    //         </View>
    //     </LinearGradient>
    // )
};

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTitle: {
        color: "#ffff",
        fontSize: 20,
        fontFamily: "Montserrat_500Medium",
    },
})

export default CityDetails