// import { StyleSheet } from "react-native";

// import * as React from "react";
// import { FontAwesome } from "@expo/vector-icons";

// import { Audio } from "expo-av";
// import { TouchableOpacity } from "react-native-web";

// export default function ChapterSound({ chapterAudio }) {
//   const [sound, setSound] = React.useState();

//   async function playSound() {
//     const { sound } = await Audio.Sound.createAsync(
//       require("../Core/audio/matt/01.mp3")
//     );

//     setSound(sound);
//     await sound.playAsync();
//   }

//   async function unloadSound() {
//     sound.unloadAsync();
//   }

//   async function pauseSound() {
//     try {
//       const status = await sound.getStatusAsync();

//       if (status.isLoaded) {
//         if (status.isPlaying) {
//           sound.pauseAsync();
//         }
//       }
//     } catch (error) {}
//   }

//   React.useEffect(() => {
//     return sound ? unloadSound : undefined;
//   }, [sound]);

//   return (
//     <>
//       <TouchableOpacity style={styles.touchable} onPress={playSound}>
//         <FontAwesome name="play" size={15} color={"teal"} />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.touchable} onPress={pauseSound}>
//         <FontAwesome name="pause" size={15} color={"teal"} />
//       </TouchableOpacity>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   touchable: {
//     alignSelf: "center",

//     width: 40,
//     height: 40,

//     borderRadius: 4,
//     borderColor: "teal",
//     borderWidth: 2,

//     paddingLeft: 14,
//     paddingTop: 10,

//     marginBottom: 16,
//   },
// });
