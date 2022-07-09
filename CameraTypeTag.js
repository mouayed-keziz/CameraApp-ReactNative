import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
export default function CameraTypeTag(props) {
  const { text, theStyle } = props;
  return (
    //create play icon
    <View>
      {/*text with style = thestyle and inline styling together */}
      <Text
        style={{
          ...theStyle,
          ...{
            borderRadius: 10,
            backgroundColor: "#545454",
            padding: 5,
            paddingTop: 3,
            paddingBottom: 3,
          },
        }}
      >
        {text}
      </Text>
    </View>
  );
}
