import React, { FC } from "react";
import { View } from "react-native";
import { ValueType } from "react-native-dropdown-picker";
import { marginB, marginT, cl } from "@app/styles";
import { Paragraph } from "@app/components";
import { IDropdownProp } from "@app/core/types";
import ModalDropdown from "@app/components/forms/dropdowns/ModalDropdown";

type Props = {
  label: string;
  value: ValueType;
  onChange: () => void;
  isInvalid: boolean;
  placeholder: string;
  dropdownOptions: IDropdownProp[];
};

const ProfileDropdownContent: FC<Props> = ({
  label,
  value,
  isInvalid,
  placeholder,
  onChange,
  dropdownOptions,
}) => {
  return (
    <View style={[cl.flexRowBetween, cl.flexAlignCenter, marginB(20), marginT(10)]}>
      <Paragraph text={label} size={14} color={{ color: "#3b3d3e" }} />
      <ModalDropdown
        options={dropdownOptions}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        isInvalid={isInvalid}
      />
    </View>
  );
};

export default ProfileDropdownContent;
