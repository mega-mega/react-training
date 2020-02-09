import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import AppBar from './src/components/AppBar';
import MemoDetailScreean from './src/screens/MemoDetailScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      {/* <MemoListScreen /> */}
      <MemoDetailScreean />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
