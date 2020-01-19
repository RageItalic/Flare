import React, {Component} from 'react'
import {View, Text, StyleSheet, AsyncStorage} from 'react-native'

class CaregiverEvents extends Component {
    state = {
        token: ""
    }

    async componentDidMount() {
        this.setState({
            token: await AsyncStorage.getItem("userToken")
        })
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                <Text>Caregiver events, {this.state.token}</Text>
            </View>
        )
    }
}

export default CaregiverEvents;
