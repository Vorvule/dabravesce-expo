// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio

import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Audio } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";

const SampleTrack = require("../../assets/01.mp3");

export default function ChapterAudio() {
  const audio = React.useRef(new Audio.Sound());

  React.useEffect(() => {
    LoadAudio();
  }, []);

  const LoadAudio = async () => {
    try {
      const audioStatus = await audio.current.getStatusAsync();

      if (audioStatus.isLoaded === false) {
        await audio.current.loadAsync(SampleTrack, {}, true);
      }
    } catch (e) {}
  };

  const PlayAudio = async () => {
    try {
      const audioStatus = await audio.current.getStatusAsync();

      if (audioStatus.isLoaded) {
        if (audioStatus.isPlaying === false) {
          audio.current.playAsync();
        }
      }
    } catch (e) {}
  };

  const PauseAudio = async () => {
    try {
      const audioStatus = await audio.current.getStatusAsync();

      if (audioStatus.isLoaded) {
        if (audioStatus.isPlaying === true) {
          audio.current.pauseAsync();
        }
      }
    } catch (e) {}
  };

  const StopAudio = async () => {
    try {
      const audioStatus = await audio.current.getStatusAsync();

      if (audioStatus.isLoaded) {
        PauseAudio();
        audio.current.setPositionAsync(0);
      }
    } catch (e) {}
  };

  return (
    <View style={styles.AudioPLayer}>
      <TouchableOpacity style={styles.touchable} onPress={PlayAudio}>
        <FontAwesome name="play" size={15} color={"teal"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={PauseAudio}>
        <FontAwesome name="pause" size={15} color={"teal"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={StopAudio}>
        <FontAwesome name="stop" size={15} color={"teal"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  AudioPLayer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },

  touchable: {
    padding: 12,
    paddingLeft: 14,
    height: 41,
    width: 41,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: "teal",

    margin: 8,
    marginBottom: 16,
  },
});
