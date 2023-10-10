import { Dimensions } from "react-native";

type ScreenType = "screen" | "window";

const getDeviceSize = (type: ScreenType = "window") => Dimensions.get(type);
export default getDeviceSize;
