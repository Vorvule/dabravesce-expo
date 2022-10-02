// https://stackoverflow.com/questions/68042313/pausing-react-native-expo-audio
// https://docs.expo.dev/versions/latest/sdk/keep-awake/

import * as React from "react";
import { View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

import { Audio } from "expo-av";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";

import AudioTouchable from "./AudioTouchable";

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
        console.log(audioDuration, positionRatio);

        setAudioSliderValue(positionRatio);
      } catch (e) {}
    }

    playbackStatus.didJustFinish && deactivateKeepAwake();
  };

  const audio = React.useRef(new Audio.Sound());
  LoadAudio();

  const [audioPositionMillis, setAudioPositionMillis] = React.useState(0);
  const [audioSliderValue, setAudioSliderValue] = React.useState(0);

  const setAudio = async (value) => {
    // pausing / stopping an audio changes Slider's value
    setAudioPositionMillis(value);
    console.log(audioPositionMillis);
  };

  return (
    <>
      <View style={styles.player}>
        <AudioTouchable name="play" onPress={PlayAudio} />
        <AudioTouchable name="pause" onPress={PauseAudio} />
        <AudioTouchable name="stop" onPress={StopAudio} />
      </View>
      <Slider
        style={{ width: "100%", paddingTop: 30, height: 60 }}
        minimumTrackTintColor="#555555"
        maximumTrackTintColor="#AAAAAA"
        thumbTintColor="teal"
        onValueChange={(newValue) => {
          setAudio(newValue);
        }}
        value={audioSliderValue}
      />
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
