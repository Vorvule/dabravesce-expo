import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import { Text } from "react-native";

import MenuItem from "../../components/MenuItem";
import Paragraph from "../../components/Paragraph";

export default function Chapter({ bookName, chapter, keys }) {
  const navigation = useContext(NavigationContext);

  const handlePress = () => {
    navigation.navigate("Тэкст", { ...chapter, bookName, keys });
    // window.setKeys(keys);
  };

  return (
    <MenuItem>
      <Text onPress={handlePress}>
        <Paragraph customStyles={{ color: "teal" }}>
          {chapter.name.replace(/ \| .+/, "")}
        </Paragraph>
      </Text>
    </MenuItem>
  );
}
