interface IVideo {
  id: string;
  url: string;
  posterUrl: string;
  FileName?: string;
  blobName?: string;
  isHelpfull?: boolean;
}

interface ITip {
  id: string;
  description: string;
}

enum EHint {
  KinliZoneMyDailyCheckIn = "KinliZoneMyDailyCheckIn",
  WhyLandingOverview = "WhyLandingOverview",
  WhyLandingOverviewPortrait = "WhyLandingOverviewPortrait",
  KinliZoneMyWhy = "KinliZoneMyWhy",
  OnBoardingOverview = "OnBoardingOverview",
  OnBoardingStep = "OnBoardingStep",
  BiologicalScreen = "BiologicalScreen",
  DateOfBirthScreen = "DateOfBirthScreen",
  CurrentWeightScreen = "CurrentWeightScreen",
  HeightScreen = "HeightScreen",
  MetabolicScreen = "MetabolicScreen",
  DesiredWeightScreen = "DesiredWeightScreen",
  FluidRestrictionsScreen = "FluidRestrictionsScreen",
  MedicationScreen = "MedicationScreen",
}

interface IHint {
  description: string;
  author: string;
  id: string;
  title: string;
  content: string;
  text: string;
  videoTitle: string;
  type: EHint;
  video: IVideo;
  timeline: {
    maxTime: number;
    lastTime: number;
  };
  tips: ITip[];
}

interface ICreateTimeLIne {
  videoId: string;
  seconds: number;
}

export { EHint };

export type { IHint, ICreateTimeLIne };
