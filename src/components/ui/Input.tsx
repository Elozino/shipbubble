import React from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import { colors, fontSize, radius } from '../../constants/styles';
import { hp, wp } from '../../helpers/dimens';

const Input = ({ children, style }: {
  children: JSX.Element | React.ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      {children}
    </View>
  )
}

Input.displayName = 'Input'

Input.Text = function ({ label }: {
  label: string
}) {
  return (
    <Text style={[styles.text]}>{label}</Text>
  )
}
Input.displayName = 'Text'

Input.Field = function (props: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<TextInput> & Readonly<TextInputProps>) {
  return (
    <TextInput
      style={styles.inputField}
      placeholderTextColor={colors.dark_1}
    // {...props}
    />
  )
}

Input.displayName = 'Field'

export default Input

const styles = StyleSheet.create({
  wrapper: {
    width: wp(80)
  },
  text: {
    color: colors.app_color,
    marginBottom: 10,
    fontWeight: '500',
  },
  inputField: {
    width: '100%',
    height: hp(6),
    borderWidth: 1,
    borderColor: colors.gray_1,
    borderRadius: 4,
    paddingHorizontal: wp(4),
    fontSize: fontSize.md,
  }
})
