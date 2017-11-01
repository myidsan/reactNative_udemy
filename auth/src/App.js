import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDUcFYDJNTNgEFchCjBCwsLPmH3UlL1Gds',
      authDomain: 'auth-f0f1b.firebaseapp.com',
      databaseURL: 'https://auth-f0f1b.firebaseio.com',
      projectId: 'auth-f0f1b',
      storageBucket: 'auth-f0f1b.appspot.com',
      messagingSenderId: '901267099605'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          // <Button onPress={() => firebase.auth().signOut()}>
          //   Log In
          // </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
