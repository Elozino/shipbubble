import { Picker } from '@react-native-picker/picker'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import NavHeader from '../../components/NavHeader'
import AppButton from '../../components/ui/AppButton'
import Input from '../../components/ui/Input'
import { categories, courier, places } from '../../constants/data'
import { colors, fontSize, globalStyles, radius } from '../../constants/styles'
import { hp, wp } from '../../helpers/dimens'
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetFlatList, BottomSheetModal } from "@gorhom/bottom-sheet";
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainNavigatorParams } from '../../types/navigation'
import { Logistics, oderInfoProp } from '../../types'



const Booking = () => {
  const navigation = useNavigation<StackNavigationProp<MainNavigatorParams>>()
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["70%"], []);
  const [deliveryForm, setDeliveryForm] = useState({
    sender: '',
    receiver: '',
    parcel: '',
    category: '',
    item_details: '',
    pickup: '',
    delivery: ''
  })
  const [error, setError] = useState({
    sender: false,
    receiver: false,
    parcel: false,
    category: false,
    item_details: false,
    pickup: false,
    delivery: false
  })

  const handleDeliveryForm = () => {
    if (!deliveryForm.sender
      || !deliveryForm.receiver
      || !deliveryForm.parcel
      || !deliveryForm.item_details
      || !deliveryForm.category
      || !deliveryForm.delivery
      || !deliveryForm.pickup
    ) {
      setError(prev => ({ ...prev, sender: !deliveryForm.sender }))
      setError(prev => ({ ...prev, receiver: !deliveryForm.receiver }))
      setError(prev => ({ ...prev, parcel: !deliveryForm.parcel }))
      setError(prev => ({ ...prev, item_details: !deliveryForm.item_details }))
      setError(prev => ({ ...prev, category: !deliveryForm.category }))
      setError(prev => ({ ...prev, delivery: !deliveryForm.delivery }))
      setError(prev => ({ ...prev, pickup: !deliveryForm.pickup }))
      return alert('Please fill all fields')
    } else {
      handleOpenPress()
    }
  }

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleOpenPress = useCallback(() => {
    sheetRef.current?.expand();
  }, []);

  return (
    <View style={[globalStyles.container]}>
      <NavHeader headerName={"Deliver Parcel"} />
      <View style={[globalStyles.container, { padding: 20, justifyContent: 'space-between', paddingBottom: 0 }]}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View style={styles.formWrapper}>
              <Input style={styles.widthFix}>
                <Input.Text label="Sender name" />
                <Input.Field
                  placeholder="Enter your name"
                  value={deliveryForm.sender}
                  onChangeText={(e) => setDeliveryForm(prev => ({ ...prev, sender: e.trim() }))}
                  onFocus={() => setError(prev => ({ ...prev, sender: false }))}
                  onBlur={() => setError(prev => ({ ...prev, sender: !deliveryForm.sender }))}
                />
                {error.sender && (
                  <Input.Text label="Invalid input" style={globalStyles.errorText} />
                )}
              </Input>
              <Input style={styles.widthFix}>
                <Input.Text label="Receiver name" />
                <Input.Field
                  placeholder="Enter receiver name"
                  value={deliveryForm.receiver}
                  onChangeText={(e) => setDeliveryForm(prev => ({ ...prev, receiver: e.trim() }))}
                  onFocus={() => setError(prev => ({ ...prev, receiver: false }))}
                  onBlur={() => setError(prev => ({ ...prev, receiver: !deliveryForm.receiver }))}
                />
                {error.receiver && (
                  <Input.Text label="Invalid input" style={globalStyles.errorText} />
                )}
              </Input>
              <Input style={styles.widthFix}>
                <Input.Text label="Parcel Weight (in kg)" />
                <Input.Field
                  placeholder='Enter parcel weight'
                  keyboardType='numeric'
                  value={deliveryForm.parcel}
                  onChangeText={(e) => setDeliveryForm(prev => ({ ...prev, parcel: e.trim() }))}
                  onFocus={() => setError(prev => ({ ...prev, parcel: false }))}
                  onBlur={() => setError(prev => ({ ...prev, parcel: !deliveryForm.parcel }))}
                />
                {error.parcel && (
                  <Input.Text label="Invalid input" style={globalStyles.errorText} />
                )}
              </Input>
              <Input style={styles.widthFix}>
                <Input.Text label="Category" />
                <View style={styles.inputField}>
                  <Picker
                    // mode="dropdown"
                    prompt="Select Category"
                    selectionColor={colors.app_color}
                    selectedValue={deliveryForm.category}
                    onFocus={() => setError(prev => ({ ...prev, category: false }))}
                    onBlur={() => setError(prev => ({ ...prev, category: !deliveryForm.category }))}
                    onValueChange={(itemValue, itemIndex) =>
                      setDeliveryForm(prev => ({ ...prev, category: itemValue }))
                    }>
                    {categories.map(item => (
                      <Picker.Item
                        label={item.label}
                        value={item.label}
                        key={item.value}
                      />
                    ))}
                  </Picker>
                </View>
                {error.category && (
                  <Input.Text label="Invalid input" style={globalStyles.errorText} />
                )}
              </Input>
              <Input style={styles.widthFix}>
                <Input.Text label="Item details" />
                <Input.Field
                  placeholder="Enter description of item"
                  value={deliveryForm.item_details}
                  onChangeText={(e) => setDeliveryForm(prev => ({ ...prev, item_details: e.trim() }))}
                  onFocus={() => setError(prev => ({ ...prev, item_details: false }))}
                  onBlur={() => setError(prev => ({ ...prev, item_details: !deliveryForm.item_details }))}
                />
                {error.item_details && (
                  <Input.Text label="Invalid input" style={globalStyles.errorText} />
                )}
              </Input>
              <Input style={styles.widthFix}>
                <Input.Text label="Pickup from" />
                <View style={styles.inputField}>
                  <Picker
                    // mode="dropdown"
                    prompt="Select pickup location"
                    selectionColor={colors.app_color}
                    selectedValue={deliveryForm.pickup}
                    onFocus={() => setError(prev => ({ ...prev, pickup: false }))}
                    onBlur={() => setError(prev => ({ ...prev, pickup: !deliveryForm.pickup }))}
                    style={{ flex: 1 }}
                    onValueChange={(itemValue) =>
                      setDeliveryForm(prev => ({ ...prev, pickup: itemValue }))
                    }>
                    {places.map(item => (
                      <Picker.Item
                        label={item.label}
                        value={item.label}
                        key={item.value}
                      // enabled={item.value !== "0"}
                      />
                    ))}
                  </Picker>
                </View>
                {error.pickup && (
                  <Input.Text label="Invalid input" style={globalStyles.errorText} />
                )}
              </Input>
              <Input style={styles.widthFix}>
                <Input.Text label="Deliver To" />
                <View style={styles.inputField}>
                  <Picker
                    // mode="dropdown"
                    prompt="Select delivery location"
                    selectionColor={colors.app_color}
                    selectedValue={deliveryForm.delivery}
                    onFocus={() => setError(prev => ({ ...prev, delivery: false }))}
                    onBlur={() => setError(prev => ({ ...prev, delivery: !deliveryForm.delivery }))}
                    onValueChange={(itemValue) =>
                      setDeliveryForm(prev => ({ ...prev, delivery: itemValue }))
                    }>
                    {places.map(item => (
                      <Picker.Item
                        label={item.label}
                        value={item.label}
                        key={item.value}
                      // enabled={item.value !== "0"}
                      />
                    ))}
                  </Picker>
                </View>
                {error.delivery && (
                  <Input.Text label="Invalid input" style={globalStyles.errorText} />
                )}
              </Input>
              <AppButton
                title={"Proceed"}
                btnStyle={{ ...styles.widthFix }}
                onPress={handleDeliveryForm}
              // onPress={handleOpenPress}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={CustomBackDrop1}
      >
        <BottomSheetFlatList
          data={courier as Logistics[]}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }: { item: Logistics }) =>
            <LogisticsCard
              item={item}
              deliveryForm={deliveryForm}
              handleClosePress={handleClosePress}
            />}
          contentContainerStyle={styles.contentContainer}
          ListFooterComponent={<AppButton
            title="Proceed"
            onPress={() => {
              navigation.navigate('Booking')
              handleClosePress()
            }}
            btnStyle={{ marginHorizontal: 'auto', width: wp(90), marginTop: hp(1.2) }}
          />}
        />
      </BottomSheet>
    </View>
  );
};

export default Booking

const CustomBackDrop = ({
  animatedIndex,
  style,
}: BottomSheetBackdropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => {
    let opacity = interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 1],
      Extrapolation.CLAMP
    )
    return {
      opacity
    };
  });

  const containerStyle = [StyleSheet.absoluteFill, style, styles.overlay, containerAnimatedStyle];

  return (
    <Animated.View style={containerStyle}>
      <BlurView
        style={StyleSheet.absoluteFill}
        tint="dark"
        intensity={15}
        experimentalBlurMethod={"dimezisBlurView"}
      />
    </Animated.View>
  );
}

const CustomBackDrop1 = (props: BottomSheetBackdropProps) => {
  return (
    <BottomSheetBackdrop
      {...props}
      pressBehavior="none"
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      enableTouchThrough={false}
      opacity={0.4}
    />
  );
};

const LogisticsCard = ({ item, handleClosePress, deliveryForm }: {
  item: Logistics;
  handleClosePress: () => void;
  deliveryForm: oderInfoProp;
}) => {
  const navigation = useNavigation<StackNavigationProp<MainNavigatorParams>>()
  const rating = item?.tracking?.bars
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('BookingDetails', {
          logistics: item,
          orderInfo: deliveryForm,
        })
        handleClosePress()
      }}
      style={styles.itemContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: wp(3) }}>
        <Image
          source={{ uri: item?.courier_image }}
          resizeMode='cover'
          style={styles.images}
        />
        <View>
          <Text style={styles.courierName}>{item?.courier_name}</Text>
          <Text style={styles.courierType}>{item?.service_type}</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.trackingText, { color: colors.app_color }]}>{item?.currency} {item?.total}</Text>
        <Text style={styles.trackingText}>Tracking</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: wp(1) }}>
          {Array(5).fill(rating).map((_, i) => {
            const isFilled = ++i > Math.ceil(rating);
            const color = isFilled ? colors.dark_1 : colors.app_color;
            return (
              <AntDesign
                name="star"
                size={10}
                key={i}
                color={color}
              />
            );
          })}
        </View>
      </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  widthFix: {
    width: wp(100) - 40
  },
  formWrapper: {
    gap: hp(2),
  },
  inputField: {
    borderWidth: 1,
    borderColor: colors.gray_1,
    borderRadius: 4,
    fontSize: fontSize.md,
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 15,
    gap: hp(2),
  },
  images: {
    width: wp(12),
    height: wp(12),
    borderRadius: radius.lg
  },
  itemContainer: {
    padding: 10,
    backgroundColor: colors.white,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  courierName: {
    fontSize: fontSize.sm,
    fontWeight: '500',
    color: colors.dark_1,
  },
  courierType: {
    fontSize: fontSize.xs,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: colors.dark_1,
  },
  trackingText: {
    fontSize: fontSize.xs,
    color: colors.dark_1,
    marginBottom: 5,
    fontWeight: '500',
  }
})