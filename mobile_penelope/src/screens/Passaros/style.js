import { StyleSheet } from "react-native";

import { lightColors, darkColors } from "../../styles/sharedColors";

function setThemeColors(theme){

  // Light
  if (theme === "light"){
    var mainBackground = lightColors.mainBackground;
    var header = lightColors.header;
    var subHeader = "#7fdf9f";
    var fontColor = lightColors.fontColor;
    var rowOdd = '#a0d0c0';
    var rowEven = '#b0e0d0';
  }
  // Dark
  else {
    var mainBackground = darkColors.mainBackground;
    var header = darkColors.header;
    var subHeader = "#123012";
    var fontColor = darkColors.fontColor;
    var rowOdd = '#194019';
    var rowEven = '#225222';
    // var mainBackground = "#193919";
    // var header = "#102010";
    // var subHeader = "#123012";
    // var fontColor = "#f0f0f0";
    // var rowOdd = '#194019';
    // var rowEven = '#225222';
  }

  return StyleSheet.create({
    mainView:{
      flex: 1,
      backgroundColor: mainBackground,
    },

    mainScrollView:{
      flex: 1,
    },

    topFlexRowHeader:{
      flexDirection: "row",
      alignItems: "space-between",
      justifyContent: "center",
      alignContent: "space-between",
      paddingTop: 15,
      paddingBottom: 28,
      width: "100%",
      height: 70,
      backgroundColor: header,
    },

    searchBar:{
      width: "85%",
      flexDirection: "row",
      height: 45,
      backgroundColor: "#335533aa",
      justifyContent: "center",
      borderRadius: 15,
    },

    searchBarInput:{
      fontSize: 20,
      padding: 3,
      marginLeft: 5,
      width: "88%",
      color: fontColor,
    },

    searchBarIcon:{
      width: "10%",
      marginTop: 2,
      marginLeft: 5,
      alignSelf: "center",
    },

    filterButton:{
      marginLeft: 5,
    },

    searchButton:{
      marginLeft: 5,
    },

    sortFlexRowHeader:{
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      height: 50,
      backgroundColor: subHeader,
      boxShadow: "3px 10px 20px #00000077",
    },

    passarosExibidos:{
      fontSize: 22,
      marginLeft: 10,
      color: fontColor,
      width: "60%",
    },

    sortByButton:{
      width: "10%",
    },

    listScrollView:{
      width: "100%",
    },

    listImagePreview:{
      width: 64,
      height: 64,
      margin: 5,
      borderRadius: "10%",
      borderColor: "#ffffff22",
      borderWidth: 1,
    },

    listRow:{
      width: "100%",
      flex: 1,
      flexDirection: "row",
    },

    listPassaroInfo:{
      flex: 1,
      width: "80%",
      marginLeft: 5
    },

    listNomePopularText:{
      fontSize: 25,
      marginTop: 5,
      marginLeft: 2,
      color: fontColor,
    },

    listMiscInfo:{
      flex: 1,
      flexDirection: "row",
      marginTop: 5,
    },

    listNomeBinomialText:{
      fontSize: 18,
      color: fontColor,
    },

    listEstadoConservacaoBadge:{
      width: 25,
      height: 18,
      padding: 5,
      marginLeft: 7,
      marginTop: 2,
      borderRadius: "15%",
      backgroundColor: "#016767",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
    },

    listEstadoConservacaoText:{
      color: "#f0f0f0",
      fontWeight: "bold",
    },

    listEnvergaduraText:{
      marginLeft: 6,
      marginTop: 2,
      fontSize: 16,
      color: fontColor,
    },

    listFavoritePassaroButton:{
      alignSelf: "center",
      marginBottom: 5,
      marginRight: 15
    },

    rowEven:{
      backgroundColor: rowEven,
      boxShadow: "5px 5px 20px #00000077",
    },

    rowOdd:{
      backgroundColor: rowOdd,
      boxShadow: "5px 5px 20px #00000077",
    },

    gridView:{
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
    },

    gridItem:{
      width: "1fr",
      aspectRatio: "1 / 1",
      margin: 5,
    },

    gridImage:{
      width: "100%",
      height: "100%",
      borderRadius: "5%",
      boxShadow: "5px 5px 20px #00000077",
      borderColor: "#ffffff22",
      borderWidth: 1,
    },

    gridGradient:{
      width: "100%",
      height: "100%",
      borderRadius: "5%",
      backgroundImage: "linear-gradient(#00000055, #00000000, #00000055)",
    },

    gridUpperInfo:{
      width: "100%",
      height: "80%",
      padding: 2,
    },

    gridNomePopularText:{
      marginTop: 5,
      marginLeft: 2,
      fontSize: 25,
      color: fontColor,
      textShadow: "3px 2px 5px #000000aa",
    },

    gridNomeBinomialText:{
      fontSize: 18,
      color: fontColor,
      textShadow: "3px 2px 5px #000000aa",
    },

    gridFavoritePassaroButton:{
      alignSelf: "flex-end",
      marginBottom: 5,
      marginRight: 8,
      textShadow: "3px 5px 5px #00000088",
    },

    gridBottomInfo:{
      width: "100%",
      height: "20%",
      flexDirection: "row",
    },

    gridMiscInfo:{
      width: "80%",
      height: "100%",
      flexDirection: "row",
    },

    gridEstadoConservacaoBadge:{
      width: 25,
      height: 18,
      padding: 5,
      margin: 5,
      borderRadius: "15%",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      alignSelf: "flex-end",
      boxShadow: "5px 5px 20px #00000077",
    },

    gridEstadoConservacaoText:{
      color: "#f0f0f0",
      fontWeight: "bold",
    },

    gridEnvergaduraText:{
      margin: 5,
      fontSize: 16,
      color: fontColor,
      alignSelf: "flex-end",
      textShadow: "3px 5px 5px #00000088",
    },

    vectorIcon:{
      color: fontColor,
    },
  })
}

const lightTheme = setThemeColors("light");
const darkTheme = setThemeColors("dark");

export {lightTheme, darkTheme};
