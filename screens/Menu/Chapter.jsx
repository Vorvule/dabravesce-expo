import { Text } from "react-native";

import Paragraph from "../../components/Paragraph";

export default function Chapter({ chapter, keys, navigation }) {
  const handlePress = () => {
    console.log(keys);
    navigation.navigate("Тэкст");
    // window.setKeys(keys)
  };

  return (
    <Text onPress={handlePress}>
      <Paragraph>{chapter.name.replace(/ \| .+/, "")}</Paragraph>
    </Text>
  );
}
