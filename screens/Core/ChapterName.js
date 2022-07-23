import { StyleSheet, View } from "react-native";

import Paragraph from "../../components/Paragraph";

export default function ChapterName({ chapterName }) {
  return (
    <View style={{ paddingBottom: 16 }}>
      {chapterName.split(" | ").map((name, index) => {
        return (
          <Paragraph customStyles={styles.paragraph} key={"text-name-" + index}>
            {name}
          </Paragraph>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    textAlign: "center",
    fontFamily: "comfortaa-bold",
    fontSize: 17,
  },
});
