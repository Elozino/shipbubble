import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontSize, globalStyles } from '../../constants/styles'
import NavHeader from '../../components/NavHeader'
import { wp } from '../../helpers/dimens'
import Card from '../../components/ui/Card'
import { images } from '../../constants/images'
import { FontAwesome } from '@expo/vector-icons'

const History = () => {
  return (
    <View style={[globalStyles.container]}>
      <NavHeader headerName="Delivery History" />
      <View style={{ padding: wp(3) }}>
        <FlatList
          data={Array(50)}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 15, paddingBottom: 20 }}
          initialNumToRender={50}
          maxToRenderPerBatch={100}
          renderItem={({ item }) =>
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
                  <Card.Text text="Delivery Number" style={styles.mainText} />
                  <Card.Text text="Yaba -> Ikeja" style={styles.subText} />
                </View>
              </View>
              <Card.Icon>
                <FontAwesome name="angle-right" size={24} color={colors.neutral(0.8)} />
              </Card.Icon>
            </Card>
          }
        />
      </View>
    </View>
  );
};

export default History

const styles = StyleSheet.create({
  icon: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6)
  },
  mainText: { fontWeight: '600' },
  subText: { fontSize: fontSize.xs, color: colors.dark_1 }
})