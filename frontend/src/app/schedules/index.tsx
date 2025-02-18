import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useUser } from '@clerk/clerk-expo'
import { Text, View } from 'react-native'
import { api } from '@/src/services/api'
import { Footer } from "@/src/Components/Footer";

import BackIcon from "../../../assets/images/back.png";
import { CardSearch } from '@/src/Components/CardSearch';
import { useRouter } from 'expo-router';

export default function Schedules() {

    const router = useRouter(); 

    const { user } = useUser()

    const [userSchedules,setUserSchedules] = useState({})

    useEffect(() => {

        const email = user?.emailAddresses[0].emailAddress;

        if (!email) return

        const getSchedules = async () => {
            try {
                const { data } = await api.post(`/user`, { 
                    email
                 });
                setUserSchedules(data.user.schedules);
            } catch (error) {
                console.error('Erro ao buscar agendamentos:', error);
            }
        };

        getSchedules();

    },[])


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Agendamentos</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/auth")}
        >
          <Image source={BackIcon} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperVaccines}>
        {userSchedules && Array.isArray(userSchedules) ? userSchedules.map((schedule, index) => (
          <CardSearch
            key={index}
            hospitalName={schedule.hospitalName}
            id={schedule._id}
            vaccineName={schedule.vaccineName}
            type='mySchedule'
          />
        )) : <Text>Nenhum agendamento encontrado</Text>}
      </View>
      <Footer type="mySchedule"/>
    </View>
  )
}


export const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    paddingVertical: 32,
    alignItems: "center",
    backgroundColor: "white",
    position: "relative",
  },
  wrapperVaccines: {
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
