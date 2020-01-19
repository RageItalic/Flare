import React, {Component} from 'react'
import {
    AsyncStorage,
    Button,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import moment from 'moment';
import {Ionicons} from '@expo/vector-icons'

class CaregiverEvents extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        // token: "",
        modalVisible: false,
        data: {
            "Monday": [
                {
                    title: "Walk the dog",
                    location: "Too Good Park",
                    start: new Date(2020, 0, 13, 19, 20),
                    end: new Date(2020, 0, 13, 20, 20)
                },
                {
                    title: "Eat dinner",
                    location: "Walmart",
                    start: new Date(2020, 0, 13, 20, 20),
                    end: new Date(2020, 0, 13, 21, 20)
                }
            ],
            "Tuesday": [
                {
                    title: "walk the dog",
                    location: "nowhere",
                    start: new Date(2020, 0, 13, 19, 20),
                    end: new Date(2020, 0, 13, 20, 20)
                },
                {
                    title: "swimming",
                    location: "pool",
                    start: new Date(2020, 0, 13, 18, 20),
                    end: new Date(2020, 0, 13, 19, 20)
                }
            ],
            "Wednesday": [
                {
                    title: "walk the dog",
                    location: "nowhere",
                    start: new Date(2020, 0, 14, 19, 20),
                    end: new Date(2020, 0, 14, 20, 20)
                },
                {
                    title: "visit children",
                    location: "mexico",
                    start: new Date(2020, 0, 14, 17, 20),
                    end: new Date(2020, 0, 14, 21, 20)
                }
            ],
            "Thursday": [
                {
                    title: "walk the dog",
                    location: "nowhere",
                    start: new Date(2020, 0, 15, 19, 20),
                    end: new Date(2020, 0, 15, 20, 20)
                },
                {
                    title: "water plants",
                    location: "home",
                    start: new Date(2020, 0, 15, 19, 0),
                    end: new Date(2020, 0, 15, 19, 20)
                }
            ],
            "Friday": [
                {
                    title: "walk the dog",
                    location: "nowhere",
                    start: new Date(2020, 0, 16, 19, 20),
                    end: new Date(2020, 0, 16, 20, 20)
                },
                {
                    title: "regular checkup",
                    location: "doctor",
                    start: new Date(2020, 0, 16, 20, 20),
                    end: new Date(2020, 0, 16, 21, 20)
                }
            ],
            "Saturday": [
                {
                    title: "walk the dog",
                    location: "nowhere",
                    start: new Date(2020, 0, 17, 19, 20),
                    end: new Date(2020, 0, 17, 20, 20)
                },
                {
                    title: "go for icecream",
                    location: "walmart",
                    start: new Date(2020, 0, 17, 9, 20),
                    end: new Date(2020, 0, 17, 10, 30)
                }
            ],
            "Sunday": [
                {
                    title: "walk the dog",
                    location: "nowhere",
                    start: new Date(2020, 0, 18, 19, 20),
                    end: new Date(2020, 0, 18, 20, 20)
                },
                {
                    title: "bingo",
                    location: "community centre",
                    start: new Date(2020, 0, 18, 20, 20),
                    end: new Date(2020, 0, 18, 21, 20)
                }
            ]
        }
    };

    async componentDidMount() {
        this.setState({
            token: await AsyncStorage.getItem("userToken")
        })
    }
    render() {
        return (
            <SafeAreaView>
                <Modal visible={this.state.modalVisible} animationType="slide">

                    <View style={{flex: 1, alignItems: 'center', marginTop: 80}}>

                        <Text>Create Event</Text>
                        <TextInput
                            placeholder="Event Title"
                            style={{width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, marginVertical: 15}}
                            //add and set onchangetext and value props
                        />
                        <TextInput
                            placeholder="Location"
                            style={{width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, marginVertical: 15}}
                            //add and set onchangetext and value props
                        />
                        <TextInput
                            placeholder="Start Time"
                            style={{width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, marginVertical: 15}}
                            //add and set onchangetext and value props
                        />
                        <TextInput
                            placeholder="End Time"
                            style={{width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, marginVertical: 15}}
                            //add and set onchangetext and value props
                        />
                        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                            <Button title="Cancel"  color="red" onPress={() => this.setState({modalVisible: false})}/>
                            <Button title="Add" onPress={() => /*update state here*/ this.setState({modalVisible: false})} />
                        </View>
                    </View>
                </Modal>
                <ScrollView style={{height: '100%'}}>
                    <View style={{flex: 1, justifyContent: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Monday</Text>
                        <ScrollView style={{flexDirection: 'row'}} horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                                <View style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                }}>
                                    <Ionicons name="ios-add-circle" size={40} style={{position: 'relative', top: -8}}/>
                                </View>
                            </TouchableOpacity>
                            {this.state.data.Monday.map((event, index) => {
                                return (
                                    <View key={index}>
                                        <View style={styles.event}>
                                            <Text style={styles.eventTitle}>{event.title}</Text>
                                            <Text style={styles.eventBody}>{event.location}</Text>
                                            <Text
                                                style={styles.eventBody}>{moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}</Text>
                                        </View>
                                        <Ionicons name={"ios-close-circle"} size={40}
                                                  style={{position: "absolute", right: 5, top: 13}}/>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Tuesday</Text>
                        <ScrollView style={{flexDirection: 'row'}} horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => {/*modal pop up*/
                            }}>
                                <View style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                }}>
                                    <Ionicons name="ios-add-circle" size={40} style={{position: 'relative', top: -8}}/>
                                </View>
                            </TouchableOpacity>
                            {this.state.data.Tuesday.map((event, index) => {
                                return (
                                    <View key={index}>
                                        <View style={styles.event}>
                                            <Text style={styles.eventTitle}>{event.title}</Text>
                                            <Text style={styles.eventBody}>{event.location}</Text>
                                            <Text
                                                style={styles.eventBody}>{moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}</Text>
                                        </View>
                                        <Ionicons name={"ios-close-circle"} size={40}
                                                  style={{position: "absolute", right: 5, top: 13}}/>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>

                    <View style={{flex: 1, justifyContent: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Wednesday</Text>
                        <ScrollView style={{flexDirection: 'row'}} horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => {/*modal pop up*/
                            }}>
                                <View style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                }}>
                                    <Ionicons name="ios-add-circle" size={40} style={{position: 'relative', top: -8}}/>
                                </View>
                            </TouchableOpacity>
                            {this.state.data.Wednesday.map((event, index) => {
                                return (
                                    <View key={index}>
                                        <View style={styles.event}>
                                            <Text style={styles.eventTitle}>{event.title}</Text>
                                            <Text style={styles.eventBody}>{event.location}</Text>
                                            <Text
                                                style={styles.eventBody}>{moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}</Text>
                                        </View>
                                        <Ionicons name={"ios-close-circle"} size={40}
                                                  style={{position: "absolute", right: 5, top: 13}}/>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Thursday</Text>
                        <ScrollView style={{flexDirection: 'row'}} horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => {/*modal pop up*/
                            }}>
                                <View style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                }}>
                                    <Ionicons name="ios-add-circle" size={40} style={{position: 'relative', top: -8}}/>
                                </View>
                            </TouchableOpacity>
                            {this.state.data.Thursday.map((event, index) => {
                                return (
                                    <View key={index}>
                                        <View style={styles.event}>
                                            <Text style={styles.eventTitle}>{event.title}</Text>
                                            <Text style={styles.eventBody}>{event.location}</Text>
                                            <Text
                                                style={styles.eventBody}>{moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}</Text>
                                        </View>
                                        <Ionicons name={"ios-close-circle"} size={40}
                                                  style={{position: "absolute", right: 5, top: 13}}/>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Friday</Text>
                        <ScrollView style={{flexDirection: 'row'}} horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => {/*modal pop up*/
                            }}>
                                <View style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                }}>
                                    <Ionicons name="ios-add-circle" size={40} style={{position: 'relative', top: -8}}/>
                                </View>
                            </TouchableOpacity>
                            {this.state.data.Friday.map((event, index) => {
                                return (
                                    <View key={index}>
                                        <View style={styles.event}>
                                            <Text style={styles.eventTitle}>{event.title}</Text>
                                            <Text style={styles.eventBody}>{event.location}</Text>
                                            <Text
                                                style={styles.eventBody}>{moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}</Text>
                                        </View>
                                        <Ionicons name={"ios-close-circle"} size={40}
                                                  style={{position: "absolute", right: 5, top: 13}}/>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Saturday</Text>
                        <ScrollView style={{flexDirection: 'row'}} horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => {/*modal pop up*/
                            }}>
                                <View style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                }}>
                                    <Ionicons name="ios-add-circle" size={40} style={{position: 'relative', top: -8}}/>
                                </View>
                            </TouchableOpacity>
                            {this.state.data.Saturday.map((event, index) => {
                                return (
                                    <View key={index}>
                                        <View style={styles.event}>
                                            <Text style={styles.eventTitle}>{event.title}</Text>
                                            <Text style={styles.eventBody}>{event.location}</Text>
                                            <Text
                                                style={styles.eventBody}>{moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}</Text>
                                        </View>
                                        <Ionicons name={"ios-close-circle"} size={40}
                                                  style={{position: "absolute", right: 5, top: 13}}/>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Sunday</Text>
                        <ScrollView style={{flexDirection: 'row'}} horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={() => {/*modal pop up*/
                            }}>
                                <View style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                }}>
                                    <Ionicons name="ios-add-circle" size={40} style={{position: 'relative', top: -8}}/>
                                </View>
                            </TouchableOpacity>
                            {this.state.data.Sunday.map((event, index) => {
                                return (
                                    <View key={index}>
                                        <View style={styles.event}>
                                            <Text style={styles.eventTitle}>{event.title}</Text>
                                            <Text style={styles.eventBody}>{event.location}</Text>
                                            <Text
                                                style={styles.eventBody}>{moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}</Text>
                                        </View>
                                        <Ionicons name={"ios-close-circle"} size={40}
                                                  style={{position: "absolute", right: 5, top: 13}}/>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    event: {
        width: 180,
        height: 200,
        marginTop: 20,
        backgroundColor: '#FFBD59',
        marginRight: 10,
        marginLeft: 20,
        borderRadius: 40,
        paddingLeft: 35,
        justifyContent: 'center',
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.26,
        shadowRadius: 6,
    },
    eventBody: {
        fontSize: 15,
        color: 'white',
        marginLeft: -25,
        // marginBottom: 2,
    },
    eventTitle: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        width: 120,
        marginLeft: -25,
        marginBottom: 3,
        flexWrap: "wrap"
    }
});

export default CaregiverEvents;
