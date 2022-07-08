import { StyleSheet, Text } from "react-native";

import Albums from "./Albums";

import { allAlbums } from "../../albums/albums";

export default function Menu() {
  return (
    <Text style={styles.text}>
      <Albums albums={allAlbums} navigation={navigation} />
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
});
