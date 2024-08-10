import React from "react";
import { Text, Image, ImageBackground } from "react-native";
import { styles } from "./style";

export default function ProfileScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/bb.jpeg")}
      style={styles.container}
    >
      <Text style={styles.title}>Perfil</Text>
      <Image
        source={require("../../../assets/user.jpeg")}
        style={styles.icon}
      />
      <Text style={styles.name}>Felipe Lima</Text>
      <Text style={styles.info}>Email: felipe.native@gmail.com</Text>
      <Text style={styles.info}>Phone: (067) 99999-9999</Text>
      <Text style={styles.info}>Local: Dois Irmãos, MS</Text>
    </ImageBackground>
  );
}
