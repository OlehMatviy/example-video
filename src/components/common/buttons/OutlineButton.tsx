import React, { FC, ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

import { outlineButton } from "@app/components/common/buttons/button.style";
import { IBaseBtnProps } from "@app/core/types";

interface Props extends IBaseBtnProps {
  children?: ReactNode;
}

const OutlineButton: FC<Props> = ({
  text,
  onPress,
  styles,
  isDisabled,
  styleText,
}: IBaseBtnProps) => {
  return (
    <TouchableOpacity disabled={isDisabled} style={[outlineButton.btn, styles]} onPress={onPress}>
      <Text style={[outlineButton.text, styleText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
