import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontSize, globalStyles } from '../constants/styles'

const Empty = () => {
  return (
    <View style={[globalStyles.container, globalStyles.allCenter]}>
      <Text style={{ fontSize: fontSize.lg, color: colors.app_color, fontWeight: '600' }}>No data found</Text>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({})