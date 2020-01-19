import React, {Component} from 'react'
import {View, Text, StyleSheet, AsyncStorage, Button} from 'react-native'

class CaregiverHome extends Component {
    state = {
        token: ""
    };

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
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                <Text>Hi caregiver, {this.state.token}</Text>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        )
    }
}

export default CaregiverHome;
