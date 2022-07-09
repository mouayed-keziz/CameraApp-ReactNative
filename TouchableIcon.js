import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TouchableIcon(props) {
  const { name, size, onpress } = props;
  return (
    <TouchableOpacity
      style={{
        alignSelf: "flex-end",
        marginBottom: 15,
      }}
      onPress={onpress}
    >
      <Ionicons name={name} size={size} color={"white"} />
    </TouchableOpacity>
  );
}
