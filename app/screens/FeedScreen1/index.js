import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@react-navigation/native';

function FeedScreen1({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { color: colors.text }]}>Feed 1</Text>
      <Pressable
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          navigation.navigate('Feed2');
        }}
        style={({ pressd }) => [
          { backgroundColor: pressd ? '#08776c' : '#009688' },
          styles.btn,
        ]}
      >
        {({ pressd }) => <Text style={styles.txtBtn}>Go to Feed 2</Text>}
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

export default FeedScreen1;
