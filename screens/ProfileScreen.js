import React from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import { List, ListItem, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons'
import * as firebase from "firebase";


export default class ProfileScreen extends React.Component {
    state = { email: "", displayName: "", user: {}};

    componentDidMount() {
        const { email, displayName, user } = firebase.auth().currentUser;

        this.setState({ email, displayName, user });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.header}>

                    <TouchableOpacity>
                    <Text style={styles.headerTitle}>My Profile</Text>

                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 50, alignItems: "center" }}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={
                                this.state.avatar
                                    ? { uri: this.state.avatar }
                                    : require("../assets/tempAvatar.jpg")
                            }
                            style={styles.avatar}
                        />
                    </View>
                    <Text style={styles.name}>{this.state.displayName}</Text>
                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Text style={styles.statAmount}>21</Text>
                        <Text style={styles.statTitle}>Posts</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statAmount}>981</Text>
                        <Text style={styles.statTitle}>Followers</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statAmount}>63</Text>
                        <Text style={styles.statTitle}>Following</Text>
                    </View>
                </View>

                <List>
                    <ListItem itemHeader first>
                        <Text>GENERAL</Text>
                    </ListItem>
                        <ListItem >
                        <Text>Display and Sound</Text>
                        </ListItem>
                        <ListItem >
                        <Text>Data Usage</Text>
                        </ListItem>
                        <ListItem >
                        <Text>Accessibility</Text>
                        </ListItem>
                        <ListItem last>
                        <Text>About SmurfApp</Text>
                    </ListItem>
                </List>

                <Button
                    onPress={() => {
                        this.signOutUser();
                    }}
                    title="Log out"
                    // style={{marginBottom: 20}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    profile: {
        marginTop: 64,
        alignItems: "center"
    },
    avatarContainer: {
        shadowColor: "#151734",
        shadowRadius: 30,
        shadowOpacity: 0.4
    },
    avatar: {
        width: 136,
        height: 136,
        borderRadius: 68
    },
    name: {
        marginTop: 24,
        fontSize: 16,
        fontWeight: "600"
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 32
    },
    stat: {
        alignItems: "center",
        flex: 1
    },
    statAmount: {
        color: "#4F566D",
        fontSize: 18,
        fontWeight: "300"
    },
    statTitle: {
        color: "#C3C5CD",
        fontSize: 12,
        fontWeight: "500",
        marginTop: 4
    }
});
