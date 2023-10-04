import { Dimensions } from "react-native";
 
const {height} = Dimensions.get("screen")


export const Colors = {
    primary: "#DA2F40",
    secondary: "#f2c94c",
    tertiary: "#232323",
    black: "#000",
    white: "#FFFFFF",
    gray: "#74858C",
    lightGray: "#a3a3a3",
    green:"#009206",
    red:'#ff0000',
    blue:'#3c5bfa',
    gradientGray:'#f7f7f7',
    lightGreen:"#3A544F"
}
export const SIZES = {
    base: 8,
    small: 10,
    medium: 12,
    large: 14,
    extraLarge: 16,
    superLarge:24,
    superExtraLarge:32
  };
  export const FONTS = {
    bold: "MontserratBold",
    semiBold: "MontserratSemiBold",
    medium: "MontserratMedium",
    regular: "MontserratRegular",
    light: "MontserratLight",
  };
  

  export const HEIGHT = {
    small: {
      height:height/7,
    },
    medium: {
      height:height/2.5
    },
    large: {
      height:height/1.9
    },
  }
  
  export const RADIUS = {
    extrasmall: {
      borderRadius:6,
    },
    small: {
      borderRadius:8,
    },
    medium: {
      borderRadius:10
    },
    minmedium: {
      borderRadius:12
    },
    large: {
      borderRadius:14
    },
    larger: {
      borderRadius:16
    },
    Extralarge: {
      borderRadius:18
    },
  }
  

