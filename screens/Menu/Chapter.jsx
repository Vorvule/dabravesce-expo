import { Text } from "react-native";

import MenuItem from "../../components/MenuItem";
import Paragraph from "../../components/Paragraph";

export default function Chapter({ chapter, navigation, keys }) {
  const handlePress = () => {
    navigation.navigate("Тэкст", { ...chapter, keys });
    // window.setKeys(keys)
  };

  return (
    <MenuItem>
      <Text onPress={handlePress}>
        <Paragraph customStyles={{color: 'teal'}}>{chapter.name.replace(/ \| .+/, "")}</Paragraph>
      </Text>
    </MenuItem>
  );
}
