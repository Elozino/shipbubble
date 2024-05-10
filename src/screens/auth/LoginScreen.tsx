import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppButton from '../../components/ui/AppButton'
import Input from '../../components/ui/Input'
import { images } from '../../constants/images'
import { colors, fontSize, globalStyles } from '../../constants/styles'
import { useAppContext } from '../../context/AppContext'
import { hp, wp } from '../../helpers/dimens'

const LoginScreen = () => {
  const { setIsLoggedIn, isLoggedIn } = useAppContext()
  return (
    <View style={[globalStyles.container, globalStyles.allCenter]}>
      <Image
        style={styles.image}
        source={images.logo}
        resizeMode='contain'
      />
      <Text style={styles.text}>Login to get started</Text>
      <View style={{ gap: 20, marginBottom: 50 }}>
        <Input>
          <Input.Text label="Username" />
          <Input.Field
            placeholder='Ok'
          />
        </Input>
        <Input>
          <Input.Text label="Password" />
          <Input.Field
            placeholder='Ok'
          />
        </Input>
        <TouchableOpacity style={{ alignItems: 'flex-end' }}>
          <Text style={{ color: colors.app_color }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <AppButton
        title="Login"
        onPress={() => {
          console.log('first')
          setIsLoggedIn(!isLoggedIn)
        }}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  image: {
    width: wp(50),
    height: hp(4),
  },
  text: {
    color: colors.dark_1, fontSize: fontSize.lg, marginBottom: 50, marginTop: 10, fontWeight: '500'
  }
})