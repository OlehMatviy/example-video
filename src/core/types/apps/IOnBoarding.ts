export interface IOnBoarding {
  alias?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  country?: string;
  zipCode?: string;
  sex?: number;
  dateOfBirth?: string;
  currentWeightUnit?: number;
  currentWeightValue?: number;
  heightUnit?: number;
  heightValue?: number;
  activityLevel?: number;
  desiredWeightUnit?: number;
  desiredWeightValue?: number;
  hasFluidRestriction?: boolean;
  hasMedicationRestriction?: boolean;
  sendEmail?: boolean;
  currentStep?: number;
  restriction?: {
    hasFluid: boolean;
    hasMedication: boolean;
  };
}

export interface IOnBoardingUser {
  alias: string;
  contact: {
    firstName: string;
    lastName: string;
    phone: string;
    country: string;
    zipCode: string;
  };
  sex: number;
  dateOfBirth: string;
  currentWeightUnit: number;
  currentWeightValue: number;
  heightUnit: number;
  heightValue: number;
  activityLevel: number;
  desiredWeightUnit: number;
  desiredWeightValue: number;
  restriction?: {
    hasFluid: boolean;
    hasMedication: boolean;
  };
  sendEmail: boolean;
  currentStep: number;
}

export type OptionalIOnBoarding = Partial<IOnBoarding>;

export enum ESex {
  Male = "Male",
  Female = "Female",
}

export enum EOnboardingStep {
  OnBoardingOverviewScreen,
  AliasScreen,
  ContactScreen,
  BiologicalScreen,
  DateOfBirthScreen,
  CurrentWeightScreen,
  HeightScreen,
  MetabolicScreen,
  DesiredWeightScreen,
  FluidRestrictionsScreen,
  MedicationScreen,
  CommunicationsScreen,
}

export interface IWhyDeclaration {
  confirmation: boolean;
  askMe: boolean;
  date: string;
}

export interface ICreateDeclaration {
  create: boolean;
  date: string;
}

export interface IVideoVote {
  videoId: string;
  isHelpfull: boolean | null;
}
