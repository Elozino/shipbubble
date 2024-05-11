import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontSize, globalStyles, radius } from '../../constants/styles';
import NavHeader from '../../components/NavHeader'
import { hp, wp } from '../../helpers/dimens'
import Card from '../../components/ui/Card'
import { images } from '../../constants/images'
import { FontAwesome } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons';
import { tabList } from '../../constants/data'



const History = () => {
  return (
    <View style={[globalStyles.container]}>
      <NavHeader headerName="Delivery History"
        icon={
          <Pressable style={[globalStyles.iconWrapper, globalStyles.allCenter, { marginRight: 10 }]}>
            <Octicons name="search" size={24} color="black"
            />
          </Pressable>
        }
      />
      <View style={{ padding: wp(3) }}>
        <View style={[globalStyles.flexRowBtw, styles.tabWrapper]}>
          {
            tabList.map(item => (
              <Pressable
                key={item}
                style={[globalStyles.allCenter, styles.tabBtn]}>
                <Text style={styles.tabText}>{item}</Text>
              </Pressable>
            ))
          }
        </View>
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
  subText: { fontSize: fontSize.xs, color: colors.dark_1 },
  tabBtn: {
    width: '33%',
    backgroundColor: colors.app_color,
    height: 40,
    borderRadius: radius.curve,
  },
  tabWrapper: { borderWidth: 1, borderColor: colors.app_color, borderRadius: radius.curve, padding: 5, marginBottom: hp(1) },
  tabText: { color: colors.white, fontSize: fontSize.sm, fontWeight: '500', letterSpacing: 1 }
})