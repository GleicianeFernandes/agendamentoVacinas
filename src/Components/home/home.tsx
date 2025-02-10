import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/home/stylesHome';

export default function Home() {
  const router = useRouter();


return(
    <View style={styles.container}>
        <Text style={styles.title}>
            Bem Vindo ao Localiza Vacinas Marabá
        </Text>
        <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.bnt}>
            <Text style={styles.buttonText}>Pesquisar</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.bnt}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
)
}