import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Malz" && password === "1234") {
      Alert.alert("Login Successful", `Welcome ${username}!`);
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.textInputs}
        placeholder="Enter your username"
        placeholderTextColor="white"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textInputs}
        placeholder="Enter your password"
        placeholderTextColor="white"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Submit" onPress={handleLogin}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputs: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "black",
    color: "#ffffff",
    width: 300,
  },
});
