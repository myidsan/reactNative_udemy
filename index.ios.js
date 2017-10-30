// NOT RENDERED
// Index.ios.js - place code in here for ios

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component
// an object that gets displayed
const App = () => {
  return (
    <Text>Some Text</Text>
    // jsx - a dialect of javascript
    // mask over normal functiona calls
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
