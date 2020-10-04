import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { width } = Dimensions.get("screen");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#221",
    minHeight: Math.round(Dimensions.get("window").height),
  },
  subContainer: {
    borderBottomLeftRadius: 40,
    overflow: "hidden",
    height: height * 0.61,
  },
  body: {
    flex: 1,
    overflow: "hidden",
  },
});

const image = { uri: require("../../assets/5.jpg") };

const Container = ({ children, footer }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.subContainer}>
          <Image
            source={image.uri}
            style={{ width, height, borderBottomLeftRadius: 75 }}
          />
        </View>
      </View>
      <View style={styles.body}>
        <Image
          source={image.uri}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <View
          style={{
            borderRadius: 40,
            borderTopLeftRadius: 0,
            backgroundColor: "white",
            flex: 1,
          }}
        >
          <KeyboardAwareScrollView enableOnAndroid>
            {children}
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#0C0D34",
          paddingTop: 20,
        }}
      >
        {footer}
        <View style={{ height: insets.bottom, marginBottom: 50 }} />
      </View>
    </View>
  );
};

export default Container;
