import React, {Component} from 'react'
import {View, Text, StyleSheet, AsyncStorage, Button, Dimensions, ActivityIndicator} from 'react-native'

import MapView, {Marker} from 'react-native-maps';

class CaregiverHome extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    token: "",
    region: null,
    location: null,
    loading: true
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

        navigator.geolocation.getCurrentPosition(
          position => {
            this.setState({ location: position, loading: false });
            console.log("location is ", JSON.stringify(position), "state is ", this.state)
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
        /*                */
    render() {
      if (this.state.loading) return <ActivityIndicator size="large" style={{flex:1, alignItems:"center", justifyContent:"center"}}/>
        return (
            <View style={styles.container}>
                <Text>Hi caregiver, {this.state.location !== null && "oof"}</Text>
                {/* <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> */}
                <View style={styles.poop}>
                <MapView style={styles.mapStyle} region={this.state.region}>
                    <Marker
                        coordinate= {{
                          latitude: this.state.location.coords.latitude,
                          longitude: this.state.location.coords.longitude,}}
                        title={"Patient Location"}
                        description={"Here is the Patient"}
                    />
                </MapView>
                </View>
                <Text>{" "}</Text>
                <Text style={{fontSize: 24}}>Beatrice's tasks</Text>
                <Text style={{fontSize: 18}}>{'\u2B24'} Walk dog</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    poop: {
      marginTop: 250,
      width: 350,
      height: 200,
      borderRadius: 25,

      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.26,
      shadowRadius: 6.27,
      elevation: 10
    },
    mapStyle: {
      flex: 1,
      
    },
  });

export default CaregiverHome;
