import React, { useState, forwardRef } from "react";
import { View, TextInput as RNTextInput, TextInputProps } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

const TextInput = forwardRef(({ icon, touched, error, ...props }, ref) => {
  const [valid, setValid] = useState(null);
  const [input, setInput] = useState("");
  const color = !touched ? "black" : error ? "red" : "green";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        borderRadius: 10,
        borderColor: color,
        borderWidth: 1,
      }}
    >
      <View style={{ padding: 10 }}>
        <Icon name={icon} {...{ color }} size={16} />
      </View>

      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid="transparent"
          {...props}
          {...{ ref }}
          placeholderTextColor={color}
        />
      </View>

      {touched && (
        <View
          style={{
            borderRadius: 40,
            height: 10 * 2,
            width: 10 * 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: !error ? "#2CB980" : "#FF0025",
            marginRight: 10,
          }}
        >
          <Icon name={!error ? "check" : "x"} color="white" size={12} />
        </View>
      )}
    </View>
  );
});

export default TextInput;
