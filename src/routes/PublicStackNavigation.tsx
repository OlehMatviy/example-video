import { authScreens } from "@app/constants/mainTabScreens";
import { IScreenProps, RootStackParamList } from "@app/core/types";
import { horizontalAnimation } from "@app/constants";
import SignInScreen from "@app/screens/auth/SignInScreen";
import { RootStack } from "./RootNavigation";

const PublicStackNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <RootStack.Group
        screenOptions={{
          presentation: "transparentModal",
          gestureResponseDistance: 300,
          headerShown: false,
          animationEnabled: true,
        }}
      >
        {authScreens &&
          authScreens.map(
            (screen: { name: keyof RootStackParamList; component: React.FC<IScreenProps> }) => (
              <RootStack.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={horizontalAnimation}
              />
            ),
          )}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default PublicStackNavigation;
