import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "./components/customButtom";
import CustomTextInput from "./components/customTextInput";
import AddNote from "./screens/addNote";
import EditNote from "./screens/editNote";

import Home from "./screens/home";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  editNote,
  noteToEdit,
  setNoteToEdit,
}) => {
  switch (currentPage) {
    case "Home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setNoteToEdit={setNoteToEdit}
        />
      );
    case "AddNote":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "EditNote":
      return (
        <EditNote
          editNote={editNote}
          noteToEdit={noteToEdit}
          setCurrentPage={setCurrentPage}
        />
      );
    default:
      return <Home />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [noteToEdit, setNoteToEdit] = useState(null);
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
        desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    const noteUpdate = noteList.map((note) => {
      if (note.id === id) {
        return { ...note, title, desc };
      }
      return note;
    });

    setNoteList(noteUpdate);
    setNoteToEdit(null);
  };

  const deleteNote = (id) => {
    const noteUpdate = noteList.filter((note) => note.id !== id);
    setNoteList(noteUpdate);
  };
  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      noteToEdit={noteToEdit}
      setNoteToEdit={setNoteToEdit}
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
