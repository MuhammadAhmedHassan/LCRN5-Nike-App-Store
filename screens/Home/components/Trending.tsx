import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, dummyData, FONTS, SIZES} from '../../../constants';
import {Svg, Polygon} from 'react-native-svg';
import {TrendigItemType} from '../../../types';

interface IProps {
  setSelectedItem: (item: TrendigItemType | null) => void;
}

const Trending = ({setSelectedItem}: IProps) => {
  const [trending, setTrending] = useState(dummyData.trending);
  const [productsLength, setProductsLength] = useState(trending.length);
  return (
    <View>
      <Text
        style={{
          ...FONTS.h1,
          color: COLORS.black,
          marginHorizontal: SIZES.padding,
        }}>
        Trending
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={trending}
        keyExtractor={item => `trending-${item.id}`}
        renderItem={({item, index}) => {
          const firstItem = index === 0;
          const lastItem = productsLength - 1 === index;
          return (
            <TouchableOpacity
              onPress={() => setSelectedItem(item)}
              style={{
                height: 260,
                width: 150,
                marginLeft: SIZES.padding,
                justifyContent: 'space-between',
                marginRight: lastItem ? SIZES.padding * 1.5 : undefined,
                marginTop: SIZES.base,
              }}>
              <Text style={{...FONTS.h4, color: COLORS.gray}}>{item.type}</Text>
              <View
                style={{
                  height: '85%',
                  backgroundColor: item.bgColor,
                  borderRadius: 15,
                  justifyContent: 'space-between',
                }}>
                <Svg
                  height="100%"
                  width="100%" // if position absolute
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: -14,
                  }}>
                  <Polygon points="0,0 160,0 160,80" fill="white" />
                </Svg>

                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={{
                    height: '55%',
                    width: '110%',
                    transform: [
                      {
                        rotate: '-15deg',
                      },
                    ],
                  }}
                />

                <View
                  style={{
                    marginHorizontal: SIZES.font,
                    marginBottom: SIZES.font,
                  }}>
                  <Text style={{...FONTS.h4, color: COLORS.gray}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.h3,
                      color: COLORS.white,
                      marginTop: SIZES.font,
                    }}>
                    {item.price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
