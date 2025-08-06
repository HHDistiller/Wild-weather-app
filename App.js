import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { getSwimVerdict } from './swimMode';

export default function App() {
  const [mode, setMode] = useState('DramaCast');
const weatherData = {
  precipIntensity: 0.2,
  uvIndex: 7,
  windSpeed: 5,
  airTemp: 82,
};

const swimVerdict = getSwimVerdict(weatherData);
  
  const getForecastMessage = () => {
    switch (mode) {
      case 'DramaCast':
        return "Warm now, jacket-worthy later. Betrayal level: medium-high.";
      case 'Repair':
        return "Morning’s dry, but gusty winds by 2PM. Carburetors beware.";
      case 'Swim':
        return "UV index is flexing. Sunscreen or scorched dreams—your choice.";
      default:
        return "Pick a mode to reveal your weather destiny.";
    }
  };

  return (
    <Text style={styles.swimVerdict}>{swimVerdict}</Text>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>WeatherWise: RadarRogue Edition 🌦️</Text>
      <View style={styles.buttonContainer}>
        <Button title="DramaCast" onPress={() => setMode('DramaCast')} />
        <Button title="Repair Mode" onPress={() => setMode('Repair')} />
        <Button title="Swim Mode" onPress={() => setMode('Swim')} />
      </View>
      <Text style={styles.forecast}>{getForecastMessage()}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },
  forecast: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    color: '#333',
  },
});
