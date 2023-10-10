import React from "react";
import { TouchableOpacity, View } from "react-native";

import { TabBarLabel } from "@app/components";
import { IMainTabs, RoutePage, Tab } from "@app/core/types/general/INavigation";
import { navigationRef } from "@app/routes/RootNavigation";
import { cl } from "@app/styles";

const renderTabScreen = (tab: IMainTabs) => {
  const handleTabPress = (_tab: IMainTabs) => {
    navigationRef.navigate(_tab.name as RoutePage);
  };

  return (
    <Tab.Screen
      key={tab.id}
      name={tab.name}
      component={tab.component}
      options={{
        headerShown: false,
        tabBarBadgeStyle: {
          ...cl.bg_template,
        },
        tabBarAllowFontScaling: true,
        tabBarLabel: ({ focused }) => (
          <TabBarLabel focused={focused} label={tab.label} icon={tab.icon} />
        ),
        tabBarIcon: () => null,
        tabBarButton: (props) => (!tab.isVisible ? <View /> : <TouchableOpacity {...props} />),
      }}
      listeners={() => ({
        tabPress: async (e) => {
          e.preventDefault();
          handleTabPress(tab);
        },
      })}
    />
  );
};

export default renderTabScreen;
