import React, { useEffect, useState } from "react";

import * as DocumentPicker from "expo-document-picker";

import { useLocalSearchParams, useRouter } from "expo-router";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import { FakeVaccines, IVaccine } from "../PageSearch/data";

import BackIcon from "../../../assets/images/back.png";
import HourIcon from "../../../assets/images/hour.png";
import FileIcon from "../../../assets/images/file.png";

import { useUser } from "@clerk/clerk-expo";

import DropDownPicker from "react-native-dropdown-picker";

export default function VaccinePage() {
  const { id } = useLocalSearchParams();
  const { user } = useUser();
  
  const router = useRouter();
  
  const [vaccine, setVaccine] = useState<IVaccine | null>(null);
  
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [cpf, setCpf] = useState("");
  const [proofFile, setProofFile] = useState<string | null>(null);
  
  const [specialNeed, setSpecialNeed] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Necessidade 1", value: "necessidade1" },
    { label: "Necessidade 2", value: "necessidade2" },
    { label: "Necessidade 3", value: "necessidade3" },
  ]);

  const getVaccine = async () => {
    try {
      const findedVaccine = FakeVaccines.find((vaccine) => vaccine.id === id);
      console.log("!@# vaccine", findedVaccine);
      if (findedVaccine) {
        setVaccine(findedVaccine);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (id) {
      getVaccine();
    }
  }, [id]);

  const handleFileChange = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.canceled === false) {
        setProofFile(result.assets.find((file) => file.name));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    console.log({
      fullName,
      cpf,
      specialNeed,
      proofFile,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Agendar vacina</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/PageSearch")}
        >
          <Image source={BackIcon} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>
      <View style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Text
          style={{
            fontSize: 20,
            color: "#05326E",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {vaccine?.vaccineName}
        </Text>
        <Text style={{ fontSize: 16, color: "#05326E", textAlign: "center" }}>
          {vaccine?.hospitalName}
        </Text>
        <Text style={{ fontSize: 16, color: "#05326E", textAlign: "center" }}>
          {vaccine?.address}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image source={HourIcon} style={{ width: 25, height: 25 }} />
          <Text style={{ fontSize: 16, color: "#05326E", textAlign: "center" }}>
            {vaccine?.hour}
          </Text>
        </View>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.labelInput}>Nome completo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        <View>
          <Text style={styles.labelInput}>CPF:</Text>
          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
          />
        </View>
        <View>
          <Text style={styles.labelInput}>Necessidade especial:</Text>
          <DropDownPicker
            open={open}
            value={specialNeed}
            items={items}
            setOpen={setOpen}
            setValue={setSpecialNeed}
            setItems={setItems}
            placeholder="Selecione uma necessidade"
            containerStyle={{ width: "100%" }}
          />
        </View>
        <View>
          <Text style={styles.labelInput}>Comprovante de necessidade:</Text>
          <TouchableOpacity style={styles.input} onPress={handleFileChange}>
            {proofFile ? (
              <Text>Arquivo selecionado: {proofFile.name}</Text>
            ) : (
              <Image source={FileIcon} style={{ width: 25, height: 25 }} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginTop: 50 }} onPress={handleSubmit}>
          <Text
            style={{
              backgroundColor: "#3FABB7",
              color: "white",
              padding: 10,
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            Agendar vacina
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    padding: 32,
    alignItems: "center",
    backgroundColor: "white",
    position: "relative",
  },
  title: {
    color: "#3FABB7",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
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
