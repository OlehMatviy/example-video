import { IAuthenticate, INotification } from "@app/core/types";
import { IUser } from "@app/core/types/general/IUser";

type TAppState = {
  currentUser: IUser | null;
  isLoading: boolean;
  notification: INotification;
  appInitialized: boolean;
  authenticate: IAuthenticate | null;
  errorMessage: string;
  isHideTabBar: boolean;
  statusBarColor: string;
  triggerModals: string;
};

export default TAppState;
