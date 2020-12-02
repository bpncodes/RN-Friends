import React from "react";
import { View, Text, Button } from "react-native";

export default function About({ navigation, route }) {
  const count = JSON.stringify(route.params.count);
  function increase() {
    navigation.setParams({ count: Number(count) + 1 });
  }
  console.log(route);
  return (
    <View>
      <Text>ABOUT</Text>
      <Text>{count}</Text>
      <Button onPress={() => navigation.navigate("home")} title="Home"></Button>
      <Button
        onPress={() =>
          navigation.push("about", {
            title: "Pushed to stack",
            count: Number(count) + 1,
          })
        }
        title="GOTO ABOUT AGAIN"
      />
      <Button
        onPress={() => {
          increase();
        }}
        title="Increase It"
      />
      <Button onPress={() => navigation.goBack()} title="GO Back" />
      <Button
        title="Press to change title"
        onPress={() => navigation.setOptions({ title: "Changed!" })}
      />
    </View>
  );
}
