import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Container, Button, CloseButton } from "../../helperComponents";

const PasswordChange = (props) => {
  return (
    <Container
      footer={
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <CloseButton onPress={() => props.navigation.pop()} />
        </View>
      }
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <View
          style={{
            height: 70,
            width: 70,
            borderRadius: 70 / 2,
            backgroundColor: "#E7F9F7",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#2CB9B0",
            }}
          >
            <Icon name="check" size={32} />
          </Text>
        </View>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          Forgot Password ?
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "#0C0D34",
            marginBottom: 10,
          }}
        >
          Enter the email address associated with your account
        </Text>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Button
            variant="primary"
            onPress={() => props.navigation.navigate("Login")}
            label="Reset Password"
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default PasswordChange;
