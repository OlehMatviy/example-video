import { useEffect, useMemo, useState, JSX } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useActions, useAsyncStorage, useTypedSelector } from "@app/hooks";
import { IAuthenticate } from "@app/core/types";
import { CREDENTIALS } from "@app/constants";
import HomeStackNavigation from "@app/routes/HomeStackNavigation";
import PublicStackNavigation from "@app/routes/PublicStackNavigation";
import { cl } from "@app/styles";
import { View } from "react-native";
import { CL_BLUE } from "@app/styles/colors";
import { scale } from "react-native-size-matters";
import { BallIndicator } from "react-native-indicators";
import { navigationRef } from "./RootNavigation";

const MainNavigation = (): JSX.Element => {
  const { appInitialized } = useTypedSelector((state) => state.application);
  const { asyncStorageGetItem } = useAsyncStorage();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { signIn, setAppInitialized } = useActions();

  const isCurrentUserValid = async () => {
    setIsLoading(true);
    const currentUser = await asyncStorageGetItem<IAuthenticate>(CREDENTIALS);
    if (currentUser) {
      signIn(currentUser);
      setAppInitialized(true);
    }
    setIsLoading(false);
  };
  const memoHome = useMemo(() => <HomeStackNavigation />, []);
  const memoAuth = useMemo(() => <PublicStackNavigation />, []);

  useEffect(() => {
    isCurrentUserValid();
  }, []);

  if (isLoading) {
    return (
      <View style={cl.flex1}>
        <BallIndicator color={CL_BLUE} size={scale(30)} />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {appInitialized ? memoHome : memoAuth}
    </NavigationContainer>
  );
};

export default MainNavigation;
