import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { colors, globalStyles } from '../constants/styles';
import { wp } from '../helpers/dimens';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


type Props = {
  headerName: string;
}
const NavHeader = ({
  headerName,
}: Props) => {
  const navigation = useNavigation()
  return (
    <View style={[globalStyles.flexRow, styles.wrapper]}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={[globalStyles.iconWrapper]}
      >
        <FontAwesome name="angle-left" size={30} color={colors.dark_1} />
      </Pressable>
      <Text style={[globalStyles.title]}>{headerName}</Text>
    </View>
  )
}

export default NavHeader

const styles = StyleSheet.create({
  wrapper: {
    gap: wp(2)
  }
})