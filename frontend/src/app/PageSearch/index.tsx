import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { CardSearch } from "@/src/Components/CardSearch";
import { styles } from "./styles";
import BackIcon from "../../../assets/images/back.png";
import { api } from "@/src/services/api";

export default function PageSearch() {
  const router = useRouter();
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    getAllVaccines();
  }, []);

  const getAllVaccines = async () => {
    try {
      const { data } = await api.get("/vaccine");
      setVaccines(data.vaccines);
    } catch (error) {
      console.error('Erro ao buscar vacinas:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Vacinas</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/auth")}
        >
          <Image source={BackIcon} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperVaccines}>
        {vaccines.map((vaccine, index) => (
          <CardSearch
            key={index}
            hospitalName={vaccine.hospitalName}
            id={vaccine._id}
            vaccineName={vaccine.vaccineName}
          />
        ))}
      </View>
    </View>
  );
}