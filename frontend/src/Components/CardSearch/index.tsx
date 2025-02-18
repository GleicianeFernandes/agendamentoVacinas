import {
  TouchableOpacityProps,
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import VaccineIcon from "../../../assets/images/vaccine.png";
import { useRouter } from "expo-router";

interface CardSearchProps extends TouchableOpacityProps {
  id: string;
  vaccineName: string;
  hospitalName: string;
  type: "mySchedule"
}

export function CardSearch({ id, vaccineName, hospitalName, type }: CardSearchProps) {
  const router = useRouter();

  if (type === "mySchedule") {
      return (
        <View style={styles.container}>
          <Image source={VaccineIcon} style={styles.icon} />
          <Text style={styles.vaccine}>{vaccineName}</Text>
          <Text style={styles.hospital}>{hospitalName}</Text>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/scheduleid/[id]",
                params: { id },
              })
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Detalhes</Text>
          </TouchableOpacity>
        </View>
      );
    }

  return (
    <View style={styles.container}>
      <Image source={VaccineIcon} style={styles.icon} />
      <Text style={styles.vaccine}>{vaccineName}</Text>
      <Text style={styles.hospital}>{hospitalName}</Text>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/vaccine/[id]",
            params: { id },
          })
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 190,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#ADD8E6",
    gap: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 20,
    position: "relative",
  },
  icon: {
    width: 50,
    height: 50,
    color: "#fff",
    fontSize: 20,
  },
  vaccine: {
    textAlign: "center",
    color: "#05326E",
    fontSize: 16,
    fontWeight: "bold",
  },
  hospital: {
    textAlign: "center",
    color: "#05326E",
    fontSize: 10,
  },
  button: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#3FABB7",
    padding: 8,
    width: "100%",
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
