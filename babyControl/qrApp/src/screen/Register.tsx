import React, {useState} from 'react';
import FormRegister from '../components/FormRegister/FormRegister';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

export default function Register(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const {height} = useWindowDimensions();
  return (
    <>
      <SafeAreaView style={{flex: 1, flexGrow: 1}}>
        <ScrollView style={styles.container}>
          <View style={[styles.containerForm, {height: height}]}>
            
                <Text style={styles.Text}>Comencemos</Text>
                <FormRegister setIsVisible={setIsVisible} />
              
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2334d0',
    flex: 1,
    flexGrow: 1,
  },
  Text: {
    fontSize: 25,
    fontWeight: '400',
    marginLeft: 20,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  containerForm: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    flex: 1,
    flexGrow: 1,
    borderTopRightRadius: 150,
    borderTopLeftRadius: 40,
    justifyContent: 'space-evenly',
  },
});