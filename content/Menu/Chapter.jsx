import { useContext, useState } from "react";
import { NavigationContext } from "@react-navigation/native";
import { ChainContext } from "../BottomTabs";

import MenuItem from "../components/MenuItem";

export default function Chapter({ chapter, keys }) {
  const navigation = useContext(NavigationContext);
  const chainContext = useContext(ChainContext);

  const [styling, setStyling] = useState({});

  const chain = getChain(keys);

  const handlePress = () => {
    navigation.navigate("Тэкст", { chain });

    chainContext.setChain(chain);

    setStyling({ color: "teal" });
  };

  return (
    <MenuItem styling={styling} onPress={handlePress}>
      {cleared(chapter.name)}
    </MenuItem>
  );
}

const cleared = (name) => {
  return name.replace(/ \| .+/, "");
};

const getChain = (keys) => {
  return keys.split("-").map((key) => Number(key));
};
