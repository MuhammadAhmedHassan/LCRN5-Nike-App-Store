import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Header, RecentlyViewed, Trending} from './components';
import {COLORS} from '../../constants';
import {TrendigItemType} from '../../types';
import ItemModal from './components/ItemModal';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState<TrendigItemType | null>(
    null,
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <View style={{backgroundColor: COLORS.white, flex: 1}}>
        {/* Header */}
        <Header />

        {/* Trending */}
        <Trending setSelectedItem={item => setSelectedItem(item)} />

        {/* Recently Viewed */}
        <RecentlyViewed setSelectedItem={item => setSelectedItem(item)} />

        {/* Item Modal */}
        {!!selectedItem && (
          <ItemModal
            setSelectedItem={item => setSelectedItem(item)}
            selectedItem={selectedItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
