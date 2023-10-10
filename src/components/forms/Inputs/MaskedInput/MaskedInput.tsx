import React, { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { View, TextStyle, Keyboard, Text, ViewStyle, TouchableOpacity } from "react-native";
import MaskInput, { Mask } from "react-native-mask-input";

import { FlatButton, Paragraph, SvgIcon } from "@app/components";
import { marginB, paddingB, cl, colors, marginT } from "@app/styles";
import inputStyle from "@app/components/forms/Inputs/input.style";
import { checkLength } from "@app/utilis";
import { CL_BLUE, CL_GRAY_A1 } from "@app/styles/colors";

type Props = {
  field: string;
  placeholder: string;
  label: string;
  onLink?: () => void;
  linkText?: string;
  customStyles?: TextStyle;
  onReturn?: () => void;
  colorLabel?: string;
  isSecure?: boolean;
  mask: Mask;
};

const MaskedInput: FC<Props> = ({
  field,
  placeholder,
  label = "",
  linkText,
  onLink,
  mask,
  customStyles,
  onReturn,
  colorLabel,
  isSecure = false,
}) => {
  const methods = useFormContext();
  const [securePassword, setSecurePassword] = useState<boolean>(isSecure);

  const defineInputStyle = (text: string): ViewStyle => {
    return { borderColor: text ? CL_BLUE : colors.CL_GRAY_EF };
  };

  const handleReturn = () => {
    Keyboard.dismiss();
    if (onReturn) {
      onReturn();
    }
  };

  const defineColorLabel = (): string => {
    return colorLabel || colors.CL_BLACK;
  };

  const alignTextError = (value: string): ViewStyle => {
    return { alignItems: value.length > 30 ? "center" : "flex-end" };
  };

  return (
    <View style={[paddingB(20), customStyles || {}]}>
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
          {linkText !== undefined && onLink !== undefined && (
            <FlatButton text={linkText} onPress={onLink} />
          )}
        </View>
      )}
      <Controller
        control={methods.control}
        name={field}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { invalid } }) => (
          <MaskInput
            style={[
              inputStyle.input,
              defineInputStyle(value),
              invalid ? inputStyle.inputError : {},
            ]}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            autoCapitalize="none"
            blurOnSubmit={false}
            mask={mask}
            placeholderTextColor={CL_GRAY_A1}
            onSubmitEditing={handleReturn}
            keyboardType="default"
            returnKeyType="done"
          />
        )}
      />
      {isSecure && (
        <View style={inputStyle.inpurContainer}>
          <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
            {!securePassword ? <SvgIcon icon="closeEyes" /> : <SvgIcon icon="openEyes" />}
          </TouchableOpacity>
        </View>
      )}
      {methods.formState.errors[field] && (
        <View
          style={[
            cl.flexRow,
            marginT(20),
            alignTextError(String(methods.formState.errors[field]?.message || "")),
          ]}
        >
          <View style={inputStyle.errorIcon}>
            <SvgIcon icon="alert" />
          </View>
          <Text style={inputStyle.errorText}>
            {String(methods.formState.errors[field]?.message || "")}
          </Text>
        </View>
      )}
    </View>
  );
};
export default MaskedInput;
