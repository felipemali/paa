import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./style";
import imageQuiz from "../../../assets/quiz.png";
import { useAuth } from "../../provider/Auth";

const Login = ({ navigation }) => {
  const { loginCorrect, login } = useAuth();

  const [loginUser, setLoginUser] = useState({
    user: "",
    password: "",
  });
  const updateUser = (user) => {
    setLoginUser((prevState) => ({ ...prevState, user: user }));
  };
  const updatePassword = (password) => {
    setLoginUser((prevState) => ({ ...prevState, password: password }));
  };

  const verification = () => {
    if (
      loginCorrect.user === loginUser.user &&
      loginCorrect.password === loginUser.password
    ) {
      login();
    }

    setLoginUser({ user: "", password: "" });
  };

  return (
    <ImageBackground
      source={{
        uri: "https://www.fonewalls.com/wp-content/uploads/2023/05/Nature-4K-Wallpaper-2160x3840-289.jpg",
      }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.header}>
          <FontAwesome5 name="question-circle" size={36} color="#000" />
          <Text style={styles.title}>Quiz Login</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={updateUser}
          placeholder="Usuário..."
          placeholderTextColor="#343a40"
        />
        <TextInput
          style={styles.input}
          onChangeText={updatePassword}
          placeholder="Senha..."
          placeholderTextColor="#343a40"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loginButton} onPress={verification}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;
