import { Text } from "react-native";

// window.setKeys(keys)

export default function Chapter({ chapter, keys }) {
  const handlePress = () => {
    console.log(keys);
  };

  return (
    <Text onPress={handlePress}>{chapter.name.replace(/ \| .+/, "")}</Text>
  );
}
