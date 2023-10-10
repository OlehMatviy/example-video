import React, { FC, ReactNode } from "react";
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { scale } from "react-native-size-matters";
import { BallIndicator } from "react-native-indicators";

import { IBaseBtnProps } from "@app/core/types";
import { colors, marginL, paddingY } from "@app/styles";
import { solidButton } from "@app/components/common/buttons/button.style";
import { CL_WHITE } from "@app/styles/colors";

interface Props extends IBaseBtnProps {
  colorText?: TextStyle;
  btnStyles?: ViewStyle;
  loaderStyles?: TextStyle;
  isLoading?: boolean;
  showBoth?: boolean;
  children?: ReactNode;
}

const SolidButton: FC<Props> = ({
  text,
  onPress,
  styles,
  isDisabled,
  colorText,
  btnStyles,
  loaderStyles,
  isLoading,
  showBoth,
  children,
  styleText,
}: Props) => {
  const defineBg = () => {
    return { backgroundColor: isDisabled || isLoading ? colors.CL_DANGER_DIS : colors.CL_DANGER };
  };

  return (
    <TouchableOpacity
      disabled={isDisabled || isLoading}
      style={[solidButton.btn, defineBg(), styles, btnStyles]}
      onPress={onPress}
    >
      {isLoading && (
        <View style={[paddingY(14), marginL(showBoth ? 15 : 0), loaderStyles]}>
          <BallIndicator color={CL_WHITE} size={scale(23)} />
        </View>
      )}
      {children && children}
      {(!isLoading || showBoth) && (
        <Text style={[solidButton.text, styleText || null, colorText || null]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default SolidButton;
