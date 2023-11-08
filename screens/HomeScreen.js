import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button, List } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const [signInUserName, setSignInUserName] = useState();
  const [signInPW, setSignInPW] = useState();
  const [createUserName, setCreateUserName] = useState();
  const [createUserFName, setCreateUserFName] = useState();
  const [createUserLName, setCreateUserLName] = useState();
  const [createUserPW, setCreateUserPW] = useState();

  const authenticateUser = async () => {
    setSignInUserName("");
    setSignInPW("");
  };

  const createUser = async () => {
    setCreateUserFName("");
    setCreateUserLName("");
    setCreateUserName("");
    setCreateUserPW("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Sign In</Text>
        <TextInput
          label="Username"
          style={styles.inputs}
          onChangeText={setSignInUserName}
          value={signInUserName}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          label="Password"
          style={styles.inputs}
          onChangeText={setSignInPW}
          value={signInPW}
        ></TextInput>
        <Button
          mode="contained"
          style={styles.button}
          onPress={authenticateUser}
        >
          Sign In
        </Button>
      </View>

      <View>
        <Text style={styles.header}>Create Account</Text>
        <TextInput
          label="First Name"
          style={styles.inputs}
          onChangeText={setCreateUserFName}
          value={createUserFName}
        ></TextInput>
        <TextInput
          label="Last Name"
          style={styles.inputs}
          onChangeText={setCreateUserLName}
          value={createUserLName}
        ></TextInput>
        <TextInput
          label="Username"
          style={styles.inputs}
          onChangeText={setCreateUserName}
          value={createUserName}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          label="Password"
          style={styles.inputs}
          onChangeText={setCreateUserPW}
          value={createUserPW}
        ></TextInput>
        <Button mode="contained" style={styles.button} onPress={createUser}>
          Sign Up
        </Button>
      </View>

      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={styles.button}
      >
        Go to Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  inputs: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});
