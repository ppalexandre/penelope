import { React, useState, useEffect } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, StyleSheet, Appearance } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { darkTheme, lightTheme } from "./style";

const CustomBottomTabs = ({ state }) => {
  const navigation = useNavigation();
  const [styles, setStyles] = useState(StyleSheet.create({}));

  const {index, routes} = state;  
  const currentRouteName = routes[index].name;  

  function focusedIcon(routeName, iconFocused, iconUnfocused){
    if(routeName === currentRouteName){
      return (
        <Ionicons style={styles.screenIcon} name={iconFocused} size={40} color="#eee" />
      )
    }
    else{
      return (
        <Ionicons style={styles.screenIcon} name={iconUnfocused} size={40} color="#eee" />
      )
    }
  }

  useEffect(() => {
    const theme = Appearance.getColorScheme();
    if (theme === "light"){
      setStyles(lightTheme);
    }
    else{
      setStyles(darkTheme);
    }
  }, []);

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.screen}
        onPress={() => {
          navigation.navigate("Home")
        }}
      >
        {focusedIcon("Home", "home", "home-outline")}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.screen}
        onPress={() => {
          navigation.navigate("PassarosNavigation")
        }}
      >
        {focusedIcon("PassarosNavigation", "egg", "egg-outline")}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.screen}
        onPress={() => {
          navigation.navigate("Gravacao")
        }}
      >
        {focusedIcon("Gravacao", "mic", "mic-outline")}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.screen}
        onPress={() => {
          navigation.navigate("Avistamentos")
        }}
      >
        {focusedIcon("Avistamentos", "eye", "eye-outline")}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.screen}
        onPress={() => {
          navigation.navigate("Configuracao")
        }}
      >
        {focusedIcon("Configuracao", "settings", "settings-outline")}
      </TouchableOpacity>
    </View>
  );
}

export default CustomBottomTabs;
