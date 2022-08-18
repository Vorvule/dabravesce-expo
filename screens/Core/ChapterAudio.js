import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import Constants from "expo-constants";
import { Audio } from "expo-av";

const SampleTrack = require("../../assets/01.mp3");

export default function ChapterAudio() {
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);

  const sound = React.useRef(new Audio.Sound());

  React.useEffect(() => {
    LoadAudio();
  }, []);

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {}
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {}
  };

  const LoadAudio = async () => {
    SetLoading(true);

    const checkLoading = await sound.current.getStatusAsync();

    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(SampleTrack, {}, true);

        if (result.isLoaded === false) {
          SetLoading(false);
          console.log("Error in Loading Audio");
        } else {
          SetLoading(false);
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.AudioPLayer}>
        {Loading ? (
          <ActivityIndicator size={"small"} color={"red"} />
        ) : (
          <>
            {Loaded === false ? (
              <>
                <ActivityIndicator />
                <Text>Loading Song</Text>{" "}
              </>
            ) : (
              <>
                <Button title="Play Song" onPress={PlayAudio} />
                <Button title="Pause Song" onPress={PauseAudio} />
              </>
            )}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  AudioPLayer: {
    width: "100%",
    height: 50,
    alignItems: "center",
  },
});
