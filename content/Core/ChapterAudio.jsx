// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
// https://docs.expo.dev/versions/latest/sdk/keep-awake/

import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Audio } from "expo-av";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";

import AudioTouchable from "./AudioTouchable";
import AudioSlider from "./AudioSlider";

export default function ChapterAudio({ chapterAudio }) {
  const LoadAudio = async () => {
    try {
      UnloadAudio();

      await audio.current.loadAsync({ uri: chapterAudio }, {}, true);
      audio.current.setOnPlaybackStatusUpdate(UpdateAudio);
    } catch (e) {}
  };

  const PlayAudio = async () => {
    try {
      const audioStatus = await audio.current.getStatusAsync();

      if (audioStatus.isLoaded && audioStatus.isPlaying === false) {
        audio.current.playAsync();
        activateKeepAwake();
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

  const UnloadAudio = async () => {
    try {
      await audio.current.unloadAsync();
      deactivateKeepAwake();
    } catch (e) {}
  };

  const UpdateAudio = async (playbackStatus) => {
    if (playbackStatus.isPlaying) {
      try {
        const audioDuration = playbackStatus.durationMillis;
        const audioPosition = playbackStatus.positionMillis;
        const positionRatio = audioPosition / audioDuration;

        console.log(audioPosition.toFixed(1), positionRatio.toFixed(5));

        setSliderValue(positionRatio);
      } catch (e) {}
    }

    playbackStatus.didJustFinish && deactivateKeepAwake();
  };

  const audio = React.useRef(new Audio.Sound());
  const [sliderValue, setSliderValue] = React.useState(0.25);

  LoadAudio();

  return (
    <>
      <View style={styles.player}>
        <AudioTouchable name="play" onPress={PlayAudio} />
        <AudioTouchable name="pause" onPress={PauseAudio} />
        <AudioTouchable name="stop" onPress={StopAudio} />
      </View>
      <AudioSlider sliderValue={sliderValue} />
    </>
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
