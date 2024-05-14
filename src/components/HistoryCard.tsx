import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, fontSize, globalStyles } from '../constants/styles'
import { wp } from '../helpers/dimens'
import { orderListProp } from '../types'
import Card from './ui/Card'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParams } from '../types/navigation'

const HistoryCard = ({ item, navigation }: { item: orderListProp; navigation: StackNavigationProp<MainNavigatorParams> }) => {
  const backgroundColor = item?.status === 'completed' ? colors.green_1 : colors.yellow_1
  return (
    <Card onPress={() => {
      navigation.navigate('HistoryDetails', { item })
    }}>
      <View style={[globalStyles.flexRowBtw, { gap: wp(2) }]}>
        <Card.Icon>
          <Image
            source={{ uri: item?.logistics?.courier_image }}
            resizeMode="cover"
            style={styles.icon}
          />
        </Card.Icon>
        <View>
          <Card.Text text={`${item?.logistics?.courier_id}`} style={styles.mainText} />
          <Card.Text text={`${item?.orderInfo?.pickup.split(',')[0]} -> ${item?.orderInfo?.delivery.split(',')[0]}`} style={styles.subText} />
        </View>
      </View>
      <View style={[styles.status, { backgroundColor }]}>
        <Text style={[styles.statusText, {}]}>{item?.status}</Text>
      </View>
    </Card>
  )
}

export default HistoryCard


const styles = StyleSheet.create({
  icon: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6)
  },
  mainText: { fontWeight: '600', textTransform: 'capitalize' },
  subText: { fontSize: fontSize.xs, color: colors.dark_1 },
  statusText: { textTransform: 'capitalize', fontSize: fontSize.xs, fontWeight: '500' },
  status: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 100, width: 90, justifyContent: 'center', alignItems: 'center' }
})