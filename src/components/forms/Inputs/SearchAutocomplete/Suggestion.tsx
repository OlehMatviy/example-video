import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";
import { BallIndicator } from "react-native-indicators";

import { paddingL, cl, colors as rgb } from "@app/styles";
import { Paragraph, SvgIcon } from "@app/components";
import autoCompleteStyle from "@app/components/forms/Inputs/SearchAutocomplete/autocomplete.style";
import { IFood } from "@app/core/types";
import { convertServing } from "@app/utilis";
import { useSuggestion } from "@app/hooks";

type TProps = {
  suggestion: IFood;
};

const Suggestion: FC<TProps> = ({ suggestion }) => {
  const {
    isAddLoading,
    onPlusClick,
    onPressFood,
    defineTypeFood,
    marginTypeFood,
    parseAndFormatText,
  } = useSuggestion();

  const serving = () => {
    return `${
      suggestion?.dfSrv ? convertServing(suggestion?.dfSrv?.am) : convertServing(suggestion.serving)
    } ${suggestion?.dfSrv?.desc ? suggestion?.dfSrv?.desc : suggestion?.unit}`;
  };

  return (
    <View style={autoCompleteStyle.containerSuggestion}>
      <TouchableOpacity
        style={[cl.flexRowBetween, cl.flex1]}
        onPress={() => onPressFood(suggestion)}
      >
        <View style={autoCompleteStyle.row}>
          <View style={[cl.flexRow, marginTypeFood(suggestion.type)]}>
            {defineTypeFood(suggestion.type)}
          </View>
          <>{parseAndFormatText(suggestion.name)}</>
        </View>
        <View style={autoCompleteStyle.suggestionRightGroup}>
          <View style={[cl.flexColumn, { maxWidth: scale(50) }]}>
            <Paragraph size={10} text={`${suggestion?.calories} kcal`} />
            <Paragraph size={10} text={serving()} />
          </View>
        </View>
      </TouchableOpacity>

      {isAddLoading && (
        <View style={[cl.flexColumn, paddingL(18)]}>
          <BallIndicator color={rgb.CL_BLUE} size={scale(23)} />
        </View>
      )}

      {!isAddLoading && (
        <TouchableOpacity
          onPress={() => onPlusClick(suggestion)}
          style={[cl.flexColumn, paddingL(18)]}
        >
          <SvgIcon icon="plusBtn" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Suggestion;
