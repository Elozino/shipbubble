import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { colors, globalStyles } from '../constants/styles';
import { wp } from '../helpers/dimens';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


type Props = {
  headerName: string;
  icon?: JSX.Element;
}
const NavHeader = ({
  headerName,
  icon,
}: Props) => {
  const navigation = useNavigation()
  return (
    <View style={[globalStyles.flexRowBtw, styles.wrapper]}>
      <View style={[globalStyles.flexRow]}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={[globalStyles.iconWrapper]}
        >
          <FontAwesome name="angle-left" size={30} color={colors.dark_1} />
        </Pressable>
        <Text style={[globalStyles.title]}>{headerName}</Text>
      </View>
        {icon}
    </View>
  )
}

export default NavHeader

const styles = StyleSheet.create({
  wrapper: {
    gap: wp(2)
  }
})