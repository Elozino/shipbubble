import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import AppButton from '../../components/ui/AppButton'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainNavigatorParams } from '../../types/navigation'
import HistoryCard from '../../components/HistoryCard'
import { colors, globalStyles, radius } from '../../constants/styles'
import { hp, wp } from '../../helpers/dimens'
import { MaterialIcons } from '@expo/vector-icons';
import { useAppContext } from '../../context/AppContext'
import { orders } from '../../constants/data'
import { HistoryCardProps, orderProps } from '../../types'

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<MainNavigatorParams>>();
  const { setIsLoggedIn, isLoggedIn, userCredentials } = useAppContext();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Logout", onPress: () => setIsLoggedIn(!isLoggedIn) },
    ]);
  };

  const ongoingOrders = orders.filter((item) => item.status !== "completed");
  const completedOrders = orders.filter((item) => item.status === "completed");

  return (
    <View style={globalStyles.container}>
      <View style={styles.headerWrapperContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Welcome,</Text>
          <Text style={styles.headerSubText}>{userCredentials?.username}</Text>
        </View>
        <Pressable style={styles.headerWrapper} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color={colors.dark_1} />
        </Pressable>
      </View>
      <View style={[{ paddingHorizontal: 20, marginBottom: 10 }]}>
        <Text style={[styles.headerText, { color: colors.app_color }]}>
          Order Stats
        </Text>
      </View>
      <View style={styles.statWrapper}>
        <StatCard total={orders?.length ?? 0} type={"Total"} />
        <StatCard total={ongoingOrders?.length ?? 0} type={"Ongoing"} />
        <StatCard total={completedOrders?.length ?? 0} type={"Completed"} />
      </View>
      <View style={styles.booking}>
        <AppButton title={'Book now'}
          onPress={() => navigation.navigate('Booking')}
        />
      </View>
      <FlatList
        data={orders.slice(0, 5) as orderProps[]}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 15, padding: 20, paddingTop: 0 }}
        initialNumToRender={50}
        maxToRenderPerBatch={100}
        renderItem={({ item }: HistoryCardProps) => <HistoryCard item={item} />}
        ListHeaderComponent={<ListHeader navigation={navigation} />}
        ListFooterComponent={
          <AppButton
            title="See More"
            onPress={() => navigation.navigate("History")}
            btnStyle={styles.btn}
          />
        }
      />
    </View>
  );
};

export default Home

const styles = StyleSheet.create({
  headerWrapperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerWrapper: {
    padding: 20,
  },
  headerText: {
    fontSize: hp(2),
    fontWeight: '500',
    color: colors.dark_1,
  },
  headerSubText: {
    fontSize: hp(3),
    fontWeight: '500',
    color: colors.dark_1,
  },
  statWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  stat: {
    width: '33%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: radius.sm,
  },
  statText: {
    fontSize: 32,
    fontWeight: '500',
    color: colors.dark_1,
  },
  statSubText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.dark_1,
  },
  booking: {
    marginHorizontal: 'auto',
    marginVertical: 30,
  },
  btn: {
    width: '100%',
    marginHorizontal: 'auto',
    marginTop: hp(2)
  }
})

type StatsProps = {
  total: number;
  type: string;
}

const StatCard = ({ total, type }: StatsProps) => {
  return (
    <View style={styles.stat}>
      <Text style={styles.statText}>{total}</Text>
      <Text style={styles.statSubText}>{type}</Text>
    </View>
  )
}

const ListHeader = ({ navigation }: { navigation: StackNavigationProp<MainNavigatorParams> }) => {
  return (
    <View style={globalStyles.flexRowBtw}>
      <Text style={[styles.headerText]}>All orders</Text>
      <Pressable onPress={() => navigation.navigate("History")}>
        <Text style={[styles.statSubText, { color: colors.app_color }]}>
          See More
        </Text>
      </Pressable>
    </View>
  );
};
