import React, { Component } from "react";
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import * as Font from "expo-font";
import axios from "axios";

class PatientPanicButton extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    token: "",
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Butler-Light": require("../assets/fonts/Butler_Light.otf")
    });
    this.setState({
      token: await AsyncStorage.getItem("userToken")
    });
  }

  twilioCall = () => {
    Alert.alert("Your Caregiver has been alerted. Stay where you are.");
    //make axios call here.

    axios.post('http://100.64.227.20:3000/api/text', {number:6479952837, location:"University of Toronto"}).then(function (response) {
      console.log(response.data);
      console.log(response.status);
    })  .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFBD59"
        }}
      >
        {/* <Text
          style={{
            color: "white",
            marginBottom: 20,
            fontFamily: "Butler-Light"
          }}
        >
          Press button to inform Caregiver of your location.
        </Text> */}

        <TouchableOpacity
          onLongPress={() => {
            this.twilioCall();
          }}
        >
          <View style={styles.panicBtn}>
            <Text
              style={{
                position: "absolute",
                top: "45%",
                left: "28%",
                fontFamily: "Butler-Light",
                fontSize: 20
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Hold</Text>
              <Text> until safe</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panicBtn: {
    backgroundColor: "white",
    borderRadius: 130,
    height: 260,
    width: 260,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 9 },
    shadowRadius: 7,
    shadowOpacity: 0.26,
    elevation: 9
  },
  panicText: {
    fontSize: 55,
    fontWeight: "bold",
    textAlign: "center",
    margin: 35,
    color: "#FFFFE0"
  }
});

export default PatientPanicButton;
