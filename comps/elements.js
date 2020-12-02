import { Button } from "react-native-elements";
import React from "react";
import { Text, View } from "react-native";

const CoolElement = () => (
  <View>
    <Text>This is a text</Text>
    <Button title="Press Cool!" onPress={() => alert("Cool Button!")}></Button>
  </View>
);

export default CoolElement;
