import {
  ColorValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = () => {
  const getButton = (icon: ImageSourcePropType, tintColor?: ColorValue) => {
    return (
      <TouchableOpacity onPress={() => console.log("Don't press")}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{height: 30, width: 30, tintColor}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding,
      }}>
      {getButton(icons.menu, COLORS.black)}
      <Text style={{...FONTS.navTitle, color: COLORS.gray, fontWeight: '200'}}>
        SHOE SELECTOR
      </Text>
      {getButton(icons.search, COLORS.gray)}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
