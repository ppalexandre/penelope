import { StyleSheet } from "react-native";

import { lightColors, darkColors } from "../../styles/sharedColors";

function setThemeColors(theme){

  // Light
  if (theme === "light"){
    var mainBackground = "#57a466";
    var fontColor = "#08170c";
  }
  // Dark
  else {
    var mainBackground = "#101e10";
    var fontColor = "#f0f0f0";
  }

  return StyleSheet.create({
    container:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 8,
      backgroundColor: mainBackground,
    },

    screenIcon:{
      justifyContent: 'center',
      alignSelf: 'center',
      color: fontColor,
    },

    screen:{
      width: "20%"
    },

    screenText:{
      fontSize: 13,
      color: fontColor,
      alignSelf: "center",
      marginTop: 2,
    },
  })
}

const lightTheme = setThemeColors("light");
const darkTheme = setThemeColors("dark");

export {lightTheme, darkTheme};
