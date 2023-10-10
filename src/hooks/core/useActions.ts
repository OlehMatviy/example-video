import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import appSlice from "@app/store/slices/appSlicer";
import userSlice from "@app/store/slices/userSlicer";
import barCodeFoodSlice from "@app/store/slices/barCodeFoodSlicer";
import animationsSlice from "@app/store/slices/animationsSlicer";
import onboardingSlice from "@app/store/slices/onboardingSlicer";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...appSlice.actions,
      ...userSlice.actions,
      ...barCodeFoodSlice.actions,
      ...animationsSlice.actions,
      ...onboardingSlice.actions,
    },
    dispatch,
  );
};

export default useActions;
