import { IHint } from "@app/core/types";

interface IDailyCheckIn {
  imageEnabled: string;
  imageDisabled: string;
  answear: null | boolean;
}

interface IHintShort {
  id: string;
  description: string;
  author: string;
}

interface IDailyCheckList {
  description: string;
  hint: IHintShort;
  order: number;
  date: string;
  imageEnabled: string;
  imageDisabled: string;
  answear: null | boolean;
  id: string;
}

interface IDailyCheckListState {
  activeStep: number;
  steps: IDailyCheckList[];
}

interface IAnswerRequest {
  date: string;
  answer: boolean;
  id: string;
}

interface IDailyCheckInList {
  dailyCheckStep: IDailyCheckIn[];
  hint: null;
}

interface IActionButton {
  id: number;
  answer: string;
  action?: boolean;
  description?: string;
}

interface IAnswerForm {
  answer: IActionButton;
}

export type {
  IDailyCheckIn,
  IDailyCheckInList,
  IDailyCheckList,
  IAnswerRequest,
  IDailyCheckListState,
  IActionButton,
  IAnswerForm,
};
