import { Button, StyleSheet } from "react-native";

import * as React from "react";

import { Audio } from "expo-av";

export default function ChapterSound({ chapterAudio }) {
  console.log(chapterAudio);

  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/01.mp3")
    );

    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return <Button title="Слухаць" onPress={playSound} />;
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    padding: 16,
  },
});
