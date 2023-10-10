import { FC } from "react";
import { View } from "react-native";
import { marginB, marginT } from "@app/styles";
import { CL_BLUE } from "@app/styles/colors";
import { scale } from "react-native-size-matters";
import { BallIndicator } from "react-native-indicators";

type TProps = {
  loading: boolean;
  size?: number;
};

const InfinityFooter: FC<TProps> = ({ loading, size }) => {
  return (
    <>
      {loading ? (
        <View style={[marginB(25), marginT(15)]}>
          <BallIndicator color={CL_BLUE} size={scale(size ?? 23)} />
        </View>
      ) : (
        <View />
      )}
      <View />
    </>
  );
};

export default InfinityFooter;
