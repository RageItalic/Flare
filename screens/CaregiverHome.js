import React, {Component} from 'react'
import {View, Text, StyleSheet, AsyncStorage, Button, Dimensions} from 'react-native'

import MapView from 'react-native-maps';

class CaregiverHome extends Component {
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
        /*                */
    render() {
        return (
            <View style={styles.container}>
                <Text>Hi caregiver, {this.state.token}</Text>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
                <MapView style={styles.mapStyle} />
                <Text>random text</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default CaregiverHome;
