import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../constants/styles'
import Input from '../../components/ui/Input'
import { hp, wp } from '../../helpers/dimens'
import NavHeader from '../../components/NavHeader'
import AppButton from '../../components/ui/AppButton'

const Booking = () => {
  return (
    <View style={[globalStyles.container]}>
      <NavHeader headerName={"Deliver Parcel"} />
      <View style={[globalStyles.container, { padding: 20, justifyContent: 'space-between' }]}>
        <View style={styles.formWrapper}>
          <Input style={styles.widthFix}>
            <Input.Text label="Sender name" />
            <Input.Field placeholder="Ok" />
          </Input>
          <Input style={styles.widthFix}>
            <Input.Text label="Receiver name" />
            <Input.Field placeholder="Ok" />
          </Input>
          <Input style={styles.widthFix}>
            <Input.Text label="Item details" />
            <Input.Field placeholder="Ok" />
          </Input>
          <Input style={styles.widthFix}>
            <Input.Text label="Pickup from" />
            <Input.Field placeholder="Ok" />
          </Input>
          <Input style={styles.widthFix}>
            <Input.Text label="Deliver to" />
            <Input.Field placeholder="Ok" />
          </Input>
        </View>
        <AppButton
          title={"Proceed"}
          btnStyle={{ ...styles.widthFix }}
        />
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
})