import { createContext } from "react";
import { StyleSheet, View } from "react-native";

import Albums from "./Albums";

import { allAlbums } from "../../assets/albums/albums";

const NavigationContext = createContext();

export default function Menu({ navigation }) {
  return (
    <NavigationContext.Provider value={navigation}>
      <View style={styles.view}>
        <Albums albums={allAlbums} /*navigation={navigation}*/ />
      </View>
    </NavigationContext.Provider>
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
