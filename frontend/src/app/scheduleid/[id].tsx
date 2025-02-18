import React, { useEffect, useState } from "react";

import { useLocalSearchParams, useRouter } from "expo-router";
import { api } from "@/src/services/api";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacityProps
} from "react-native";

import { FakeVaccines, IVaccine } from "../PageSearch/data";

interface SchedulePage extends TouchableOpacityProps {
  id: string;
}

export default function ScheduleIDPage() {
    const { id } = useLocalSearchParams();

    useEffect(() => {
        if (id){

        }
        },[id]);

        const router = useRouter();

    const [vaccine, setVaccine] = useState<IVaccine | null>(null);

    const getVaccine = async () => {
        try {
          const { data } = await api.get(`/vaccine/${id}`);
    
          setVaccine(data.vaccine);
        } catch (error) {
          console.error('Erro ao buscar vacina:', error);
        }
    }

    useEffect(() => {
        if (id) {
          getVaccine();
        }
      }, [id]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agendamento: {vaccine?._id}</Text>
            <Text style={styles.title2}>Protocolo de agendamento: {vaccine?._id}</Text>
            <Text style={styles.title2}>Vacina: {vaccine?.vaccineName}</Text>
            <Text style={styles.title2}>Paciente: {vaccine?.vaccineName}</Text>
            <View>
                <Text style={styles.title}>Agendamento: {vaccine?._id}</Text>
                <Text style={styles.title2}>Protocolo de agendamento: {vaccine?._id}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    paddingVertical: 32,
    backgroundColor: "white",
    position: "relative",
    gap: 5,
  },
  title: {
    color: "#05326E",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    paddingHorizontal: 32,
  },
  title2: {
    color: "#05326E",
    fontSize: 14,
    textAlign: "left",
    fontWeight: "semibold",
    paddingHorizontal: 32,
  },
  backButton: {
    position: "absolute",
    left: -80,
    top: 25,
  },
  form: {
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 32
  },
  input: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  labelInput: {
    color: "#05326E",
    fontSize: 16,
    fontWeight: "bold",
  },
});
