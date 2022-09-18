// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
// https://docs.expo.dev/versions/latest/sdk/keep-awake/

import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Audio } from "expo-av";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";

import AudioTouchable from "./AudioTouchable";

export default function ChapterAudio({ chapterAudio }) {
  const updateKeepAwake = (playbackStatus) => {
    playbackStatus.didJustFinish && deactivateKeepAwake();
  };

  const LoadAudio = async () => {
    try {
      await audio.current.unloadAsync();
      await audio.current.loadAsync({ uri: chapterAudio }, {}, true);
      
      audio.current.setOnPlaybackStatusUpdate(updateKeepAwake);
    } catch (e) {}
  };

  const PlayAudio = async () => {
    try {
      const audioStatus = await audio.current.getStatusAsync();

      if (audioStatus.isLoaded) {
        if (audioStatus.isPlaying === false) {
          audio.current.playAsync();

          activateKeepAwake();
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

          deactivateKeepAwake();
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

  const audio = React.useRef(new Audio.Sound());

  React.useEffect(() => {
    LoadAudio();
    deactivateKeepAwake();
  });

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
