import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import * as firebase from 'firebase'
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';



export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                })
            })
            .catch(error => this.setState({
                errorMessage: error.message
            }))
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Image
                    source={require("../assets/authHeader.png")}
                    style={{ marginTop:-116, marginLeft:-50}}
                >
                </Image>
                <Image
                    source={require("../assets/authFooter.png")}
                    style={{position: "absolute", bottom: -325, right: -225}}
                >
                </Image>
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
                </TouchableOpacity>
                <View style={{ position: "absolute", top: 64, alignItems: "center", width: "100%" }}>
                    <Text style={styles.greeting}>{`Hello!\nSign up to get started.`}</Text>
                    
                </View>
                {/* Mapping Errors */}
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                {/* Creating Form and setting state to various inputs and functions */}
               
                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}
                        ></TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        ></TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                        style={styles.input} 
                        secureTextEntry 
                        autoCapitalize="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        ></TextInput>
                    </View>
                </View>
                
            
                {/* Button Component For SignIn */}
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: '#FFF', fontWeight: "500"}}>Register</Text>
                </TouchableOpacity>

                {/* Section For People who dont know about it or SignUp */}
                <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 32}} 
                    onPress={()=> this.props.navigate("Login")}
                >
                    <Text style={{color: "#414955", fontSize: 13}}>
                        New To SmurfApp? <Text style={{fontWeight: '500', color: '#E9446A'}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}

// Inbuilt CSS-IN-JS design editting
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        color: "#FFF"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    }, 
    error: {
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
        color: "#E9446A"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase", 
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#E9446A',
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    back: {
        position: "absolute",
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center"
    }
})