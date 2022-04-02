// @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
// @font-face {
//     font-family: 'Ubuntu', sans-serif;
//     src: url(../assets/fonts/ubuntu/Ubuntu-Regular.ttf) format('truetype');
// }

import {StyleSheet, Dimensions} from 'react-native'

// font-family: 'Ubuntu', sans-serif;


  const palette = {
    primary: '#252A34',
    blue: '#08D9D6',
    red: '#FF2E63',
    black: '#252A34',
    white: '#F0F2F3',
    grey: '#EAEAEA'
  }
  export const componentStyles = {
    sizes: {
      widthSwitchWithText: 100
    },
  }
  
  export const LightTheme = {
    dimensions : {
      fullHeight: Dimensions.get('window').height,
      fullWidth: Dimensions.get('window').width
    },
    colors: {
      primary: palette.primary,
      red: palette.red,
      blue: palette.blue,
      grey: palette.grey,
      white: palette.white,
      background: palette.white,
      foreground: palette.grey,
      success: palette.blue,
      danger: palette.red,
      failure: palette.red,
    },
    spacing: {
      s: 8,
      m: 16,
      l: 24,
      xl: 40,
    },
    textVariants: {
      header: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 36,
        fontWeight: 'bold',
      },
      body: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 16,
      },
    }
  };
  
  export const DarkTheme = {
    ...LightTheme,
    colors: {
      ...LightTheme.colors,
      background: palette.black,
      foreground: palette.white,
    },
  }