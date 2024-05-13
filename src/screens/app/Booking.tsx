import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native'
import NavHeader from '../../components/NavHeader'
import AppButton from '../../components/ui/AppButton'
import Input from '../../components/ui/Input'
import { categories, places } from '../../constants/data'
import { colors, fontSize, globalStyles } from '../../constants/styles'
import { hp, wp } from '../../helpers/dimens'

const Booking = () => {
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
      console.log(deliveryForm)
    }
  }

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
                    style={{ flex: 1 }}
                    onValueChange={(itemValue) =>
                      setDeliveryForm(prev => ({ ...prev, pickup: itemValue }))
                    }>
                    {places.map(item => (
                      <Picker.Item
                        label={item.label}
                        value={item.value}
                        key={item.value}
                        enabled={item.value !== "0"}
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
                    onValueChange={(itemValue) =>
                      setDeliveryForm(prev => ({ ...prev, delivery: itemValue }))
                    }>
                    {places.map(item => (
                      <Picker.Item
                        label={item.label}
                        value={item.value}
                        key={item.value}
                        enabled={item.value !== "0"}
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
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export default Booking

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
})