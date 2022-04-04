import React from "react"
import { View } from "react-native";
import DarkMode from "../../molecules/darkMode/Index";
import { Login } from "../../organisms/Login/Index";

const LoginRegister = () => {
  return (
    <View>
      <Login/>
      <DarkMode/>
    </View>
  );
};

export default LoginRegister;