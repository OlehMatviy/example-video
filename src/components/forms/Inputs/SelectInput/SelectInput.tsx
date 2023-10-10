import { useFocusEffect } from "@react-navigation/native";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Keyboard, TextStyle, View, ViewStyle } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Controller, useFormContext } from "react-hook-form";

import { IDropdownProp } from "@app/core/types";
import { cl, colors, marginB, paddingB } from "@app/styles";
import { checkLength } from "@app/utilis";
import { Paragraph, SvgIcon } from "@app/components";
import inputStyle from "@app/components/forms/Inputs/input.style";
import { CL_BLUE } from "@app/styles/colors";
import selectInputStyle from "@app/components/forms/Inputs/SelectInput/selectInput.style";

const st = selectInputStyle;

type Props = {
  options: IDropdownProp[];
  field: string;
  label: string;
  placeholder: string;
  colorLabel?: string;
  disable?: boolean;
  handlerOpen?: (value: boolean) => void;
  customStyles?: TextStyle;
};

const SelectInput: FC<Props> = ({
  options,
  field,
  label,
  placeholder,
  colorLabel,
  disable,
  handlerOpen,
  customStyles,
}) => {
  const methods = useFormContext();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<IDropdownProp[]>(options);

  const defineColorLabel = (): string => {
    return colorLabel || colors.CL_BLACK;
  };

  const defineInputStyle = (text: string): ViewStyle => {
    return { borderColor: text ? CL_BLUE : colors.CL_GRAY_EF };
  };

  const arrowSelectBottom = () => <SvgIcon icon="arrowSelectBottom" />;

  const handleReturn = () => {
    Keyboard.dismiss();
  };

  const arrowSelectTop = () => <SvgIcon icon="arrowSelectTop" />;

  useFocusEffect(useCallback(() => setItems(options), [options]));

  useEffect(() => {
    if (handlerOpen) {
      handlerOpen(open);
    }
  }, [open]);

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
        </View>
      )}
      <Controller
        control={methods.control}
        name={field}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { invalid } }) => (
          <DropDownPicker
            onChangeValue={onChange}
            onPress={handleReturn}
            placeholder={placeholder}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={onChange}
            setItems={setItems}
            listMode="SCROLLVIEW"
            disabled={disable}
            containerStyle={cl.w100}
            ArrowDownIconComponent={arrowSelectBottom}
            ArrowUpIconComponent={arrowSelectTop}
            disableBorderRadius={false}
            placeholderStyle={{ color: colors.CL_GRAY_A1 }}
            dropDownContainerStyle={st.dropDownContainerStyle}
            style={[
              inputStyle.input,
              defineInputStyle(value),
              st.containerBlock,
              invalid ? inputStyle.inputError : {},
            ]}
            textStyle={st.text}
          />
        )}
      />
    </View>
  );
};

export default SelectInput;
