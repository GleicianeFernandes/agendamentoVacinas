import { TouchableOpacityProps, Text, View } from "react-native";
import  { styles } from "./styles";
import React from "react";


interface CardSearchProps extends TouchableOpacityProps {
    vaccineName: string;
    hospitalName: string;
    address: string;
    distance: string;
    openingHours: string;
    location: string;
}

export function CardSearch({
    vaccineName,
    hospitalName,
    address,
    distance,
    openingHours,
    location,
    ...rest
}:CardSearchProps){
    return(
        <View style={styles.container}>

        </View>
    )
}