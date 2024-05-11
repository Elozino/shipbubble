import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../../components/ui/AppButton'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainNavigatorParams } from '../../types/navigation'

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<MainNavigatorParams>>()
  return (
    <View>
      <Text>Home</Text>
      <AppButton
        title="Book Now"
        onPress={() => navigation.navigate('Booking')}
      />
      <AppButton
        title="History"
        onPress={() => navigation.navigate('History')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})