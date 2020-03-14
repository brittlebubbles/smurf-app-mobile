import React from "react";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { View, StyleSheet, Image } from "react-native";
import { AntDesign, FontAwesome, Ionicons} from '@expo/vector-icons'
import { FlatList } from "react-native-gesture-handler";

departments = [
    {
        id: 1,
        name: "Faculty of IT and Communication Studies",
        location: "LBC 202",
        members: `190 \members`,
    },
    {
        id: 2,
        name: "Accounting Department",
        location: "LBC 404",
        members: `190 \members`,
    },
    {
        id: 3,
        name: "Management Studies",
        location: "LBC 404",
        members: `190 \members`,
    },
    {
        id: 4,
        name: "HR Department",
        location: "LBC 404",
        members: `190 \members`,
    },
    {
        id: 5,
        name: "Accounting and Finance",
        location: "LBC 404",
        members: `190 \members`,
    },
]

export default class MessageScreen extends React.Component {
    renderDepartments = department => {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: 'Image URL'}} />
                        <Body>
                        <Text>{department.name}</Text>
                        <Text note>{department.location}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                        <FontAwesome name="group" size={20} />
                        </Button>
                        <Text>{department.members}</Text>
                    </Left>
                    
                    <Right>
                        <Ionicons name="md-add" size={24}/>
                    </Right>
                </CardItem>
            </Card>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>All Departments</Text>
                </View>

                <FlatList
                data={departments}
                renderItem={({ item }) => this.renderDepartments(item)}
                keyExtractor={item => item.id.toString()} >
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
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
});
