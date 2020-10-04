import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    //  fontFamily: 'SFProText-Regular',
    fontSize: 15,
    textAlign: "center",
  },
});

const Button = ({ variant, label, onPress, children }) => {
  const backgroundColor =
    variant === "primary"
      ? "#2CB980"
      : variant === "transparent"
      ? "transparent"
      : "rgba(12,14,52,0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant="button" style={[styles.label, { color }]}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
