import { Platform, StyleSheet } from "react-native";

import Title from "./Title";

export default function SubTitle({ children }) {
  return <Title styling={styles.subTitle}>{children}</Title>;
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 17,
    ...Platform.select({ native: { fontSize: 15 } }),
  },
});
