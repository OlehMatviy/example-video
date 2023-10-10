import React, { FC, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { cl } from "@app/styles";
import { UNotificationTypes } from "@app/core/types/general/INotification";
import { useActions } from "@app/hooks";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { setBackground, sizeBottom, toastStyle } from "./toastStyle";

const { flexRowBetween, w100 } = cl;

type Props = {
  show?: boolean;
  type: UNotificationTypes;
  messages: Array<string> | string;
  authLayout?: boolean;
  top?: boolean;
};

const CustomToast: FC<Props> = ({ messages, authLayout = false, type, top = false, show }) => {
  const { setNotification } = useActions();

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setNotification({ show: false, type: "success", messages: "" });
      }, 3000);
    }
  }, [show]);

  return (
    <TouchableOpacity
      style={[toastStyle.wrapp, sizeBottom(authLayout, top), setBackground(type)]}
      onPress={() => setNotification({ show: false, type: "success", messages: "" })}
    >
      <Animated.View
        style={{ ...flexRowBetween, ...w100 }}
        entering={FadeIn.duration(1000)}
        exiting={FadeOut.duration(300).delay(0)}
      >
        <View style={toastStyle.content}>
          {Array.isArray(messages) ? (
            messages.map((msg) => (
              <Text key={msg} style={toastStyle.text}>
                {msg}
              </Text>
            ))
          ) : (
            <Text style={toastStyle.text}>{messages || ""}</Text>
          )}
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CustomToast;
