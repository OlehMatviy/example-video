import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@app/core/types";

export type ScreenNavigationProp = StackNavigationProp<any, keyof RootStackParamList>;

export interface IBaseNavigationProps {}

export interface IScreenProps extends IBaseNavigationProps {
  navigation: any;
}
