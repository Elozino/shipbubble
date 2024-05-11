import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { colors, fontSize, globalStyles, radius } from '../../constants/styles';
import { hp, wp } from '../../helpers/dimens';

const Card = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) => {
  return <Pressable style={[styles.card, style]}>{children}</Pressable>;
};

Card.displayName = 'Card';

Card.Icon = ({ children }: { children: ReactNode }) => {
  return <View style={styles.icon}>{children}</View>;
};

Card.displayName = 'Icon';

Card.Text = ({ text, style }: { text: string; style?: TextStyle }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

Card.displayName = 'Text';

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: radius.small,
    elevation: 3,
    paddingHorizontal: wp(2),
    paddingVertical: wp(4),
    ...globalStyles.flexRowBtw,
    gap: wp(2),
  },
  icon: {
    // Add styles for the icon container if needed
  },
  text: {
    color: colors.app_color,
    fontSize: fontSize.sm,
    // Add styles for the text component if needed
  },
});
