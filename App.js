import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import TouchableIcon from "./TouchableIcon";
import CameraTypeTag from "./CameraTypeTag";

export default function App() {
  let camera = new Camera();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [photoo, setPhoto] = useState(null);
  const Sroties = [
    "SINGLE TAKE",
    "PHOTO",
    "VIDEO",
    " MORE",
    "SINGLE TAKE",
    "PHOTO",
    "VIDEO",
    " MORE",
  ];

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync(); // it was Camera.requestPermissionsAsync
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}></View>
      <View
        style={{
          flex: 15,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            flex: 10 /*animation to change flex */,
            backgroundColor: "white",
          }}
        >
          <Camera
            ref={(r) => {
              camera = r;
            }}
            style={{ flex: 1 }}
            type={type}
          ></Camera>
        </View>
      </View>
      <View style={styles.downSideContainer}>
        <View style={{ marginTop: 7 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            centerContent={true}
          >
            {Sroties.map((story) => (
              <CameraTypeTag
                theStyle={styles.text}
                text={story}
              ></CameraTypeTag>
            ))}
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableIcon name="square" size={50} />
          <TouchableIcon
            name="ellipse"
            size={75}
            onpress={async () => {
              const photo = await camera.takePictureAsync();
              console.log(photo);
            }}
          />
          <TouchableIcon
            name="camera-reverse"
            size={50}
            onpress={(Camer) => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  settingsContainer: {
    flex: 2,
    backgroundColor: "black",
  },

  downSideContainer: {
    flex: 3.75,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "black",
  },
  modesContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 0,
    backgroundColor: "black",
  },
  flexEnd: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginLeft: 15,
    marginRight: 15,
  },
});
