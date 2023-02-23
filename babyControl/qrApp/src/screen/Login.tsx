import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';

export default function Login(props: any): JSX.Element {

  const { height } = useWindowDimensions();
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <View style={[styles.containerForm, { height: height }]}>
                <Text style={styles.Text}>Comencemos</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2334d0',
    flex: 1,
  },
  Text: {
    fontSize: 25,
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 30,
  },
  safeArea: { flex: 1, flexGrow: 1 },
  containerForm: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 150,
    borderTopLeftRadius: 40,
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
