import { Image, StyleSheet, Platform , TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const styles = StyleSheet.create({
  reactLogo: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    padding: 20,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: '#841584',
    borderRadius: 17,
  },
  buttonText: {
    fontSize: 60,
    color: '#fff',
  },
});

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
    </ParallaxScrollView>
  );
}

export default function App() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <View style={styles2.container}>
      <TouchableOpacity style={styles2.button} onPress={() => setIsConnected(!isConnected)}>
        <Text style={styles2.buttonText}>Toggle Connection</Text>
      </TouchableOpacity>
    </View>
  );
}