import React from "react";
import { Text, View, Button } from "react-native";
import Names from "./comps/names";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./comps/Home";
import About from "./comps/About";
import CoolElement from "./comps/elements";

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "HOME IT",
            headerRight: () => (
              <Button title="PAYMENT" onPress={() => alert("Pressed")} />
            ),
          }}
          initialParams={{ name: "Default Parameter passed from home" }}
        ></Stack.Screen>
        <Stack.Screen
          name="about"
          component={About}
          options={({ route }) => ({
            title: route.params.title,
            headerRight: () => (
              <Button
                title="Address"
                onPress={() => alert("Changed Address")}
              ></Button>
            ),
          })}
        ></Stack.Screen>
        <Stack.Screen component={CoolElement} name="Elemento"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
