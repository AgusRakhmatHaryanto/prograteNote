import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "./components/customButtom";
import CustomTextInput from "./components/customTextInput";

export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#DDDDDD"
        color="#39494F"
        text="Custom Button"
        width="100%"
        onPress={() => {}}
      />
      <CustomTextInput
        label="Custom Text"
        multiline
        numberOfLines={2}
        onChange={() => {}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 40,
  },
});
