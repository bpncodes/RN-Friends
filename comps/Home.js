import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CoolElement from "./elements";

export default function Home({ navigation, route }) {
  return (
    <View>
      <Text styles={styles.container}>HOME SCREEN</Text>
      <Text>{JSON.stringify(route.params.name).toUpperCase()}</Text>
      <Button
        style={styles.container}
        onPress={() =>
          navigation.navigate("about", { title: "Title Changed!", count: 0 })
        }
        title="About"
      />
      <Button onPress={() => navigation.navigate("home")} title="Home" />
      <Button
        onPress={() => navigation.navigate("Elemento")}
        title="React Native Element"
      />
      <CoolElement></CoolElement>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
    padding: 10,
    margin: 20,
    color: "pink",
  },
});
