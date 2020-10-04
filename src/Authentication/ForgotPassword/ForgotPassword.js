import React from "react";
import { View, Text, TouchableWithoutFeedback, Linking } from "react-native";
import { Container, Button } from "../../helperComponents";
import SocialLogin from "../Components/SocialLogin";
import TextInput from "../Components/Form/TextInput";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string()

    .email("Invalid email")

    .required("Required"),
});
const ForgotPassword = (props) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => props.navigation.navigate("PasswordChange"),
    validationSchema: ForgetPasswordSchema,
  });

  const footer = (
    <>
      <SocialLogin />
      <View style={{ alignItems: "center", marginTop: 10, marginBottom: 5 }}>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL("mailto:help@support.com")}
        >
          <Text variant="button" style={{ color: "white" }}>
            <Text>Don't work? </Text>
            <Text variant="button" style={{ color: "#2CB980" }}>
              Try another way
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );

  return (
    <Container {...{ footer }}>
      <View style={{ padding: 30, marginTop: 15 }}>
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

        <View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              icon="mail"
              placeholder="Enter Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Reset Password"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};
export default ForgotPassword;
