import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
export default function SettingsScreen() {
  return (
    <ImageBackground
      source={require("../../../assets/bb.jpeg")}
      style={styles.container}
    >
      <Image
        source={require("../../../assets/settings.jpeg")}
        style={styles.icon}
      />
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingItem}>
          <Image
            source={require("../../../assets/account.jpeg")}
            style={styles.icon}
          />
          <Text style={styles.settingText}>Minha Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Image
            source={require("../../../assets/notification.jpeg")}
            style={styles.icon}
          />
          <Text style={styles.settingText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Image
            source={require("../../../assets/cadeado.jpeg")}
            style={styles.icon}
          />
          <Text style={styles.settingText}>Privacidade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Image
            source={require(".../../../assets/ajuda.jpeg")}
            style={styles.icon}
          />
          <Text style={styles.settingText}>Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Image
            source={require("../../../assets/sair.jpeg")}
            style={styles.icon}
          />
          <Text style={styles.settingText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
