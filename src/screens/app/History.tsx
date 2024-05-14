import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import HistoryCard from '../../components/HistoryCard';
import NavHeader from '../../components/NavHeader';
import { tabList } from '../../constants/data';
import { colors, fontSize, globalStyles, radius } from '../../constants/styles';
import { useAppContext } from '../../context/AppContext';
import { hp, wp } from '../../helpers/dimens';
import { orderListProp, orderStatus } from '../../types';
import { MainNavigatorParams } from '../../types/navigation';


const History = () => {
  const navigation = useNavigation<StackNavigationProp<MainNavigatorParams>>()
  const [activeTab, setActiveTab] = useState('All')
  const { ordersList: allOrders } = useAppContext();
  const [ordersList, setOrdersList] = useState<orderListProp[]>(allOrders)

  const handleFilter = useCallback((status: orderStatus) => {
    if (status.toLowerCase() === 'All'.toLowerCase()) {
      setOrdersList(allOrders);
    } else {
      const filter = ordersList.filter((item: orderListProp) => item?.status.toLowerCase() !== status.toLowerCase());
      setOrdersList(filter);
    }
  }, []);

  return (
    <View style={[globalStyles.container]}>
      <NavHeader headerName="Delivery History"
      // icon={
      //   <Pressable style={[globalStyles.iconWrapper, globalStyles.allCenter, { marginRight: 10 }]}>
      //     <Octicons name="search" size={24} color="black"
      //     />
      //   </Pressable>
      // }
      />
      <View style={{ padding: wp(3) }}>
        <View style={[globalStyles.flexRowBtw, styles.tabWrapper]}>
          {
            tabList.map(item => (
              <Pressable
                key={item}
                style={[globalStyles.allCenter, styles.tabBtn, { backgroundColor: activeTab === item ? colors.app_color : 'transparent' }]}
                onPress={() => {
                  setActiveTab(item)
                  handleFilter(item as orderStatus)
                }}
              >
                <Text style={[styles.tabText, { color: activeTab === item ? colors.white : colors.dark_1 }]}>{item}</Text>
              </Pressable>
            ))
          }
        </View>
        <FlatList
          data={ordersList as orderListProp[]}
          keyExtractor={(_item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 15, paddingBottom: 20 }}
          initialNumToRender={50}
          maxToRenderPerBatch={100}
          renderItem={({ item }: { item: orderListProp }) =>
            <HistoryCard item={item}
              navigation={navigation}
            />}
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
    height: 40,
    borderRadius: radius.curve,
  },
  tabWrapper: { borderWidth: 1, borderColor: colors.app_color, borderRadius: radius.curve, padding: 5, marginBottom: hp(1) },
  tabText: { color: colors.white, fontSize: fontSize.sm, fontWeight: '500', letterSpacing: 1 }
})