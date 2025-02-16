import { View, Text, TouchableOpacity, Image } from "react-native";

import { useRouter } from "expo-router";

import { CardSearch } from "@/src/Components/CardSearch";

import { FakeVaccines } from "./data";
import { styles } from "./styles";

import BackIcon from "../../../assets/images/back.png";

export default function PageSearch() {
  const router = useRouter();
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
        {FakeVaccines.map((vaccine, index) => (
          <CardSearch
            key={index}
            hospitalName={vaccine.hospitalName}
            id={vaccine.id}
            vaccineName={vaccine.vaccineName}
          />
        ))}
      </View>
    </View>
  );
}
