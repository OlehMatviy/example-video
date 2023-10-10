import React, { ReactNode } from "react";
import {
  View,
  ScrollView,
  RefreshControl,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  ViewStyle,
  StyleProp,
} from "react-native";

import { IBaseNavigationProps } from "@app/core/types";
import { colors, cl } from "@app/styles";
import tabScreenLayout from "@app/components/layout/TabScreenLayout/tabScreenLayout.style";
import { IS_IOS } from "@app/constants";
import { useRefresh } from "@app/hooks";
import MainTabHeader from "@app/components/common/headers/MainTabHeader";
import authLayout from "../AuthLayout/authLayout.style";

interface Props extends IBaseNavigationProps {
  children: ReactNode;
  title: string;
  callbackRefresh?: () => void;
  withoutScrollView?: boolean;
  showHeader?: boolean;
  isProfile?: boolean;
  isBack?: boolean;
  overScrollMode?: boolean;
  keyboardShouldPersistTaps?: boolean;
  isFullHeight?: boolean;
  onBack?: () => void;
  containerSt?: ViewStyle;
  noRefreshControl?: boolean;
}

const TabScreenLayout = React.forwardRef(
  (
    {
      children,
      callbackRefresh,
      withoutScrollView,
      showHeader = true,
      title,
      isProfile,
      isBack,
      overScrollMode,
      keyboardShouldPersistTaps,
      isFullHeight,
      onBack,
      containerSt,
      noRefreshControl,
    }: Props,
    ref?: React.LegacyRef<ScrollView> | undefined,
  ) => {
    const { onRefresh, refreshing } = useRefresh();
    const withoutScrollViewTemplate = () => {
      return IS_IOS ? (
        <KeyboardAvoidingView
          behavior={IS_IOS ? "padding" : "height"}
          style={tabScreenLayout.scrollView}
        >
          {children}
        </KeyboardAvoidingView>
      ) : (
        <View style={tabScreenLayout.scrollView}>{children}</View>
      );
    };

    const contentContainerStyle = (): StyleProp<ViewStyle> | undefined => {
      return isFullHeight ? cl.flex1 : undefined;
    };

    return (
      <>
        <SafeAreaView style={authLayout.templateHeader}>
          <StatusBar barStyle="dark-content" backgroundColor={colors.CL_MAIN_TEMPLATE} />
        </SafeAreaView>
        <View style={tabScreenLayout.layoutContainer}>
          {showHeader && (
            <MainTabHeader title={title} isProfile={isProfile} isBack={isBack} onBack={onBack} />
          )}
          {!withoutScrollView ? (
            <ScrollView
              ref={ref}
              overScrollMode={overScrollMode ? "never" : "auto"}
              keyboardShouldPersistTaps={keyboardShouldPersistTaps ? "never" : "always"}
              style={tabScreenLayout.scrollView}
              contentContainerStyle={[contentContainerStyle(), containerSt]}
              refreshControl={
                !noRefreshControl ? (
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => onRefresh(callbackRefresh || (() => null))}
                  />
                ) : undefined
              }
            >
              {children}
            </ScrollView>
          ) : (
            withoutScrollViewTemplate()
          )}
        </View>
      </>
    );
  },
);

export default TabScreenLayout;
