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
import { FashionIdeas } from "./src/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const fonts = {
//   "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
//   "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
//   "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
// };

const HomeNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="FashionIdeas"
        component={FashionIdeas}
        navigator={navigator}
      />
    </Drawer.Navigator>
  );
};

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        navigator={navigator}
      />
      <Stack.Screen name="Welcome" component={Welcome} navigator={navigator} />
      <Stack.Screen name="Login" component={Login} navigator={navigator} />
      <Stack.Screen name="SignUp" component={SignUp} navigator={navigator} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        navigator={navigator}
      />
      <Stack.Screen
        name="PasswordChange"
        component={PasswordChange}
        navigator={navigator}
      />
    </Stack.Navigator>
  );
};

const NestedScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="AuthStack"
        component={AuthenticationNavigator}
        navigator={navigator}
      />
      <Stack.Screen
        name="Drawer"
        component={HomeNavigator}
        navigator={navigator}
      />
    </Stack.Navigator>
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
        <NestedScreen />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
