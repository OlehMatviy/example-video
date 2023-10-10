import DeviceInfo from "react-native-device-info";

const getBundleId = () => {
  return DeviceInfo.getBundleId();
};

const getAppVersion = () => {
  return DeviceInfo.getVersion();
};

export { getBundleId, getAppVersion };
