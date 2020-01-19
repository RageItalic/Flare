import React, { Component } from "react";
import { AsyncStorage, Text, View } from "react-native";
import moment from "moment";

class PatientHome extends Component {
  async componentDidMount() {
    this.setState({
      token: await AsyncStorage.getItem("userToken")
    });
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    const currentEvent = {
      title: "Walk the dog",
      location: "Too Good Park",
      start: new Date(2020, 0, 13, 19, 20),
      end: new Date(2020, 0, 13, 20, 20)
    };

    const nextEvent = {
      title: "Eat dinner",
      location: "Walmart",
      start: new Date(2020, 0, 13, 20, 20),
      end: new Date(2020, 0, 13, 21, 20)
    };

    return (
      <View style={{ flex: 1, marginTop: 50, marginLeft: 20 }}>
        <Text
          style={{
            fontFamily: "Butler-Light",
            fontSize: 45,
            fontWeight: "bold"
          }}
        >
          Hi, Beatrice
        </Text>
        <View>
          <Text style={{ fontSize: 25, fontFamily: "Avenir" }}>
            Current Task
          </Text>
          <View
            style={{
              width: "94%",
              height: 180,
              backgroundColor: "#FFBD59",
              borderRadius: 25
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Butler-Light",
                color: "white",
                textAlign: "center",
                marginTop: 20
              }}
            >
              {currentEvent.title}
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Butler-Light",
                color: "white",
                textAlign: "center",
                marginTop: 20
              }}
            >
              {currentEvent.location}
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Butler-Light",
                color: "white",
                textAlign: "center",
                marginTop: 20
              }}
            >
              {moment(currentEvent.start).format("h:mm A")} -{" "}
              {moment(currentEvent.end).format("h:mm A")}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, fontFamily: "Avenir" }}>Up Next</Text>
          <View
            style={{
              width: "94%",
              height: 180,
              borderColor: "#FFBD59",
              borderWidth: 1,
              borderRadius: 25
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Butler-Light",
                color: "#FFBD59",
                textAlign: "center",
                marginTop: 20
              }}
            >
              {nextEvent.title}
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Butler-Light",
                color: "#FFBD59",
                textAlign: "center",
                marginTop: 20
              }}
            >
              {nextEvent.location}
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Butler-Light",
                color: "#FFBD59",
                textAlign: "center",
                marginTop: 20
              }}
            >
              {moment(nextEvent.start).format("h:mm A")} -{" "}
              {moment(nextEvent.end).format("h:mm A")}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default PatientHome;
