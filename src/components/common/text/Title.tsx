import React, { FC } from "react";
import { View, Text, TextStyle, ColorValue, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";
import { cl } from "@app/styles";
import { getFontFamily, getFontSize } from "@app/utilis";

type Props = {
  text: string;
  size: number;
  style?: TextStyle;
  color?: { color: ColorValue };
  fontStyle?: TextStyle;
  lineHeightSize?: number;
  fontType?: "regular" | "tilt" | "bold";
  styleContainer?: ViewStyle[] | ViewStyle | TextStyle | TextStyle[];
};

const Title: FC<Props> = ({
  text,
  styleContainer,
  style,
  size,
  color,
  fontType,
  fontStyle,
  lineHeightSize,
}) => {
  return (
    <View style={styleContainer}>
      <Text
        style={[
          getFontFamily(fontType || "tilt"),
          { lineHeight: scale(30) },
          getFontSize(size),
          color || cl.cl_black,
          fontStyle || null,
          lineHeightSize ? { lineHeight: scale(lineHeightSize) } : null,
          style,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Title;
