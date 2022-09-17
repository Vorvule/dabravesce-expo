import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import MenuItem from "../../components/MenuItem";

export default function Chapter({ bookName, chapter, keys }) {
  const navigation = useContext(NavigationContext);

  const handlePress = () => {
    navigation.navigate("Тэкст", { ...chapter, bookName, keys });
    // window.setKeys(keys);
  };

  return (
      <MenuItem onPress={handlePress}> 
      {/* styling={{ color: "teal" }} */}
        {chapter.name.replace(/ \| .+/, "")}
      </MenuItem>
  );
}
