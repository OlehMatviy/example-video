import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const flatHorizontalStyle = StyleSheet.create({
  dot: {
    borderRadius: scale(8),
    height: scale(4),
    width: scale(13),
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  wrapper: {
    paddingHorizontal: 4,
    paddingVertical: scale(13),
  },
});

export default flatHorizontalStyle;
