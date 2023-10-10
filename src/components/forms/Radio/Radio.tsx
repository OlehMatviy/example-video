import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { IVocabulary } from "@app/core/types";
import { cl } from "@app/styles";
import { checkBorder, radioStyle } from "./radio.style";

const { flexRow, flexColumn } = cl;

type Props = {
  checked: string;
  onChange: (index: string | number, label: string) => void;
  options: IVocabulary[];
  isHorizontal?: boolean;
};

const Radio: FC<Props> = ({ checked, onChange, options, isHorizontal }) => {
  return (
    <View style={isHorizontal ? flexRow : flexColumn}>
      {options.map((opt) => (
        <TouchableOpacity
          style={radioStyle.button}
          onPress={() => onChange(opt.id, opt.name)}
          disabled={opt.isDisabled}
          key={opt.id}
        >
          <View style={[radioStyle.radio, checkBorder(checked === opt.id)]}>
            {checked === opt.id && <View style={radioStyle.checked} />}
          </View>
          <Text style={[radioStyle.text, isHorizontal ? radioStyle.mr : {}]}>{opt.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Radio;
