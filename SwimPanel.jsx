import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SwimPanel({ verdict }) {
  return (
    <View style={styles.container}>
      <Text style={styles.verdict}>{verdict}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  verdict: {
    fontSize: 18,
    color: '#0077b6',
    textAlign: 'center',
  },
});
