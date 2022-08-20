import { StyleSheet } from "react-native";

import Paragraph from "../../components/Paragraph";

export default function ChapterName({ chapterName }) {
  return chapterName.split(" | ").map((name, index) => {
    return (
      <Paragraph customStyles={styles.paragraph} key={"chapter-" + index}>
        {name}
      </Paragraph>
    );
  });
}

const styles = StyleSheet.create({
  paragraph: {
    textAlign: "center",
    fontFamily: "comfortaa-bold",
    fontSize: 17,
  },
});
