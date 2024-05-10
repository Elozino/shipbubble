import { ActivityIndicator, Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { hp, wp } from '../../helpers/dimens';
import { colors, fontSize, globalStyles, radius } from '../../constants/styles';

const AppButton = ({ title, textStyle, btnStyle, disabled, loading, onPress }: {
  title: string;
  textStyle?: TextStyle;
  btnStyle?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      style={[styles.btn, btnStyle]}
      disabled={disabled}
      onPress={onPress}
    >
      {loading ? <ActivityIndicator
        color={colors.white}
        size="small"
      /> :
        <Text style={[styles.text, textStyle]}>{title}</Text>
      }
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
  btn: {
    height: hp(6),
    backgroundColor: colors.app_color,
    paddingVertical: hp(1.5),
    ...globalStyles.allCenter,
    width: wp(80),
    borderRadius: radius.curve,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.md,
  }
})