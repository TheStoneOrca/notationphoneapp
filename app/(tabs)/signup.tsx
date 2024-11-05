import { StyleSheet, View } from "react-native";
import SignUpForm from "../__components/(auth)/signup";

export default function SignUpPage({ navigation }) {
  return (
    <View style={styles.container}>
      <SignUpForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 64,
    alignItems: "center",
  },
});
