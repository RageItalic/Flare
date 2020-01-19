import React from "react";
import {View, Button, AsyncStorage} from "react-native";


export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View>
                <Button title="Sign in as caregiver" onPress={this._signInCaregiver} />
                <Button title="Sign in as patient" onPress={this._signInPatient}/>
            </View>
        );
    }

    _signInCaregiver = async () => {
        await AsyncStorage.setItem('userToken', 'caregiver');
        this.props.navigation.navigate('Caregiver');
    };

    _signInPatient = async () => {
        await AsyncStorage.setItem('userToken', 'patient');
        this.props.navigation.navigate('Patient');
    };
}
