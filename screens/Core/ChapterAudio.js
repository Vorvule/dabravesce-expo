// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio

import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Audio } from "expo-av";
import AudioTouchable from "./AudioTouchable";

export default function ChapterAudio() {
  const SampleTrack = require("../../assets/01.mp3");
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
    <View style={styles.player}>
      <AudioTouchable name="play" onPress={PlayAudio} />
      <AudioTouchable name="pause" onPress={PauseAudio} />
      <AudioTouchable name="stop" onPress={StopAudio} />
    </View>
  );
}

const styles = StyleSheet.create({
  player: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
});
