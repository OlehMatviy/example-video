import { createNavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@app/core/types/general/INavigation";

export const navigationRef = createNavigationContainerRef();

export const navigateRef = (name: string, params?: unknown) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};

export const RootStack = createStackNavigator<RootStackParamList>();
