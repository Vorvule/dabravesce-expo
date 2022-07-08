import { StyleSheet, View } from "react-native";

import Album from "./Album";

export default function Albums({ albums }) {
  return albums.map((album, key) => {
    return (
      <View style={styles.menu} key={"album-" + key}>
        <Album album={album} keys={key} navigation={navigation} />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    paddingLeft: 18,
  },
});
