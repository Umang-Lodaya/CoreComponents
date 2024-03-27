import { Text, View, Image, ImageBackground } from "react-native";

const localImage = require("./assets/adaptive-icon.png")

export default App = () => {
  return <View style={{ flex: 1, padding: 60, backgroundColor: "plum" }}>
    {/* <View style={{ backgroundColor: "lightblue", height: 200, width: 200 }}></View> */}
    {/* <View style={{ backgroundColor: "lightgreen", height: 200, width: 200 }}></View> */}
    {/* <Text>
      <Text style={{ color: "green" }}>Hello</Text> World
    </Text> */}

    {/* <Image source={localImage} style={{ height: 300, width: 300 }} /> */}
    {/* <Image source={{ uri: "https://picsum.photos/300" }} style={{ height: 300, width: 300 }} /> */}
    <ImageBackground source={localImage} style={{ flex: 1 }}>
      <Text>
        Image Text
      </Text>
    </ImageBackground>

  </View>
}