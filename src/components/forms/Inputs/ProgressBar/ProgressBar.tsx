import LinearGradient from "react-native-linear-gradient";
import { FC } from "react";
import { View, ViewStyle } from "react-native";
import Animated, { useDerivedValue } from "react-native-reanimated";

import progressBarStyle from "@app/components/forms/Inputs/ProgressBar/progressBar.style";
import { widthSize, bg, brSize } from "@app/styles/mixins";
import { cl } from "@app/styles";

const cx = progressBarStyle;
interface ProgressBarProps {
  progress: number;
  barColor: string;
  fillColorStart: string;
  fillColorEnd: string;
  styleContainer?: ViewStyle;
  styleLine?: ViewStyle;
  min: number;
  max: number;
}

const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  barColor,
  fillColorStart,
  fillColorEnd,
  styleContainer,
  styleLine,
  min,
  max,
}) => {
  const interpolatedColors = useDerivedValue(() => {
    return [fillColorStart, fillColorEnd];
  });

  return (
    <View style={[cx.wrapper, bg(barColor)]}>
      <View
        style={[
          cx.progressBarContainer,
          bg(barColor),
          widthSize(progress),
          brSize(max ? 1 : 0),
          styleContainer,
        ]}
      >
        <Animated.View style={cx.fillBar}>
          <LinearGradient
            colors={interpolatedColors.value}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[cl.flex1, styleLine]}
          />
        </Animated.View>
      </View>
      <View style={[cx.positiveBar, widthSize(min)]} />
      <View style={[cx.normalBar, widthSize(max - min)]} />
      <View style={[cx.overBar, widthSize(max ? 13 : 0)]} />
    </View>
  );
};

export default ProgressBar;
