import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import FormLoginEmail from '../components/FormLoginEmail/FormLoginEmail';
export default function LoginEmail(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const {height} = useWindowDimensions();

  return (
    <>
      <SafeAreaView style={{flex: 1, flexGrow: 1}}>
        <ScrollView style={styles.container}>
          <View style={[styles.containerForm, {height: height}]}>
            
              <>
                <Text style={styles.Text}>Comencemos</Text>
                <FormLoginEmail setIsVisible={setIsVisible} />
              </>
            
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
    marginTop: 30,
    marginBottom: 20,
  },
  containerForm: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    flex: 1,
    flexGrow: 1,
    borderTopRightRadius: 150,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
  },
});