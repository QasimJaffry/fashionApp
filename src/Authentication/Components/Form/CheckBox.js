import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export default function CheckBox({ label, checked, onChange }) {
  return (
    <RectButton onPress={() => onChange()} style={{ justifyContent: "center" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            height: 20,
            width: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: checked ? "#2CB980" : "white",
            borderWidth: 1,
            borderColor: "#2CB980",
            marginRight: 10,
          }}
        >
          <Icon name="check" color="white" />
        </View>
        <Text>{label}</Text>
      </View>
    </RectButton>
  );
}
