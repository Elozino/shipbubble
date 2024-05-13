import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { globalStyles } from '../../constants/styles'
import NavHeader from '../../components/NavHeader'

const BookingDetails = () => {
  const { params } = useRoute()
  console.log("params: ", params);
  return (
    <View style={globalStyles.container}>
      <NavHeader
        headerName='Booking Summary'
      />
      <View>
        <Text>BookingDetails</Text>
      </View>
    </View>
  )
}

export default BookingDetails

const styles = StyleSheet.create({})