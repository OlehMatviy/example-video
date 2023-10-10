import { TextStyle, ViewStyle } from "react-native";

export interface IBaseBtnProps {
  text: string;
  onPress: () => void;
  size?: number;
  styles?: ViewStyle | ViewStyle[];
  isDisabled?: boolean;
  styleText?: TextStyle | TextStyle[];
}
