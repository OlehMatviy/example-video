import React, { FC } from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { cl } from "@app/styles";

type Props = {
  text: string;
  onPress: () => void;
  styles?: ViewStyle;
  textStyles?: TextStyle;
  colorText?: TextStyle;
};
const FlatButton: FC<Props> = ({ text, onPress, styles, textStyles, colorText }) => {
  return (
    <TouchableOpacity style={styles || {}} onPress={onPress}>
      <Text style={[cl.fontFamilySemiBold, colorText || cl.cl_primary, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FlatButton;
