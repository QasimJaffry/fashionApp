import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import Button from "../../helperComponents/Button";
const BORDER_RADIUS = 75;
const { width, height } = Dimensions.get("window");
const HEIGHT_SLIDE = 0.61 * height;

const picture = {
  uri: require("../../../assets/4.jpg"),
  width: 2766,
  height: 3051,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: HEIGHT_SLIDE,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,

    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
});
const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          borderBottomRightRadius: 75,
          //  backgroundColor: "brown",
          justifyContent: "flex-end",
          alignItems: "center",
          overflow: "hidden",
          borderBottomLeftRadius: 75,
        }}
      >
        <Image
          source={picture.uri}
          style={{
            width: width,
            height: ((width - BORDER_RADIUS) * picture.height) / picture.width,
          }}
        />
      </View>
      <View style={{ flex: 1, borderTopLeftRadius: 75 }}>
        <View
          style={{
            // backgroundColor: "black",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <View
            style={{
              //  /   backgroundColor: "white",
              //   borderTopLeftRadius: 75 - 25,
              flex: 1,
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: 45,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Let's get Started
            </Text>
            <Text style={{ textAlign: "center" }}>
              Login to your account or signup for a great experience
            </Text>
            <Button
              variant="primary"
              label="Have an account? Login"
              onPress={() => props.navigation.navigate("Login")}
            />
            <Button
              label="Join us, it's Free"
              onPress={() => props.navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
