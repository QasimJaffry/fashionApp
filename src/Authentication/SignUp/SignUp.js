import React, { useRef } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Container, Button } from "../../helperComponents";
import SocialLogin from "../Components/SocialLogin";
import TextInput from "../Components/Form/TextInput";
import CheckBox from "../Components/Form/CheckBox";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
const SignUpScheme = Yup.object().shape({
  password: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  passwordconfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
    .required("Required"),

  email: Yup.string()

    .email("Invalid email")

    .required("Required"),
});

const SignUp = (props) => {
  const footer = (
    <>
      <SocialLogin />
      <View style={{ alignItems: "center", marginTop: 10, marginBottom: 5 }}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text variant="button" style={{ color: "white" }}>
            <Text>Already have an account? </Text>
            <Text variant="button" style={{ color: "#2CB980" }}>
              Login Here
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: { email: "", password: "", passwordconfirmation: "" },
    onSubmit: (values) => console.log(values),
    validationSchema: SignUpScheme,
  });

  const password = useRef(null);
  const passwordconfirmation = useRef(null);

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
          Create Account
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "#0C0D34",
            marginBottom: 10,
          }}
        >
          Let us know your name, password and email for register
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
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current.focus()}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
              autoCapitalize="none"
              autoCompleteType="password"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwordconfirmation.current.focus()}
            />
          </View>

          <View style={{ marginBottom: 15 }}>
            <TextInput
              ref={passwordconfirmation}
              icon="lock"
              placeholder="Retype Password"
              onChangeText={handleChange("passwordconfirmation")}
              onBlur={handleBlur("passwordconfirmation")}
              error={errors.passwordconfirmation}
              touched={touched.passwordconfirmation}
              secureTextEntry
              autoCapitalize="none"
              autoCompleteType="password"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Create your account"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignUp;
