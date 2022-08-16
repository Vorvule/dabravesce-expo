import { Button, StyleSheet, View } from "react-native";
import * as React from "react";

import { Audio } from "expo-av";

import ChapterName from "./ChapterName";
import ChapterText from "./ChapterText";

export default function Core({ chapter }) {
  console.log(chapter.audio);

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
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.view}>
      <ChapterName chapterName={chapter.name} />
      <Button title="Play Sound" onPress={playSound} />
      <ChapterText chapterText={chapter.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    padding: 16,
  },
});
