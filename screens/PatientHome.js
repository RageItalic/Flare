import React, {Component} from 'react'
import {AsyncStorage, Text, View} from 'react-native'
import moment from "moment";

class PatientHome extends Component {


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
            <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                <Text>Hi patient</Text>
                <View>
                    <Text>Current event</Text>
                    <Text>{currentEvent.title}</Text>
                    <Text>{currentEvent.location}</Text>
                    <Text>{moment(currentEvent.start).format("h:mm A")} - {moment(currentEvent.end).format("h:mm A")}</Text>
                </View>
                <View>
                    <Text>Next event</Text>
                    <Text>{nextEvent.title}</Text>
                    <Text>{nextEvent.location}</Text>
                    <Text>{moment(nextEvent.start).format("h:mm A")} - {moment(nextEvent.end).format("h:mm A")}</Text>
                </View>
            </View>
        )
    }
}

export default PatientHome;
