import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width = 120,
}) {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 10,
      alignItems: "center",
      backgroundColor,
      width,
      padding: 10,
    },
    buttonText: {
      color,
      fontWeight: "700",
      textTransform: "uppercase",
      fontSize,
      textAlign: "center",
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
