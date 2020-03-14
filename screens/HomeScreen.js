import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

// temporary data until we pull from Firebase
posts = [
    {
        id: "1",
        name: "Joe McKay",
        text:
            "Students of the Faculty of Law have embarked on an educational tour of the Ghana Prison Service. The visit to the Nsawam Medium Security Prison in the Eastern Region forms part of course requirement by the University",
        date: `20th November, 2019`,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/stf.jpeg")
    },
    {
        id: "2",
        name: "Karyn Kim",
        text: "A third year student of the University of Professional Studies, Accra, Henrietta Armah, has won gold for Ghana at the just ended 2019 Korean Ambassador's Cup Taekwondo World Championship held in Muju, Republic of Korea",
        date: `13th November, 2019`,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/aaa.jpeg")
    },
    {
        id: "3",
        name: "Emerson Parsons",
        text: "The Media and Website Coordination Unit (MWCU) of the University has been adjudged the ‘Most Eminent PR/Corporate Communications Team of the Year’ at the 2019 National Communications Awards gala",
        date: `12th November, 2019`,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/naa.jpg")
    },
    {
        id: "4",
        name: "Kathie Malone",
        text:"The Vice-Chancellor of the University of Professional Studies, Accra (UPSA), Professor Abednego Feehi Okoe Amartey, has been adjudged the Marketing Man of the Year 2018 at the 30th Chartered Institute of Marketing, Ghana (CIMG) National Marketing Performance Awards held in Accra on Friday, September 27, 2019",
        date: `27th September, 2019`,
        avatar: require("../assets/tempAvatar.jpg"),
        image: require("../assets/muze.jpg")
    },
    {
        id: "5",
        name: "",
        text: "The University of Professional Studies, Accra put up a spirited performance to crush Wisconsin International University College to win the 2019 inter-tertiary Newsroom Competition.",
        date: `12th November, 2019`,
        image: require("../assets/take.jpg")
    },
    {
        id: "6",
        name: "",
        text: "The University of Professional Studies, Accra put up a spirited performance to crush Wisconsin International University College to win the 2019 inter-tertiary Newsroom Competition.",
        date: `12th November, 2019`,
        image: require("../assets/take.jpg")
    }
];

export default class HomeScreen extends React.Component {
    renderPost = post => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{post.date}</Text>
                        </View>

                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>
                    <Text style={styles.post}>{post.text}</Text>
                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }} />
                        <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
                    </View>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Feed</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={posts}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
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
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    postImage: {
        width: undefined,
        height: 150,
        borderRadius: 5,
        marginVertical: 16
    }
});
