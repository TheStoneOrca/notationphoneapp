import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function SignUpForm({ navigation }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSubmit = () => {
    try {
      const userData = {
        username: username?.trimEnd().trimStart(),
        password: password?.trimEnd().trimStart(),
        email: email?.trimEnd().trimStart(),
      };
      if (!username || !password || !email)
        return setError("Not all data inputted.");
      if (
        /\s/.test(userData.username) ||
        /\s/.test(userData.password) ||
        /\s/.test(userData.email)
      ) {
        return setError("Form data cannot include spaces.");
      }

      if (/\S+@\S+\.\S+/.test(userData.email) == false) {
        return setError("Input must be a vaild email.");
      }

      fetch(`${process.env.APIURL}/signup`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        if (!response.ok) {
          if (response.status == 401) {
            return setError("Username or email already in use.");
          } else {
            return setError("Unexpected Error, please try again later.");
          }
        }
        response.json().then((res) => {
          AsyncStorage.setItem("userAuthToken", res.JWT);
          navigation.navigate("Create");
        });
      });
    } catch (error) {
      console.error(error);
      setError("Unexpected Server Issue, please try again later.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <Text style={{ fontSize: 16 }}>Sign Up</Text>
        <TextInput
          value={username}
          onChangeText={(newUsername) => setUsername(newUsername)}
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="gray"
        />
        <TextInput
          value={password}
          onChangeText={(newPassword) => setPassword(newPassword)}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="gray"
        />
        <TextInput
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
        />

        <Pressable style={styles.button}>
          <Text style={{ color: "white" }} onPress={onSubmit}>
            Sign In
          </Text>
        </Pressable>
      </View>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 300,
    width: 285,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    backgroundColor: "white",
    borderRadius: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  formcontainer: {
    gap: 23,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 256,
    borderRadius: 4,
    paddingVertical: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 256,
    backgroundColor: "black",
  },
});
