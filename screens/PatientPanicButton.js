import React, {Component} from 'react'
import {View, Text, StyleSheet, AsyncStorage} from 'react-native'

class PatientPanicButton extends Component {
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
                <Text>Hi patient, {this.state.token}</Text>
            </View>
        )
    }
}

export default PatientPanicButton;
