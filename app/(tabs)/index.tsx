import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";

export default function CreateScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Create</Text>
      <Button title="New Group" />
      <Button title="Sign Up" onPress={() => navigation.navigate("Sign Up")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
