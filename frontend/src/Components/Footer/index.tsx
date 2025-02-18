import {
  TouchableOpacityProps,
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { useRouter } from "expo-router";

interface CardSearchProps extends TouchableOpacityProps {
  type: "mySchedule" | "buscar" | "perfil"
}

export function Footer({ type }: CardSearchProps) {
  const router = useRouter();

  if (type === "mySchedule") {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/schedules')} style={styles.button}>
        <Image source={require('../../../assets/images/Schedule_verde.png')} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/PageSearch')}>
        <Image source={require('../../../assets/images/Search_branco.png')} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/PageSearch')}>
        <Image source={require('../../../assets/images/User_branco.png')} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
    </View>
    );
  }

  if (type === "buscar") {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/schedules')}>
        <Image source={require('../../../assets/images/Schedule_branco.png')} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/PageSearch')} style={styles.button}>
        <Image source={require('../../../assets/images/Search_verde.png')} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/PageSearch')}>
        <Image source={require('../../../assets/images/User_branco.png')} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
    </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/schedules')}>
        <Image source={require('../../../assets/images/Schedule_branco.png')} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/PageSearch')} style={styles.button}>
        <Image source={require('../../../assets/images/Search_verde.png')} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/PageSearch')}>
        <Image source={require('../../../assets/images/User_branco.png')} style={{ width: 35, height: 35 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",  
    bottom: 0, 
    width: '100%',  
    height: 70,  
    flexDirection: "row",  
    alignItems: "center",  
    justifyContent: "space-around",  
    backgroundColor: "#3FABB7",   
    paddingHorizontal: 20, 
    marginTop: 'auto', 
    zIndex: 1,
  },
  button:{
    width: 54,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
