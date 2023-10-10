import React, { FC, useCallback, useState } from "react";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";

import { IDropdownProp } from "@app/core/types";
import { useFocusEffect } from "@react-navigation/native";
import { SvgIcon } from "@app/components";
import modalDropdown from "@app/components/forms/dropdowns/modalDropdown.style";
import inputStyle from "../Inputs/input.style";

type Props = {
  options: IDropdownProp[];
  onChange: () => void;
  value: ValueType;
  placeholder: string;
  isInvalid: boolean;
};

const ModalDropdown: FC<Props> = ({ options, onChange, placeholder, isInvalid, value }) => {
  const [open, setOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState<ValueType | null>(+value);
  const [items, setItems] = useState<IDropdownProp[]>(options);

  const ArrowDownIconComponent = useCallback(() => <SvgIcon icon="transparentBGArrow" />, []);
  const ArrowUpIconComponent = useCallback(() => <SvgIcon icon="transparentBGArrow90" />, []);

  useFocusEffect(
    useCallback(() => {
      setDropDownValue(value);
    }, [value]),
  );

  return (
    <DropDownPicker
      onChangeValue={onChange}
      placeholder={placeholder}
      open={open}
      value={dropDownValue || value}
      items={items}
      setOpen={setOpen}
      setValue={setDropDownValue}
      setItems={setItems}
      listMode="SCROLLVIEW"
      containerStyle={modalDropdown.containerStyle}
      ArrowDownIconComponent={ArrowDownIconComponent}
      ArrowUpIconComponent={ArrowUpIconComponent}
      dropDownContainerStyle={modalDropdown.dropDownContainerStyle}
      labelStyle={modalDropdown.labelStyle}
      style={[
        modalDropdown.wrapper,
        inputStyle.input,
        isInvalid ? inputStyle.inputError : {},
        open ? modalDropdown.border : {},
      ]}
      disableBorderRadius={false}
      showArrowIcon
      textStyle={modalDropdown.textStyle}
      listParentContainerStyle={modalDropdown.listParentContainerStyle}
    />
  );
};

export default ModalDropdown;
