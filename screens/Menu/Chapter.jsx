import { Text } from "react-native";

import MenuItem from "../../components/MenuItem";
import Paragraph from "../../components/Paragraph";

export default function Chapter({ chapter, keys, navigation }) {
  const handlePress = () => {
    navigation.navigate("Тэкст");
    // window.setKeys(keys)

    console.log(keys);
  };

  return (
    <MenuItem>
      <Text onPress={handlePress}>
        <Paragraph>{chapter.name.replace(/ \| .+/, "")}</Paragraph>
      </Text>
    </MenuItem>
  );
}
