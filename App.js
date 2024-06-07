import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "./components/customButtom";
import CustomTextInput from "./components/customTextInput";
import AddNote from "./screens/addNote";
import EditNote from "./screens/editNote";

import Home from "./screens/home";

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage ,addNote}) => {
  switch (currentPage) {
    case "Home":
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case "AddNote":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "EditNote":
      return <EditNote />;
    default:
      return <Home />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem I  psum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    
    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc
      }
    ]);
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
    />
    // <View
    // // style={styles.container}
    // >
    //   {/* <CustomButton
    //     backgroundColor="#DDDDDD"
    //     color="#39494F"
    //     text="Custom Button"
    //     width="100%"
    //     onPress={() => {}}
    //   />
    //   <CustomTextInput
    //     label="Custom Text"
    //     multiline
    //     numberOfLines={2}
    //     onChange={() => {}}
    //   /> */}

    //   <Home noteList={noteList} />
    //   <StatusBar style="auto" />
    // </View>
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
