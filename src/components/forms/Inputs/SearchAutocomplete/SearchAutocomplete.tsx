import React from "react";
import { View, TextInput, TouchableOpacity, ViewStyle, Keyboard, TextStyle } from "react-native";
import { BallIndicator } from "react-native-indicators";

import inputStyle from "@app/components/forms/Inputs/input.style";
import { colors, marginX, marginR, cl, paddingR } from "@app/styles";
import { SvgIcon } from "@app/components";
import { checkLength } from "@app/utilis";
import { CL_BLUE } from "@app/styles/colors";
import { navigationRef } from "@app/routes/RootNavigation";
import { useActions } from "@app/hooks";
import { scale } from "react-native-size-matters";

interface AutocompleteProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  isLoading: boolean;
}

const SearchAutocomplete: React.FC<AutocompleteProps> = ({
  placeholder,
  onChange,
  value,
  onClear,
  isLoading,
}) => {
  const { setHideTabBar } = useActions();
  const defineInputStyle = (text: string): ViewStyle => {
    return { borderColor: text ? CL_BLUE : colors.CL_GRAY_EF };
  };

  const handleReturn = () => {
    Keyboard.dismiss();
    setHideTabBar(false);
  };

  const fontInput = (): TextStyle => {
    return value?.length ? cl.fontFamilySemiBold : cl.fontFamilyRegular;
  };

  return (
    <View style={cl.w100}>
      <View style={[cl.flexRow, marginX(18)]}>
        <TextInput
          style={[
            inputStyle.input,
            paddingR(45),
            defineInputStyle(value),
            cl.flex1,
            marginR(10),
            fontInput(),
          ]}
          placeholderTextColor={colors.CL_GRAY_A1}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          keyboardType="default"
          returnKeyType="done"
          blurOnSubmit={false}
          onTouchStart={() => setHideTabBar(true)}
          onFocus={() => setHideTabBar(true)}
          onBlur={() => setHideTabBar(false)}
          onEndEditing={() => setHideTabBar(false)}
          onSubmitEditing={handleReturn}
        />
        {onClear && checkLength(value) && !isLoading && (
          <TouchableOpacity style={inputStyle.closeIcon} onPress={onClear}>
            <SvgIcon icon="closeIcon" />
          </TouchableOpacity>
        )}
        {isLoading && (
          <View style={inputStyle.closeIcon}>
            <BallIndicator color={CL_BLUE} size={scale(23)} />
          </View>
        )}
        <TouchableOpacity onPress={() => navigationRef.navigate("BarCodeScreen" as never)}>
          <SvgIcon icon="barCode" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchAutocomplete;
