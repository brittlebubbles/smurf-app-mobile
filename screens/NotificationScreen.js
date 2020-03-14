import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatGrid } from 'react-native-super-grid';


export default class NotificationScreen extends React.Component {
    render() {
        const items = [
            { 
                name: 'Coded Club', 
                code: '#1abc9c', 
                image: require("../assets/codedclub.jpg")
            }, 
            {   name: 'Business Builders ', 
                code: '#2ecc71', 
                image: require("../assets/codedclub.jpg")
            },
            { 
                name: 'N.S.S.A Africa', 
                code: '#3498db',
                image: require("../assets/IMG-20191126-WA0004.jpg") 
            }, 
            {   name: 'Enactus Upsa', 
                code: '#34495e',
                image: require("../assets/IMG-20191126-WA0006.jpg") 
            },
            {   name: 'Debaters ', 
                code: '#16a085',
                image: require("../assets/IMG-20191126-WA0008.jpg") 
            },
            {   name: 'Idea Factor', 
                code: '#27ae60',
                image: require("../assets/IMG-20191126-WA0009.jpg") 
            }, 
            // {   name: 'Upsa Drama Club', 
            //     code: '#2980b9',
            //     image: require("../assets/IMG-20191126-WA0006.jpg") 
            // },
            { name: 'Rotaract ', code: '#8e44ad' },
            { name: 'Real Estate Club', code: '#f1c40f' },
            { name: 'Upsa Student Entrepreneurship', code: '#e74c3c' },
          ];
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>All Clubs</Text>
                </View>

                <FlatGrid
                    itemDimension={130}
                    items={items}
                    style={styles.gridView}
                    
                    renderItem={({ item, index }) => (
                        <View 
                        style={[styles.itemContainer, styles.image, { background: item.image }]}
                        
                        >
                            
                            <Image style={styles.image}  source={item.image} marginTop={-1} marginBottom={-15}  />
                            <Text style={[styles.itemName]}>{item.name}</Text>

                        </View>
                    )}
                />
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
    gridView: {
        marginTop: 10,
        flex: 1,
        paddingTop: 10,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 100,
        height: 150,
        
    },

    itemName: {
        fontSize: 13,
        color: '#000',
        fontWeight: '600',
    },

    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#000',
    },

    image:{
    //   height: '100%',
      width: 150,
      resizeMode: 'cover',
      borderRadius: 5,
      padding: 8,
    //   marginVertical: 8,
      height: 150,
    //   marginTop: ,
      position: 'relative',

    },
});
