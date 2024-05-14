import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { colors, fontSize, globalStyles, radius } from '../../constants/styles'
import NavHeader from '../../components/NavHeader'
import { Logistics } from '../../types/index';
import { BookingDetailsProps, MainNavigatorParams } from '../../types/navigation'
import { truncateText } from '../../helpers'
import AppButton from '../../components/ui/AppButton'
import { FontAwesome5 } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { StackNavigationProp } from '@react-navigation/stack'

const BookingDetails = () => {
  const { params } = useRoute<RouteProp<MainNavigatorParams>>()
  const { orderInfo, logistics } = params as BookingDetailsProps;
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalVisible(true)
    }, 2000);
  }


  const closeModal = () => {
    setIsModalVisible(false)
  }

  return (
    <View style={globalStyles.container}>
      <NavHeader
        headerName='Summary'
      />
      <SuccessModal
        closeModal={closeModal}
        isVisible={isModalVisible}
      />
      <View style={{ paddingHorizontal: 20, gap: 10 }}>
        <View style={{ marginTop: 15 }}>
          <View>
            <Text style={styles.textHeader}>Order summary</Text>
          </View>
          <FlexText title={'Sender'} content={orderInfo?.sender} />
          <FlexText title={'Receiver'} content={orderInfo?.receiver} />
          <FlexText title={'Category'} content={orderInfo?.category} />
          <FlexText title={'Item details'} content={orderInfo?.item_details} />
          <FlexText title={'Parcel'} content={orderInfo?.parcel} />
          <FlexText title={'Pickup address'} content={orderInfo?.pickup} />
          <FlexText title={'Delivery address'} content={orderInfo?.delivery} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.textHeader}>Logistics summary</Text>
          <FlexText title={'Provider'} content={logistics?.courier_name} />
          <FlexText title={'Provider Id'} content={logistics?.courier_id} />
          <FlexText title={'ETA for delivery'} content={logistics?.pickup_eta} />
          <FlexText title={'Pickup Station'} content={logistics?.pickup_station?.address} />
          <FlexText title={'Price'} content={logistics?.rate_card_amount} />
          <FlexText title={'Vat'} content={logistics?.vat} />
          <FlexText title={'Tracking'} content={logistics?.tracking?.label} />
        </View>

        <View style={styles.textFlewRow}>
          <Text style={[styles.text1, { color: colors.app_color, fontSize: fontSize.lg, fontWeight: '600' }]}>Total</Text>
          <Text style={[styles.text2, { color: colors.app_color, fontSize: fontSize.lg, fontWeight: '600' }]}>{truncateText(logistics?.total as unknown as string)}</Text>
        </View>
        <AppButton
          title="Book now"
          btnStyle={{ marginHorizontal: 'auto', marginTop: 20 }}
          onPress={handleSubmit}
          loading={isLoading}
          disabled={isLoading}
        />
      </View>
    </View>
  )
}

export default BookingDetails

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

const SuccessModal = ({
  isVisible,
  closeModal
}: {
  closeModal: () => void;
  isVisible: boolean;
}) => {
  const navigation = useNavigation<StackNavigationProp<MainNavigatorParams>>()
  return (
    <Modal
      animationType='slide'
      visible={isVisible}
      transparent={true}
    >
      <View style={[globalStyles.allCenter, globalStyles.container, { gap: 30 }]}>
        <FontAwesome5 name="check-circle" size={100} color={colors.app_color} />
        <Text style={[styles.textHeader]}>Order has been laced</Text>
        <AppButton
          title="Go Home"
          onPress={() => {
            closeModal()
            navigation.navigate('Home')
          }}
        />
      </View>
    </Modal>
  )
}