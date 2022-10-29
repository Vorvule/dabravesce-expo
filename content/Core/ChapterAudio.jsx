// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
// https://docs.expo.dev/versions/latest/sdk/keep-awake/

import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Audio } from "expo-av";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";

import AudioTouchable from "./AudioTouchable";

export default function ChapterAudio({ chapterAudio }) {
  const [active, setActive] = React.useState(false);

  const LoadAudio = async () => {
    try {
      UnloadAudio();

      await audio.current.loadAsync(
        { uri: "https://dabravesce.by" + chapterAudio },
        {},
        true
      );

      setActive(true);
      audio.current.setOnPlaybackStatusUpdate(UpdateAudio);
    } catch (e) {}
  };

  const PlayAudio = async () => {
    try {
      const audioStatus = await audio.current.getStatusAsync();

      if (audioStatus.isLoaded && !audioStatus.isPlaying) {
        audio.current.playAsync();

        activateKeepAwake();
      }
    } catch (e) {}
  };

  const PauseAudio = async () => {
    try {
      const audioStatus = await audio.current.getStatusAsync();

      if (audioStatus.isLoaded) {
        if (audioStatus.isPlaying) {
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

  const UnloadAudio = async () => {
    try {
      await audio.current.unloadAsync();

      deactivateKeepAwake();
    } catch (e) {}
  };

  const UpdateAudio = async (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      deactivateKeepAwake();
      LoadAudio(); // for the replay on native devices
    }
  };

  const audio = React.useRef(new Audio.Sound());
  LoadAudio();

  return (
    <View style={styles.player}>
      <AudioTouchable name="play" onPress={PlayAudio} active={active} />
      <AudioTouchable name="pause" onPress={PauseAudio} active={active} />
      <AudioTouchable name="stop" onPress={StopAudio} active={active} />
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
