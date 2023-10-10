import React from "react";
import { ActivityIndicator, View } from "react-native";
import { CL_PRIMARY } from "@app/styles/colors";
import loaderStyle from "./loaderStyle.style";

const Loader = () => {
  return (
    <View style={loaderStyle.wrapp}>
      <ActivityIndicator size="large" color={CL_PRIMARY} />
    </View>
  );
};

export default React.memo(Loader);
