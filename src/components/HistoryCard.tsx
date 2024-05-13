import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { images } from '../constants/images'
import { colors, fontSize, globalStyles } from '../constants/styles'
import { wp } from '../helpers/dimens'
import Card from './ui/Card'
import { HistoryCardProps } from '../types'

const HistoryCard = ({ item }: HistoryCardProps) => {
  const backgroundColor = item?.status === 'completed' ? colors.green_1 : colors.yellow_1
  return (
    <Card>
      <View style={[globalStyles.flexRowBtw, { gap: wp(2) }]}>
        <Card.Icon>
          <Image
            source={images["m-logo"]}
            resizeMode="cover"
            style={styles.icon}
          />
        </Card.Icon>
        <View>
          <Card.Text text={`${item?.deliveryId}`} style={styles.mainText} />
          <Card.Text text={`${item?.pickup} -> ${item?.deliverTo}`} style={styles.subText} />
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
  mainText: { fontWeight: '600' },
  subText: { fontSize: fontSize.xs, color: colors.dark_1 },
  statusText: { textTransform: 'capitalize', fontSize: fontSize.xs, fontWeight: '500' },
  status: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 100, width: 90, justifyContent: 'center', alignItems: 'center' }
})