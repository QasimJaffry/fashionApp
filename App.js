import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Onboarding,
  Welcome,
  Login,
  SignUp,
  ForgotPassword,
  PasswordChange,
} from "./src/Authentication";
import { SafeAreaProvider } from "react-native-safe-area-context";
const AuthenticationStack = createStackNavigator();

// const fonts = {
//   "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
//   "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
//   "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
// };

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen
        name="Onboarding"
        component={Onboarding}
        navigator={navigator}
      />
      <AuthenticationStack.Screen
        name="Welcome"
        component={Welcome}
        navigator={navigator}
      />
      <AuthenticationStack.Screen
        name="Login"
        component={Login}
        navigator={navigator}
      />
      <AuthenticationStack.Screen
        name="SignUp"
        component={SignUp}
        navigator={navigator}
      />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        navigator={navigator}
      />
      <AuthenticationStack.Screen
        name="PasswordChange"
        component={PasswordChange}
        navigator={navigator}
      />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  // useEffect(async () => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync(fonts);
  //     // setFontReady(true);
  //   };
  //   loadFonts();
  // }, [])
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthenticationNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
