import React, { useState } from 'react';
import styles from '../styles/appStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    // Aqui você pode conectar à sua API ou lógica de login
    Alert.alert('Sucesso', `Email: ${email}\nSenha: ${password}`);
  };

  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require('../assets/logosemback.png')} style={styles.image}/>
        </View>
      <View style={styles.intro}>
        <Text style={styles.introTexts}>Create an account</Text>
        <Text style={styles.introTexts1}>Enter your email to sign up for this app</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />





      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.links}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Criar conta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.opcional}>
        <Text style={styles.opcionalText}>----------------------</Text>
        <Text style={styles.opcionalText}>or</Text>
        <Text style={styles.opcionalText}>----------------------</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <FontAwesome name="google" size={20}/>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <FontAwesome name="apple" size={20}/>
        <Text style={styles.buttonText}>Continue with apple</Text>
      </TouchableOpacity>

      <View style={styles.close}>
        <Text style={styles.closeTexts}>by clicking continue, you agree to our <Text style={{fontWeight: 'bold'}}>Terms of Service</Text> and <Text style={{fontWeight: 'bold'}}>Privacy Policy</Text></Text>
      </View>

    </View>
  );
}

