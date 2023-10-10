import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;

const isIpad = (): boolean => !(aspectRatio > 1.6);

export default isIpad;
