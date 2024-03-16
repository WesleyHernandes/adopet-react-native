import { ImageBackground, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function PaginaBase({ children }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/Vector.png")}
        style={styles.backgroundImage}
        imageStyle={{
          resizeMode: "cover",
          height: 300, // the image height
          top: 0,
        }}
      >
        {children}
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
  },
});
