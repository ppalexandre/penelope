import { StyleSheet } from "react-native";

import { lightColors, darkColors } from "../../styles/sharedColors";

function setThemeColors(theme){

  // Light
  if (theme === "light"){
    var mainBackground = lightColors.mainBackground;
    var header = lightColors.header;
    var headerFontColor = "#081510";
    var fontColor = lightColors.fontColor;
    var carouselContainerBackground = "#505550";
    var carouselPaginationBar = "#1d4d3b";
    var artigoInfoColor = "#c1f8d5";
    var boldFontColor = "#0f3024";
  }
  // Dark
  else {
    var mainBackground = darkColors.mainBackground;
    var header = darkColors.header;
    var headerFontColor = "#e0e0e0";
    var fontColor = darkColors.fontColor;
    var carouselContainerBackground = "#151718";
    var carouselPaginationBar = "#151617";
    var artigoInfoColor = "#0f1011";
    var boldFontColor = "#20b655";
  }

  return StyleSheet.create({
    mainView:{
      flex: 1,
      backgroundColor: mainBackground,
    },

    mainScrollView:{
      flex: 1,
    },

    header:{
      backgroundColor: header,
      flexDirection: "row",
      alignItems: "center",
      alignContent: "space-between",
      width: "100%",
      height: 70,
      boxShadow: "3px 3px 20px #00000077",
    },

    headerTitle:{
      width: "70%",
      textAlign: "center",
      color: headerFontColor,
      fontSize: 23,
      fontWeight: "bold",
      textWrap: "nowrap",
      textOverflow: "ellipsis",
    },

    headerButton:{
      width: "15%",
    },

    headerVectorIcon:{
      color: headerFontColor,
      textAlign: "center",
    },

    passaroCarouselContainer:{
      backgroundColor: carouselContainerBackground,
      width: "100%",
      aspectRatio: "16 / 9",
    },
    
    passaroCarouselImage:{
      width: "100%",
      aspectRatio: "16 / 9",
      resizeMode: "contain",
    },

    passaroCarouselPaginationBar:{
      width: "100%",
      backgroundColor: carouselPaginationBar,
      padding: 5,
      boxShadow: "3px 3px 20px #00000077",
    },

    passaroCarouselPagination:{
      border: 0,
      gap: 5,
    },

    passaroCarouselPaginationDot:{
      backgroundColor: "#f0f0f0",
      borderRadius: 15,
      border: 0,
    },

    passaroCarouselPaginationActiveDot:{
      backgroundColor: "#308050",
    },

    artigoInfoContainer:{
      width: "100%",
      height: 200,
      backgroundColor: artigoInfoColor,
      padding: 15,
      paddingTop: 18,
      borderBottomWidth: 1,
      borderColor: "#55555555",
      display: "flex",
      flexDirection: "column",
    },

    artigoNomesContainer:{
      width: "100%",
      flex: 1,
    },

    artigoNomePopular:{
      fontSize: 35,
      fontWeight: "bold",
      color: boldFontColor,
    },

    artigoNomeBinomial:{
      fontSize: 20,
      fontStyle: "italic",
      color: fontColor,
    },

    artigoEnvergadura:{
      color: fontColor,
    },

    estadoConservacaoContainer:{
      justifySelf: "flex-end",
      display: "flex",
      flexDirection: "row",
    },

    estadoConservacaoBadge:{
      width: 55,
      height: 45,
      padding: 5,
      paddingTop: 6,
      marginLeft: 3,
      marginBottom: 8,
      borderRadius: "25%",
      backgroundColor: "#333333",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      boxShadow: "2px 5px 10px #00000033",
    },

    estadoConservacaoSigla:{
      color: "#f0f0f0",
      fontWeight: "bold",
      fontSize: 32,
    },

    estadoConservacaoNomes:{
      marginLeft: 15,
    },

    estadoConservacaoEnglish:{
      color: boldFontColor,
      fontWeight: "bold",
      fontStyle: "italic",
      fontSize: 20,
    },

    estadoConservacaoPortuguese:{
      color: fontColor,
      fontSize: 16,
    },

    artigoDescricaoContainer:{
      padding: 15,
    },

    artigoDescricaoTitle:{
      color: boldFontColor,
      fontWeight: "bold",
      fontSize: 28,
    },

    artigoDescricao:{
      color: fontColor,
      fontSize: 18,
      marginLeft: 5,
      marginTop: 5,
    },

    artigoCantoContainer:{
    },

    artigoMapaContainer:{
    },

    vectorIcon:{
      color: fontColor,
      textAlign: "center",
    },
  })
}

const lightTheme = setThemeColors("light");
const darkTheme = setThemeColors("dark");

export {lightTheme, darkTheme};
