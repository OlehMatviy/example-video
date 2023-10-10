import React, { FC, useState } from "react";
import { View, TextInput, Keyboard, ViewStyle } from "react-native";
import { cl, colors, marginB, paddingB } from "@app/styles";
import { Paragraph } from "@app/components";
import { checkLength } from "@app/utilis";
import inputStyle from "@app/components/forms/Inputs/input.style";
import { CL_DANGER } from "@app/styles/colors";

type Props = {
  onChange: (value?: any) => void;
  value: string | undefined;
  placeholder: string;
  label?: string;
  isInvalid?: boolean;
  numberOfLines?: number;
  customStyles?: ViewStyle;
  colorLabel?: string;
  editable?: boolean;
  multyStyle?: boolean;
  textAlignVertical?: "auto" | "top" | "bottom" | "center" | undefined;
  inputCustom?: ViewStyle;
};

const TextArea: FC<Props> = ({
  onChange,
  value,
  placeholder,
  label = "",
  isInvalid,
  numberOfLines,
  customStyles,
  colorLabel,
  editable = true,
  multyStyle,
  textAlignVertical,
  inputCustom,
}) => {
  const [contentSize, setContentSize] = useState<number>(0);
  const defineColorLabel = (): string => {
    return colorLabel || colors.CL_BLACK;
  };

  const defineColorBorder = (): ViewStyle => {
    return { borderColor: isInvalid ? CL_DANGER : "#EEEEEE" };
  };

  return (
    <View style={[paddingB(20), cl.w100, customStyles || {}]}>
      {checkLength(label) && (
        <View style={[cl.flexRowBetween, marginB(2)]}>
          <Paragraph
            size={14}
            text={label}
            color={{
              color: defineColorLabel(),
            }}
            fontType="bold"
          />
        </View>
      )}
      <TextInput
        style={[
          inputStyle.input,
          isInvalid ? inputStyle.inputError : {},
          inputStyle.multiLine,
          multyStyle ? { height: Math.max(35, contentSize) } : {},
          inputCustom,
        ]}
        onContentSizeChange={(event) => {
          setContentSize(event.nativeEvent.contentSize.height);
        }}
        underlineColorAndroid="transparent"
        onChangeText={onChange}
        value={value}
        editable={editable}
        placeholder={placeholder}
        autoCapitalize="none"
        keyboardType="default"
        returnKeyType="done"
        blurOnSubmit={false}
        multiline
        onSubmitEditing={Keyboard.dismiss}
        textAlignVertical={textAlignVertical}
        numberOfLines={numberOfLines}
        placeholderTextColor={colors.CL_GRAY_A1}
      />
      <View style={[inputStyle.bottomBorder, defineColorBorder()]} />
    </View>
  );
};
export default TextArea;
