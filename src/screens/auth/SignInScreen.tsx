import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { Image, TextStyle, View } from "react-native";

import { BaseRootScreen } from "@app/core/types";
import { AuthLayout, FlatButton, Input, SolidButton } from "@app/components";
import signInScreen from "@app/styles/screens/signInScreen.style";
import { useSignIn, useTypedSelector } from "@app/hooks";
import { cl } from "@app/styles";

const SignInScreen: FC<BaseRootScreen<"SignIn">> = ({ navigation: { navigate } }): JSX.Element => {
  const { methods, onSubmit } = useSignIn();
  const { isLoading } = useTypedSelector((state) => state.application);

  return (
    <AuthLayout showBuild>
      <FormProvider {...methods}>
        <View style={signInScreen.form}>
          <View style={signInScreen.image}>
            <Image
              style={[cl.w100, cl.h100]}
              source={require("../../assets/images/signin.png")}
              resizeMode="cover"
            />
          </View>
          <Input placeholder="Enter your email address" label="Email Address" field="email" />
          <Input placeholder="Enter password" label="Password" field="password" isSecure />
          <SolidButton
            text="Sign In"
            onPress={methods.handleSubmit(onSubmit)}
            isLoading={isLoading}
          />
          <View style={signInScreen.bottomButtons}>
            <FlatButton
              text="Forgot Password"
              onPress={() => navigate("ForgotPassword")}
              textStyles={signInScreen.bottomButtonsText as TextStyle}
            />
          </View>
        </View>
      </FormProvider>
    </AuthLayout>
  );
};

export default SignInScreen;
