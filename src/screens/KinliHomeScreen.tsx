import React, { FC, Suspense, useCallback, lazy, JSX } from "react";
import { AppState, AppStateStatus, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { IScreenProps } from "@app/core/types";
import { Paragraph, ScreenDatePicker, SolidButton, TabScreenLayout } from "@app/components";
import { navigateRef } from "@app/routes/RootNavigation";
import screenWithoutLayout from "@app/styles/components/screenWithoutLayout.style";
import { marginB, marginT, paddingT } from "@app/styles";
import { todayLocalFormatDate } from "@app/utilis";
import useTargetZone from "@app/hooks/screens/targetZone/useTargetZone";
import { useActions, useTypedSelector } from "@app/hooks";
import signInScreen from "@app/styles/screens/signInScreen.style";
import SectionRoute from "@app/components/common/SectionRoute/SectionRoute";
import useDailyCheckIn from "@app/hooks/screens/targetZone/useDailyCheckIn";

const TargetZoneCard = lazy(() => import("@app/components/screens/kinliZone/TargetZoneCard"));
const MyWhyCard = lazy(() => import("@app/components/screens/kinliZone/MyWhyCard"));
const TargetZoneList = lazy(() => import("@app/components/screens/kinliZone/TargetZoneList"));

const KinliHomeScreen: FC<IScreenProps> = (): JSX.Element => {
  const { calendarDate } = useTypedSelector((state) => state.user);
  const { targetZones, onChangeCalendarDate } = useTargetZone();
  const { dailyCheckIn, isDailyLoading } = useDailyCheckIn();
  const { setCalendarDate } = useActions();

  useFocusEffect(
    useCallback(() => {
      setCalendarDate(todayLocalFormatDate);
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const handleAppStateChange = (nextAppState: AppStateStatus) => {
        if (nextAppState === "active") {
          setCalendarDate(todayLocalFormatDate);
        }
      };
      const subscription = AppState.addEventListener("change", handleAppStateChange);

      return () => {
        if (subscription && subscription?.remove) {
          subscription.remove();
        }
      };
    }, []),
  );

  return (
    <TabScreenLayout title="Kinli Zone">
      <View style={screenWithoutLayout.templateDefault}>
        <ScreenDatePicker
          value={calendarDate}
          onChange={onChangeCalendarDate}
          containerStyle={paddingT(0)}
        />
        <View style={[marginT(15), marginB(15)]}>
          <SectionRoute title="My Target Zone" navigate={() => navigateRef("TargetZoneScreen")} />
        </View>
        <View style={[marginB(17), screenWithoutLayout.fullHorizontal]}>
          <Suspense fallback={null}>
            <TargetZoneList targetZones={targetZones} />
          </Suspense>
        </View>
        <SolidButton text="My Foods" onPress={() => navigateRef("MyFoods")} />
        <View style={[marginB(20), marginT(35)]}>
          <SectionRoute
            title="My Daily Check In"
            navigate={() => navigateRef("DailyCheckListNavigation")}
          />
        </View>
        <Suspense fallback={null}>
          <TargetZoneCard dailyCheckIn={dailyCheckIn} isLoading={isDailyLoading} />
        </Suspense>
        <SolidButton
          text="Daily Check In"
          onPress={() => navigateRef("DailyCheckListNavigation")}
          btnStyles={marginT(17)}
        />
        <Suspense fallback={null}>
          <MyWhyCard />
        </Suspense>
      </View>
    </TabScreenLayout>
  );
};

export default KinliHomeScreen;
