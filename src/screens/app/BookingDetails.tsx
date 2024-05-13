import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const BookingDetails = () => {
  const { params } = useRoute()
  console.log("params: ", params);
  return (
    <View>
      <Text>BookingDetails</Text>
    </View>
  )
}

export default BookingDetails

const styles = StyleSheet.create({})