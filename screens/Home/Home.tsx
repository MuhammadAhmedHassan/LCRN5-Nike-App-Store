import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {Header} from './components';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
