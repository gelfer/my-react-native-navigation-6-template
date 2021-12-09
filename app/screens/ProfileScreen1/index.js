import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';

function ProfileScreen1({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { color: colors.text }]}>Profile 1</Text>
      <Pressable
        onPress={() => navigation.navigate('Profile2')}
        style={({ pressd }) => [
          { backgroundColor: pressd ? '#08776c' : '#009688' },
          styles.btn,
        ]}
      >
        {({ pressd }) => <Text style={styles.txtBtn}>Go to Profile 2</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: 20,
    padding: 20,
    borderRadius: 5,
  },
  txt: {
    fontSize: 20,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 20,
  },
});

export default ProfileScreen1;
