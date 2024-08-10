import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { styles } from "./style";
const images = [
  { id: "1", src: require("../../../assets/image1.jpeg") },
  { id: "2", src: require("../../../assets/image2.jpeg") },
  { id: "3", src: require("../../../assets/image11.jpeg") },
  { id: "4", src: require("../../../assets/image4.jpeg") },
  { id: "5", src: require("../../../assets/image10.jpeg") },
  { id: "6", src: require("../../../assets/image9.jpeg") },
  { id: "7", src: require("../../../assets/image3.jpeg") },
  { id: "8", src: require("../../../assets/image7.jpeg") },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/icon-image.jpeg")}
        style={styles.icon}
      />
      <Text style={styles.title}>Imagens Recentes</Text>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Image source={item.src} style={styles.image} />
        )}
      />
    </View>
  );
}
