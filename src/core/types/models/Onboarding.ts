import { IOnBoarding } from "@app/core/types/apps/IOnBoarding";

export class OnBoardingModel implements IOnBoarding {
  alias: string = "";
  firstName? = "";
  lastName?: string = "";
  phone?: string = "";
  country?: string = "";
  zipCode?: string = "";
  sex?: number = 0;
  dateOfBirth?: string = "";
  currentWeightUnit?: number = 0;
  currentWeightValue?: number = 0;
  heightUnit?: number = 0;
  heightValue?: number = 0;
  activityLevel?: number = 0;
  desiredWeightUnit?: number = 0;
  desiredWeightValue?: number = 0;
  hasFluidRestriction?: boolean = false;
  hasMedicationRestriction?: boolean = false;
  sendEmail?: boolean = false;
  currentStep?: number = 0;
  constructor(data?: IOnBoarding) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
