import React, { FC, ReactNode } from "react";
import { View, Text, ColorValue, TextStyle, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";
import { cutText, getFontFamily, getFontSize } from "@app/utilis";
import { cl } from "@app/styles";

type Props = {
  text: string;
  size: number;
  fontType?: "regular" | "tilt" | "bold";
  color?: { color: ColorValue };
  styles?: TextStyle;
  wrapperStyles?: ViewStyle | ViewStyle[];
  fontStyle?: TextStyle;
  lineHeightSize?: number;
  cutTextNUmber?: number;
  children?: ReactNode;
};

const Paragraph: FC<Props> = ({
  text,
  fontType,
  size,
  color,
  styles,
  fontStyle,
  lineHeightSize,
  cutTextNUmber = 0,
  wrapperStyles,
  children,
}) => {
  return (
    <View style={wrapperStyles}>
      <Text
        style={[
          getFontFamily(fontType || "regular"),
          getFontSize(size),
          { lineHeight: scale(20) },
          color || cl.cl_black,
          fontStyle || null,
          lineHeightSize ? { lineHeight: scale(lineHeightSize) } : null,
          styles,
        ]}
      >
        {cutTextNUmber ? cutText(text, cutTextNUmber) : text}
        {children && children}
      </Text>
    </View>
  );
};

export default Paragraph;
