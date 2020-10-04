import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../helperComponents/index";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  footerTitle: {
    //fontFamily: 'SFProText-SemiBold',
    fontSize: 24,
    color: "#0C0D34",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 12,
  },
  footerDescription: {
    // fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});

const SubSlide = ({ footerTitle, footerDescription, last, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.footerTitle}>{footerTitle}</Text>
      <Text style={styles.footerDescription}>{footerDescription}</Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default SubSlide;
