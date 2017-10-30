// Everything comes here
// Index.ios.js - place code in here for ios

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header'; // relative path if user made
import AlbumList from './src/components/AlbumList';

// create a component
// an object that gets displayed
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// const App = () => ({
//   return ()
//     <Text>Some Text</Text>
//     // jsx - a dialect of javascript
//     // mask over normal functiona calls
// );


// Render it to the device
// first param: directory
// second param: component (need at least one)
AppRegistry.registerComponent('albums', () => App);
