import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Container, Button } from "../../helperComponents";
import SocialLogin from "../Components/SocialLogin";
import TextInput from "../Components/Form/TextInput";
import CheckBox from "../Components/Form/CheckBox";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  password: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  email: Yup.string()

    .email("Invalid email")

    .required("Required"),
});

const Login = (props) => {
  const footer = (
    <>
      <SocialLogin />
      <View style={{ alignItems: "center", marginTop: 10, marginBottom: 5 }}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text variant="button" style={{ color: "white" }}>
            <Text>Don't have an account? </Text>
            <Text variant="button" style={{ color: "#2CB980" }}>
              Sign Up Here
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
    initialValues: { email: "", password: "", remember: true },
    onSubmit: (values) =>
      props.navigation.navigate("Drawer", { screen: "FashionIdeas" }),
    validationSchema: LoginSchema,
  });

  const password = useRef(null);

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
          Welcome back
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "#0C0D34",
            marginBottom: 10,
          }}
        >
          Enter your credentials to login
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
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />

          <View
            style={{
              marginTop: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <CheckBox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Log into your account"
            />
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.label}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

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
    marginTop: 10,
  },
});

export default Login;
