import React from "react";
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Linking} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const colorGitHub = "#010409"
const imageProfile = "https://github.com/petry078.png"
const colorText = "#C9D1D9"
const colorText2 = "#4F565E"

const App = () => {
  return (
    <SafeAreaView style={style.container}>
    <StatusBar backgroundColor={colorGitHub} barStyle={"dark-content"}/>
    
    <View style={style.content}>
      <Image style={style.avatar} source={{uri: imageProfile}}/>
    </View>


    <Text style={[style.texto, style.name]}>Guilherme M. Petry</Text>
    <Text style={[style.texto, style.description]}>Desenvolvedor Full Stack Web & Mobile</Text>
    <Text> </Text>
    <Text style={[style.texto, style.techStack]}>[ Java | Spring Boot | JavaScript | HTML | CSS |  Bootstrap | Angular | React | React Native ]</Text>
    <Text> </Text>

    <View style={style.socialIcons}>
    <FontAwesome name="github-square" size={24} color="white" onPress={() => Linking.openURL("https://github.com/petry078")}/>
    <FontAwesome name="linkedin-square" size={24} color="white" onPress={() => Linking.openURL("https://linkedin.com/in/petry078")}/>
    <FontAwesome name="codepen" size={24} color="white" onPress={() => Linking.openURL("https://codepen.io/petry078")}/>
    <Image style={style.reported} source={"https://i.imgur.com/BifCrYT.png"} onPress={() => Linking.openURL("https://reported.space")}/>
    </View>

    <Text> </Text>
    <Text style={[style.texto]}>petry078@gmail.com</Text>
    <Text style={[style.texto]}>+55 (11) 98627-3820</Text>
    <Text style={[style.texto]} onPress={() => Linking.openURL("https://petry078.github.io")}>https://petry078.github.io</Text>
    
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2
  },
  texto: {
    color: colorText,
    textAlign: "center"
  },
  name: {
    fontSize: 40
  },
  description: {
    color: colorText2
  },
  techStack: {
    color: colorText,
    fontWeight: "bold"
  },
  socialIcons:{
    flexDirection: "row",
    gap: 15
  },
  reported:{
    height: 25,
    width: 25
  }
})