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
                <Text style={{fontSize: 36, marginTop: 50, fontFamily:"Butler-Light"}}>Hi Ariel,</Text>
                <Text style={{fontSize: 18, marginTop: 20, fontFamily:"Butler-Light"}}>Tracking Beatrice's location:</Text>
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
                <View style={{marginTop: 10}}>
                  <Text style={{fontSize: 24, fontFamily:"Butler-Light"}}>Beatrice's tasks</Text>

                    <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 15}}>Right now:</Text>
                      <View style={{marginTop: 10, width:180, height:60, borderRadius:25, backgroundColor:"#FFBD59"}}>
                        <Text style={{fontSize: 25, textAlign:"center", marginTop:12, marginRight:5, color:"white", fontFamily:"Butler-Light"}}> Walk dog</Text>
                      </View>
                    </View>
                    <View style={{marginTop: 10}}>
                    <Text style={{fontSize: 15}}>Up next:</Text>
                      <View style={{marginTop: 10, width:180, height:60, borderRadius:25, borderColor:"#FFBD59", borderWidth:1}}>
                        <Text style={{fontSize: 20, textAlign:"center", marginTop:15, marginRight:5, color:"#FFBD59", fontFamily:"Butler-Light"}}> Grocery shopping</Text>
                      </View>
                    </View>
                </View>
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
      marginTop: 20,
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
