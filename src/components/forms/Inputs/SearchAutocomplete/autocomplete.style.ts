import { scale, ScaledSheet } from "react-native-size-matters";
import { padding, paddingL, cl } from "@app/styles";

const autoCompleteStyle = ScaledSheet.create({
  containerSuggestion: {
    ...padding(14),
    ...paddingL(0),
    ...cl.flexAlignCenter,
    ...cl.flexRowBetween,
    borderBottomWidth: 1,
    borderColor: "#EFEFEF",
  },
  suggestionRightGroup: {
    ...cl.flexRow,
    ...cl.flexAlignCenter,
  },
  row: {
    ...cl.flexRow,
    ...cl.flexAlignCenter,
    maxWidth: scale(190),
  },
});

export default autoCompleteStyle;
