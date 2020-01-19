import React, {Component} from 'react'
import {View, Text, StyleSheet, AsyncStorage, Button, Dimensions} from 'react-native'

import MapView, {Marker} from 'react-native-maps';

class CaregiverHome extends Component {
  state = {
    token: "",
    region: null,
    location: null
  }
    async componentDidMount() {
        this.setState({
            token: await AsyncStorage.getItem("userToken"),
            region: {
              latitude: 43.66000,
              longitude: -79.39502,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
            
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
                <MapView style={styles.mapStyle} region={this.state.region}>
                    <Marker
                        coordinate= {{latitude: 43.66000, longitude: -79.39502,}}
                        title={"Patient Location"}
                        description={"Here is the Patient"}
                    />
                </MapView>
                <Text>random textwtf</Text>
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
