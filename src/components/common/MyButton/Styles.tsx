import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { LightTheme } from "../../../styles/Theme";


// const {theme} = useSelector(state => state)
const theme = LightTheme
export default StyleSheet.create({
    wrapper: {
      height: 42,
      paddingHorizontal: 5,
  
      marginVertical: 5,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  
    loaderSection: {
      flexDirection: 'row',
    },
  
    textInput: {
      flex: 1,
      width: '100%',
    },
    title : {
      color: theme.colors.primary,
      fontWeight: "bold",
    },
    error: {
      color: theme.colors.red,
      paddingTop: 4,
      fontSize: 12,
    },
  });