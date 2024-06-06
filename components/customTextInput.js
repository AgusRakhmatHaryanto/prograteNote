import React from "react";

import { TextInput, Text, View, StyleSheet } from "react-native";

export default function CustomTextInput({
  text,
  onChange,
  label,
  multiline,
  numberOfflines,
}) {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "#DDD",
      padding: 10,
    },
  });

  return (
    <View style={styles.textInputWrapper}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={text}
        placeholder={label}
        multiline={multiline}
        numberOfLines={numberOfflines}
      />
    </View>
  );
}
