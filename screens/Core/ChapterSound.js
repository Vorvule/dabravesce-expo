import { StyleSheet } from "react-native";

import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { Audio } from "expo-av";
import { TouchableOpacity } from "react-native-web";

export default function ChapterSound({ chapterAudio }) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/01.mp3")
    );

    setSound(sound);
    await sound.playAsync();
  }

  async function unloadSound() {
    sound.unloadAsync();
  }

  React.useEffect(() => {
    return sound ? unloadSound : undefined;
  }, [sound]);

  return (
    <TouchableOpacity style={styles.touchable} onPress={playSound}>
      <FontAwesome name="play" size={15} color={"teal"} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    borderColor: "teal",
    borderWidth: 2,
    paddingLeft: 14,
    paddingTop: 10,
  },
});
