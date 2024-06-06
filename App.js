import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "./components/customButtom";
import CustomTextInput from "./components/customTextInput";
import Home from "./screens/home";

export default function App() {
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);
  return (
    <View
    // style={styles.container}
    >
      {/* <CustomButton
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
      /> */}

      <Home noteList={noteList} />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     padding: 40,
//   },
// });
