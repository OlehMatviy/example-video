import React, { BaseSyntheticEvent, FC } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { paddingR, cl } from "@app/styles";
import inputStyle from "@app/components/forms/Inputs/input.style";
import { checkLength } from "@app/utilis";
import { SvgIcon } from "@app/components";

type Props = {
  onSearch: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  onClear?: () => void;
};

const SearchInput: FC<Props> = ({ onSearch, placeholder, onChange, value, onClear }) => {
  return (
    <View style={cl.w100}>
      <TextInput
        style={[inputStyle.input, cl.w100, paddingR(48)]}
        onChangeText={(_value) => {
          onChange(_value);
          if (onClear && value) {
            onClear();
          }
        }}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#a8aaac"
        autoCapitalize="none"
        blurOnSubmit
        onSubmitEditing={onSearch}
      />

      {onClear && checkLength(value) && (
        <TouchableOpacity style={inputStyle.closeIcon} onPress={onClear}>
          <SvgIcon icon="closeIcon" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
