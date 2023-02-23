import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik, Field } from 'formik';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import CustomInput from '../../CustomInputv1/CustomInput';
import SimpleToast from 'react-native-simple-toast';
import { emailValidation } from '../../utils/yup';


export default function FormLoginEmail({
  setIsVisible,
}: {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const navigation = useNavigation();

  const onSubmit = (): any => {
 /*    setIsVisible(true);
    LoginEmailApi(values)
      .then(res => {
        if (res) {
          // SimpleToast.show('Email Correcto', SimpleToast.LONG);
          let email = values;

          setIsVisible(false);
          navigation.navigate('Login', email);
        } else {
          SimpleToast.show(
            'Email Incorrecto, por favor registrese',
            SimpleToast.LONG,
          );
          setIsVisible(false);
          navigation.navigate('Register');
          setTimeout(() => navigation.navigate('Register'), 2000);
        }
      })
      .catch(err => {
        console.log('err', err);
      }); */
  };

  return (
    <View style={styles.containerView}>
      <Formik
        validationSchema={emailValidation}
        initialValues={{ email: '' }}
        onSubmit={onSubmit}>
        {({ handleSubmit, isValid, values }) => (
          <>
            <Field
              labelStyle={styles.labelStyle}
              textInput={styles.textInput}
              errorInput={styles.errorText}
              containerStyle={[styles.containerStyle, { marginTop: 20 }]}
              inputContainerStyle={styles.inputContainerStyle}
              iconStyle={styles.iconStyle}
              name="email"
              label="Escribe tu Email"
              component={CustomInput}
            />
            <Button
              titleStyle={{ fontFamily: 'rockwell' }}
              title="Ingresar"
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.containerStyle}
              onPress={handleSubmit}
              disabled={!isValid || !values.email}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 4,
    flexGrow: 1,
  },
  label: {
    color: '#C1C1CA',
    fontFamily: 'Rockwell',
    fontWeight: '100',
    marginBottom: 8,
    backgroundColor: 'transparent',
  },
  buttonStyle: {
    borderRadius: 30,
    backgroundColor: '#2334d0',
    height: 50,
    marginBottom: 80,
  },
  //estilos input
  textInput: {
    width: '100%',
    color: '#2334d0',
  },
  containerStyle: {
    width: '85%',
    backgroundColor: 'transparent',
  },
  errorText: {
    fontSize: 12,
    color: '#FD387A',
  },
  iconStyle: {
    color: '#a8bcda',
  },
  inputContainerStyle: {
    fontFamily: 'rockwell',
    borderColor: 'transparent',
    backgroundColor: '#F4F5F9',
    borderRadius: 15,
    color: '#2334d0',
  },
  labelStyle: {
    fontFamily: 'rockwell',
    fontWeight: '400',
  },
});
