import { createContext } from "react";
import { Platform, StyleSheet } from "react-native";

import Albums from "./Albums";

import { allAlbums } from "../../assets/albums/albums";
import { Screen } from "../../components/Screen";
import Title from "../../components/Title";

const NavigationContext = createContext();

export function Menu({ navigation }) {
  return (
    <NavigationContext.Provider value={navigation}>
      <Screen>
        <Title styling={styles.title}>Дабравесце</Title>
        <Title styling={styles.subtitle}>Слова Божае</Title>

        <Albums albums={allAlbums} />
      </Screen>
    </NavigationContext.Provider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    ...Platform.select({
      native: { fontSize: 16 },
    }),
  },

  subtitle: {
    fontSize: 17,
    ...Platform.select({
      native: { fontSize: 15 },
    }),
  },
});
