import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, dummyData, FONTS, images, SIZES} from '../../../constants';
import {TrendigItemType} from '../../../types';

interface IProps {
  setSelectedItem: (item: TrendigItemType | null) => void;
}

const RecentlyViewed = ({setSelectedItem}: IProps) => {
  const [recentlyViewedItems, setRecentlyViewedItems] = useState(
    dummyData.recentlyViewed,
  );
  const [itemsLength, setItemsLength] = useState(recentlyViewedItems.length);

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        marginTop: SIZES.padding,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        ...styles.recentContainerShadow,
      }}>
      <Image
        source={images.recentlyViewedLabel}
        resizeMode="cover"
        style={{width: 70, height: '100%'}}
      />
      <FlatList
        contentContainerStyle={{
          paddingTop: SIZES.font,
        }}
        showsVerticalScrollIndicator={false}
        data={recentlyViewedItems}
        keyExtractor={item => `recently-viewed-${item.id}`}
        renderItem={({item, index}) => {
          const firstItem = index === 0;
          const lastItem = index === itemsLength - 1;
          return (
            <TouchableOpacity
              onPress={() => setSelectedItem(item)}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  height: 70,
                  width: 140,
                  marginBottom: SIZES.padding,
                }}
              />
              <View style={{justifyContent: 'center', paddingBottom: 18, marginLeft: SIZES.font}}>
                <Text style={{...FONTS.h3}}>{item.name}</Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.black,
                    fontWeight: '900',
                    marginTop: 4,
                  }}>
                  {item.price}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default RecentlyViewed;

const styles = StyleSheet.create({
  recentContainerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
