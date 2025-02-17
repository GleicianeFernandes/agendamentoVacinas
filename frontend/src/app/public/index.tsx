import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

import { useEffect, useState } from 'react';

import { Button } from '../../Components/Button/button';
import { View, Text, StyleSheet, Image } from 'react-native';

import { useOAuth, useUser } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  
  const googleAuth = useOAuth({ strategy: 'oauth_google' });

  async function signInWithGoogle() {
    try {
      setIsLoading(true);
      const redirectUrl = Linking.createURL('/');
      const oAuthFlow = await googleAuth.startOAuthFlow({ redirectUrl });

      const { user } = useUser();
  
      if (oAuthFlow.authSessionResult?.type === 'success') {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }

        // Aqui você pode salvar os dados do usuário no estado ou em um contexto global
        // para usá-los em outras partes do aplicativo
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/images/logo.png')} // Ajuste o caminho para sua lowgo
        style={styles.logo} 
      />
      <Text style={styles.title}>
        Bem Vindo ao Localiza Vacinas Marabá
      </Text>
      <Text style={styles.text}>Para continuar, faça login com o Google:</Text>

      <Button
        icon="logo-google"
        title="Entrar com o Google"
        onPress={signInWithGoogle}
        isLoading={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza horizontalmente
    gap: 20, // Espaçamento entre os elementos
    backgroundColor: '#ADD8E6', 
  },
  logo: {
    width: 200, // Ajuste o tamanho da logo
    height: 200,
    marginBottom: 20,  // Espaçamento abaixo da logo
    resizeMode: 'contain', // ou 'cover', depende de como quer a imagem
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,  // Espaçamento abaixo do título
    textAlign: 'center', // Alinha o texto ao centro
  },
  text: {
    fontSize: 16,
    marginBottom: 20, // Espaçamento abaixo do texto
    textAlign: 'center', // Alinha o texto ao centro
    color: '#333', // Cor do texto (opcional)
  },
});