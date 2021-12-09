import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

function ProfileScreen2({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { color: colors.text }]}>Profile 2</Text>
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
  },
});

export default ProfileScreen2;
