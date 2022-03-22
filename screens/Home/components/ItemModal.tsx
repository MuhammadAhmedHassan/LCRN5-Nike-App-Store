import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {TrendigItemType} from '../../../types';
import {BlurView} from '@react-native-community/blur';
import {COLORS, FONTS, SIZES} from '../../../constants';

interface IProps {
  selectedItem: TrendigItemType;
  setSelectedItem: (item: TrendigItemType | null) => void;
}

const ItemModal = ({selectedItem, setSelectedItem}: IProps) => {
  const {bgColor, img, name, price, type, sizes} = selectedItem;

  const renderSizes = () => (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <Text
        style={{
          ...FONTS.h4,
          lineHeight: undefined,
          color: COLORS.white,
          marginTop: SIZES.font,
        }}>
        Select size
      </Text>

      {sizes.map(size => (
        <View
          key={size}
          style={{
            borderWidth: 1,
            borderColor: COLORS.white,
            borderRadius: 4,
            marginLeft: SIZES.font,
            minWidth: 35,
            minHeight: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.font,
          }}>
          <Text
            style={{...FONTS.h5, lineHeight: undefined, color: COLORS.white}}>
            {size}
          </Text>
        </View>
      ))}
    </View>
  );

  const renderAddToCart = () => (
    <View
      style={{
        width: '100%',
        height: 70,
        marginTop: SIZES.font,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}>
      <Text style={{...FONTS.h2, color: COLORS.white, fontWeight: '300'}}>
        Add to Bag
      </Text>
    </View>
  );
  return (
    <Modal style={{flex: 1}}>
      <BlurView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor="white">
        {/* Button to close modal */}
        <TouchableOpacity
          style={[styles.absolute]}
          onPress={() => {
            setSelectedItem(null);
          }}></TouchableOpacity>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: bgColor,
              width: '90%',
              borderRadius: 10,
              marginTop: 80,
              minHeight: 440,
              justifyContent: 'flex-end'
            }}>
            <Image
              source={img}
              resizeMode="contain"
              style={{
                height: 180,
                width: '90%',
                transform: [{rotate: '-15deg'}],
                // marginBottom: SIZES.padding,
                position: 'absolute',
                top: -25,
              }}
            />
            <View
              style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
              }}>
              <Text
                style={{...FONTS.h2, color: COLORS.white, fontWeight: '300'}}>
                {name}
              </Text>
              <Text
                style={{
                  ...FONTS.h4,
                  color: COLORS.gray,
                  fontWeight: '300',
                  paddingTop: SIZES.base,
                }}>
                {type}
              </Text>

              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.white,
                  fontWeight: '900',
                  paddingTop: SIZES.font,
                }}>
                {price}
              </Text>

              {renderSizes()}
            </View>

            {renderAddToCart()}
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default ItemModal;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
