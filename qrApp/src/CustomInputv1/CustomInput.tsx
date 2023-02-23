import React from "react";
import { Input, Icon } from "react-native-elements";

export default function CustomInput(props: any): JSX.Element {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    icon,
    onIconPress,
    secureTextEntry,
    textInput,
    errorInput,
    containerStyle,
    inputContainerStyle,
    iconStyle,
    type,
    labelStyle,
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  return (
    <>
      <Input
        labelStyle={labelStyle}
        style={[
          textInput,
          props.multiline && { height: props.numberOfLines * 40 },
        ]}
        containerStyle={containerStyle}
        inputContainerStyle={inputContainerStyle}
        errorMessage={hasError ? errors[name] : ""}
        errorStyle={errorInput}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        rightIcon={
          <Icon
            type="feather"
            name={icon}
            iconStyle={iconStyle}
            onPress={onIconPress}
            tvParallaxProperties={undefined}
          />
        }
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
    </>
  );
}
