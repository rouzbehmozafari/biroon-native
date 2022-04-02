import React from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { LightTheme } from '../../../styles/Theme';
import Styles from './Styles';
// const {theme} = useSelector(state => state)
const theme = LightTheme

interface props {
    title: string,
    secondary? : boolean,
    primary? : boolean,
    danger?:boolean,
    disabled?: boolean,
    loading?: boolean,
    onPress?: any,
    style?: any,
}
const CustomButton: React.FC<props> = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return theme.colors.grey;
    }
    if (primary) {
      return theme.colors.primary;
    }
    if (danger) {
      return theme.colors.red;
    }

    if (secondary) {
      return theme.colors.blue;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[Styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[Styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? theme.colors.blue : theme.colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : theme.colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;