import React, { useState } from 'react'
import { Alert, Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppButton from '../../components/ui/AppButton'
import Input from '../../components/ui/Input'
import { images } from '../../constants/images'
import { colors, fontSize, globalStyles } from '../../constants/styles'
import { useAppContext } from '../../context/AppContext'
import { hp, wp } from '../../helpers/dimens'
import { _setItem } from '../../helpers/async-storage'


const LoginScreen = () => {
  const { setIsLoggedIn, isLoggedIn, setUserCredentials } = useAppContext()
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState({
    username: false,
    password: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    Keyboard.dismiss()
    if (!loginForm.username || !loginForm.password) {
      setError(prev => ({ ...prev, username: !loginForm.username }))
      setError(prev => ({ ...prev, password: !loginForm.password }))
    } else if (loginForm.username !== 'Elozino' || loginForm.password !== 'skillbubble') {
      setError(prev => ({ ...prev, username: loginForm.username !== 'Elozino' }))
      setError(prev => ({ ...prev, password: loginForm.password !== 'skillbubble' }))
    } else {
      setIsLoading(true);
      setTimeout(async () => {
        await _setItem('auth', loginForm)
        setUserCredentials(prev => ({ ...prev, ...loginForm }))
        setIsLoading(false);
        setIsLoggedIn(!isLoggedIn)
      }, 2000);
    }
  };


  const handleForgotPassword = () => {
    Alert.alert('Check your credential below', 'Well we got you covered... Your username: Elozino, Your password: skillbubble;')
  }
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
            value={loginForm.username}
            onChangeText={(e: string) => setLoginForm(prev => ({ ...prev, username: e.trim() }))}
            onFocus={() => { setError(prev => ({ ...prev, username: false })) }}
            onBlur={() => { setError(prev => ({ ...prev, username: !loginForm.username })) }}
          />
          {error.username && (
            <Input.Text label="Incorrect username" style={globalStyles.errorText} />
          )}
        </Input>
        <Input>
          <Input.Text label="Password" />
          <Input.Field
            value={loginForm.password}
            secureTextEntry={true}
            onChangeText={(e: string) => setLoginForm(prev => ({ ...prev, password: e.trim() }))}
            onFocus={() => { setError(prev => ({ ...prev, password: false })) }}
            onBlur={() => { setError(prev => ({ ...prev, password: !loginForm.password })) }}
          />
          {error.password && (
            <Input.Text label="Incorrect password" style={globalStyles.errorText} />
          )}
        </Input>
        <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={handleForgotPassword}>
          <Text style={{ color: colors.app_color }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <AppButton
        title="Login"
        onPress={handleSubmit}
        loading={isLoading}
        disabled={isLoading}
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
  },
})