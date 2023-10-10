import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { ScrollPicker } from "@app/components";
import { CL_BLUE, CL_WHITE } from "@app/styles/colors";
import { ViewStyle } from "react-native";

type Props = {
  field: string;
  dataSource: string[] | number[];
  wrapperStyle: ViewStyle;
  wrapperHeight?: number;
  itemHeight?: number;
  onMoved?: (field: string) => void;
  isActive?: boolean;
  itemStyle?: ViewStyle;
};

const ScrollPickerInput: FC<Props> = ({
  field,
  dataSource,
  wrapperHeight,
  itemHeight,
  wrapperStyle,
  onMoved,
  isActive,
  itemStyle,
}) => {
  const methods = useFormContext();

  return (
    <Controller
      control={methods.control}
      name={field}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <ScrollPicker
          dataSource={dataSource || []}
          selectedIndex={value}
          onValueChange={(data) => {
            onChange(data);
          }}
          isActive={isActive}
          wrapperHeight={wrapperHeight || 120}
          wrapperColor={CL_WHITE}
          itemHeight={itemHeight || 50}
          highlightColor={CL_BLUE}
          wrapperStyle={wrapperStyle}
          highlightBorderWidth={1}
          itemStyle={itemStyle}
          onMoved={() => onMoved && onMoved(field)}
        />
      )}
    />
  );
};
export default ScrollPickerInput;
