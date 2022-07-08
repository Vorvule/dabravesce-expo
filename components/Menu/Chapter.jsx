import { Text } from "react-native";

export default function Chapter({ chapter, keys, navigation }) {
  const handlePress = () => {
    console.log(keys);
    navigation.navigate("Дабравесце")
    // window.setKeys(keys)
  };

  return (
    <Text onPress={handlePress}>{chapter.name.replace(/ \| .+/, "")}</Text>
  );
}
