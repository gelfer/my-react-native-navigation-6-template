import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

function FeedScreen2({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { color: colors.text }]}>Feed 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    // color: colors.text,
  },
});

export default FeedScreen2;
