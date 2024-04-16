import React from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { StylesSheet } from "../Style/StylesSheet";

const image = require('../assets/StartBG.png');

function Welcome({navigate}){
  return (
    <View style={{flex:1}}>
      <ImageBackground source={image} style={StylesSheet.BackgroundImage} resizeMode="cover">
        <TouchableOpacity onPress={navigate} style={StylesSheet.welcomeButton}>
            <Text style={StylesSheet.WelcomeButtonText}>Begin</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Welcome;