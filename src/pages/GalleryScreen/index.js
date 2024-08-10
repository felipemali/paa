import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { styles } from "./style";
const images = [
  { id: "1", src: require("../../../assets/car1.jpeg") },
  { id: "2", src: require("../../../assets/car2.jpeg") },
  { id: "3", src: require("../../../assets/image15.jpeg") },
  { id: "4", src: require("../../../assets/image16.jpeg") },
  { id: "5", src: require("../../../assets/image18.jpeg") },
  { id: "6", src: require("../../../assets/image1.jpeg") },
  { id: "7", src: require("../../../assets/image2.jpeg") },
  { id: "8", src: require("../../../assets/image11.jpeg") },
  { id: "9", src: require("../../../assets/image4.jpeg") },
  { id: "10", src: require("../../../assets/car3.jpeg") },
  { id: "11", src: require("../../../assets/image10.jpeg") },
  { id: "12", src: require("../../../assets/image9.jpeg") },
  { id: "13", src: require("../../../assets/image3.jpeg") },
  { id: "14", src: require("../../../assets/image7.jpeg") },
  { id: "15", src: require("../../../assets/image5.jpeg") },
  { id: "16", src: require("../../../assets/image6.jpeg") },
  { id: "17", src: require("../../../assets/image8.jpeg") },
  { id: "18", src: require("../../../assets/image12.jpeg") },
  { id: "19", src: require("../../../assets/image17.jpeg") },
];

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/galeria.jpeg")}
        style={styles.icon}
      />
      <Text style={styles.title}>Sua galeria</Text>
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
