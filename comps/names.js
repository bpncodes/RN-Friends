import { Text, StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import { useScreens } from "react-native-screens";

const friends = ["ross", "rachel", "mike", "pheobe", "chandler", "monika"];

export default function Names() {
  const [val, setVal] = useState("ChangeMe");
  return (
    <View>
      {friends.map((val, index) => (
        <Text key={index} style={styles.second}>
          {val.toUpperCase()}
        </Text>
      ))}
      <Text>{val}</Text>
      <TextInput
        placeholder="Enter something"
        onChangeText={(text) => setVal(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  first: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
  },
  second: {
    padding: 10,
  },
});
