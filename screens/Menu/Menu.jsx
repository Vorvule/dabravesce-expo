import { StyleSheet, View } from "react-native";

import Albums from "./Albums";

import { allAlbums } from "../../albums/albums";

export default function Menu({ navigation }) {
  return (
    <View style={styles.view}>
      <Albums albums={allAlbums} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    padding: 16,

    backgroundColor: "lightyellow",
  },
});
