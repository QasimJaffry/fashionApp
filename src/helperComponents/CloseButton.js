import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
const SIZE = 60;

const CloseButton = ({ onPress }) => {
  return (
    <RectButton {...{ onPress }}>
      <View
        style={{
          height: SIZE,
          width: SIZE,
          borderRadius: SIZE / 2,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black", textAlign: "center" }}>
          <Icon name="x" size={20} />
        </Text>
      </View>
    </RectButton>
  );
};

export default CloseButton;
