import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavHeader from '../../components/NavHeader'
import { colors, fontSize, globalStyles } from '../../constants/styles'
import { truncateText } from '../../helpers'
import { MainNavigatorParams } from '../../types/navigation'

const HistoryDetails = () => {
  const { params } =
    useRoute<RouteProp<MainNavigatorParams, "HistoryDetails">>();
  const item = params.item;

  return (
    <View style={globalStyles.container}>
      <NavHeader headerName="History Details" />
      <View style={{ paddingHorizontal: 20, gap: 10 }}>
        <View style={{ marginTop: 15 }}>
          <View>
            <Text style={styles.textHeader}>Order summary</Text>
          </View>
          <FlexText title={"Sender"} content={item?.orderInfo?.sender} />
          <FlexText title={"Receiver"} content={item?.orderInfo?.receiver} />
          <FlexText title={"Category"} content={item?.orderInfo?.category} />
          <FlexText
            title={"Item details"}
            content={item?.orderInfo?.item_details}
          />
          <FlexText title={"Parcel"} content={item?.orderInfo?.parcel} />
          <FlexText
            title={"Pickup address"}
            content={item?.orderInfo?.pickup}
          />
          <FlexText
            title={"Delivery address"}
            content={item?.orderInfo?.delivery}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.textHeader}>Logistics summary</Text>
          <FlexText
            title={"Provider"}
            content={item?.logistics?.courier_name}
          />
          <FlexText
            title={"Provider Id"}
            content={item?.logistics?.courier_id}
          />
          <FlexText
            title={"ETA for delivery"}
            content={item?.logistics?.pickup_eta}
          />
          <FlexText
            title={"Pickup Station"}
            content={item?.logistics?.pickup_station?.address}
          />
          <FlexText
            title={"Price"}
            content={item?.logistics?.rate_card_amount}
          />
          <FlexText title={"Vat"} content={item?.logistics?.vat} />
          <FlexText
            title={"Tracking"}
            content={item?.logistics?.tracking?.label}
          />
        </View>

        <View style={styles.textFlewRow}>
          <Text
            style={[
              styles.text1,
              {
                color: colors.dark_1,
                fontSize: fontSize.lg,
                fontWeight: "600",
              },
            ]}
          >
            Total
          </Text>
          <Text
            style={[
              styles.text2,
              {
                color: colors.app_color,
                fontSize: fontSize.lg,
                fontWeight: "600",
              },
            ]}
          >
            {truncateText(item?.logistics?.total as unknown as string)}
          </Text>
        </View>
        <View style={styles.textFlewRow}>
          <Text
            style={[
              styles.text1,
              {
                color: colors.app_color,
                fontSize: fontSize.lg,
                fontWeight: "600",
              },
            ]}
          >
            Status
          </Text>
          <Text
            style={[
              styles.text2,
              {
                color:
                  item?.status === "completed"
                    ? colors.green_1
                    : colors.yellow_1,
                fontSize: fontSize.lg,
                fontWeight: "600",
              },
            ]}
          >
            {item?.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryDetails


const styles = StyleSheet.create({
  textHeader: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    color: colors.dark_1,
    marginBottom: 5,
  },
  textFlewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
  },
  text1: {
    color: colors.dark_1,
    fontWeight: '500',
  },
  text2: {
    color: colors.dark_1,
    textTransform: 'capitalize'
  },
})

const FlexText = ({ title, content }: {
  title: string;
  content: string | unknown;
}) => {
  return (
    <View style={styles.textFlewRow}>
      <Text style={styles.text1}>{title}</Text>
      <Text style={styles.text2}>{truncateText(content as unknown as string)}</Text>
    </View>
  )
}
