import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useRouter } from 'expo-router';

import { useUser } from '@clerk/clerk-expo';

export default function Home() {
  const router = useRouter();

  const { user } = useUser();

  console.log('!@# user', user?.fullName);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá {user?.fullName}, Bem vindo ao sistema!</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/PageSearch')}>
        <Text style={styles.buttonText}>Pesquisar Vacinas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20, // Espaçamento abaixo do texto
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    width: 200,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});