import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "twrnc";

function TextScreen(props) {
  return (
    <View style={tw`flex-1 bg-red-400 items-center justify-center`}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default TextScreen;
