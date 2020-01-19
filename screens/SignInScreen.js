import React from "react";
import {
  AsyncStorage,
  Button,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={this._signInCaregiver}>
          <View style={styles.caregiverBtn}>
            <Text style={styles.careText}>Sign in as Caregiver</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._signInPatient}>
          <View style={styles.patientBtn}>
            <Text style={styles.patientText}>Sign in as Patient</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  _signInCaregiver = async () => {
    await AsyncStorage.setItem("userToken", "caregiver");
    this.props.navigation.navigate("Caregiver");
  };

  _signInPatient = async () => {
    await AsyncStorage.setItem("userToken", "patient");
    this.props.navigation.navigate("Patient");
  };
}

const styles = StyleSheet.create({
  caregiverBtn: {
    backgroundColor: "#FFBD59",
    borderRadius: 30,
    height: 60,
    width: 200,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 6,
    shadowOpacity: 0.1
  },
  careText: {
    flex: 1,
    textAlign: "center",
    marginTop: 20,
    color: "white"
  },
  patientBtn: {
    backgroundColor: "white",
    borderColor: "#FFEE7E",
    borderWidth: 2,
    borderRadius: 30,
    height: 60,
    width: 200,
    marginVertical: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 6,
    shadowOpacity: 0.1
  },
  patientText: {
    flex: 1,
    textAlign: "center",
    marginTop: 20,
    color: "black"
  }
});
