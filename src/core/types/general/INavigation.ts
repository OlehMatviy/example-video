import React from "react";
import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "react-native-screens/native-stack";

export type TabParamList = {
  KinliHome: undefined;
  Essentials: undefined;
  MyFoods: undefined;
  Resources: undefined;
  MenuNavigation: undefined;
  MyWhyNavigation: undefined;
  OnboardingNavigation: undefined;
  DailyCheckListNavigation: undefined;
  BarCodeScreen: undefined;
  TargetZoneScreen: undefined;
  BarCodeFoodScreen: undefined;
  EssentialScreen: undefined;
  EssentialPortraitScreen: undefined;
};

export type RoutePage = never;

export type RootStackParamList = {
  SignIn: undefined;
  Registration: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  RootTab: undefined;
  VerificationScreen: undefined;
  VerificationConfirmationScreen: undefined;
  VerificationPromtScreen: undefined;
  SelectPlanScreen: undefined;
};

export type BaseRootScreen<RouteName extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  RouteName
>;

export type BaseTabScreen<RouteName extends keyof TabParamList> = {
  navigation: BottomTabNavigationProp<TabParamList, RouteName>;
  route: RouteProp<TabParamList, RouteName>;
};

export interface IMainTabs {
  id: number;
  name: keyof TabParamList;
  label: string;
  icon: string;
  component: React.FC<any>;
  isVisible?: boolean;
  screen?: string;
  validate?: boolean;
  permission?: string;
}

export interface IAuthScreens {
  name: keyof RootStackParamList;
  component: React.FC<any>;
}

export type MenuNav = {
  MenuScreen: undefined;
};

export type MyWhyNav = {
  MyWhy: undefined;
  ChatScreen: undefined;
  EditMyWhyScreen: undefined;
  MyWhyHistoryScreen: undefined;
  WhyLandingScreen: undefined;
  EssentialMyWhyScreen: undefined;
  EssentialPortraitScreen: undefined;
};

export type DailyCheckListNav = {
  DailyCheckListScreen: undefined;
};

export type OnboardingNav = {
  OnBoardingOverviewScreen: undefined;
  AliasScreen: undefined;
  ContactScreen: undefined;
  BiologicalScreen: undefined;
  DateOfBirthScreen: undefined;
  CurrentWeightScreen: undefined;
  HeightScreen: undefined;
  MetabolicScreen: undefined;
  DesiredWeightScreen: undefined;
  FluidRestrictionsScreen: undefined;
  MedicationScreen: undefined;
  CommunicationsScreen: undefined;
  OnBoardingEssentialScreen: undefined;
  EssentialPortraitScreen: undefined;
};

export const Tab = createBottomTabNavigator<TabParamList>();
