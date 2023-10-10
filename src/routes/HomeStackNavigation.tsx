import { useCallback, JSX } from "react";

import HomeTabsNavigation from "@app/routes/HomeTabsNavigation";
import { homeScreens } from "@app/constants/mainTabScreens";
import { IScreenProps, TabParamList } from "@app/core/types";
import { horizontalAnimation } from "@app/constants";
import { RoutePage } from "@app/core/types/general/INavigation";
import { RootStack } from "./RootNavigation";

const HomeStackNavigation = (): JSX.Element => {
  const renderHomeScreens = useCallback(() => {
    return homeScreens.map(
      (screen: { name: keyof TabParamList; component: React.FC<IScreenProps> }) => (
        <RootStack.Screen
          key={screen.name}
          name={screen.name as RoutePage}
          component={screen.component}
          options={{ ...horizontalAnimation, headerShown: false }}
        />
      ),
    );
  }, []);

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="RootTab"
        component={HomeTabsNavigation}
        options={() => ({
          headerShown: false,
          animationEnabled: true,
        })}
      />

      {homeScreens && renderHomeScreens()}
    </RootStack.Navigator>
  );
};

export default HomeStackNavigation;
