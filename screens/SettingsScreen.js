import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import {AsyncStorage, Button, Text, View} from "react-native";

export default class SettingsScreen extends Component {
  state = {
    token: ""
  }

  async componentDidMount() {
    this.setState({
      token: await AsyncStorage.getItem("userToken")
    })
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
          <Text>Hi {this.state.token}</Text>
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
    )
  }
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
