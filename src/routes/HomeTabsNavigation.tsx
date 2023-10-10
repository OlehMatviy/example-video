import { FC, useCallback, JSX } from "react";

import { IBaseNavigationProps } from "@app/core/types";
import { Tab } from "@app/core/types/general/INavigation";
import { tabsNavigationStyle, cl } from "@app/styles";
import { mainTabScreens } from "@app/constants";
import renderTabScreen from "@app/components/navigation/TabBarLabel/renderTabScreen";
import { useTypedSelector } from "@app/hooks";

const HomeTabsNavigation: FC<IBaseNavigationProps> = (): JSX.Element => {
  const { isHideTabBar } = useTypedSelector((state) => state.application);

  const loadTabScreens = useCallback(() => {
    return mainTabScreens.map(renderTabScreen);
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="KinliHome"
      sceneContainerStyle={{
        ...cl.bg_template,
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      {loadTabScreens()}
    </Tab.Navigator>
  );
};

export default HomeTabsNavigation;
