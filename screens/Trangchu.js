import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, TextInput, StyleSheet, View, FlatList, Alert, Modal } from 'react-native';
import { Image, Icon, Card, Text, ListItem, Avatar } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/Button';
import TouchableScale from 'react-native-touchable-scale'


const Trangchu = (props) => {
    const { navigation, route: { params: { id } } } = props
    const [itemId, setItemId] = useState(id)

    const [hair, setHair] = useState([]);

    useEffect(() => {
        fetch("http://10.0.2.2:3000/api/hair")
            .then((res) => res.json())
            .then((data) => {
                setHair(data.hair)
            }
            )
            .catch((err) => console.log("loi:" + err))
    }, [])


    const renderItem = ({ item }) => {
        return (
            <>
                <View style={{ flex: 1, margin: 5 }}>
                    <ListItem 
                        bottomDivider 
                        onPress={()=>navigation.navigate("Details", {item: item, id: itemId, lh: false})}
                        Component={TouchableScale}
                        friction={90} //
                        tension={100} // These props are passed to the parent component (here TouchableScale)
                        activeScale={0.95} //
                        >
                            <Avatar rounded  size="large" source={{ uri: item.img }} />
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                    </ListItem>
                </View>

            </>
        )
    }

    console.log("HAIRRRRRR", hair)


    return (

        <View style={{ flex: 1, backgroundColor: "#3e1a15" }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#bd9377", textAlign: "center" }} h3>Các kiểu tóc đẹp</Text>
            </View>
            <View style={{ flex: 7, marginHorizontal: 10, backgroundColor: "#3e1a15" }}>
                <FlatList
                    data={hair}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={1}
                />
            </View>
        </View>


    )
}

export default Trangchu;

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        marginVertical: 15,
        marginLeft: 5,


    },
    label: {
        margin: 8,
        fontSize: 15,
        fontFamily: 'Arial',
        fontWeight: 'bold'

    },
    imputText: {
        borderWidth: 1,
        margin: 5,
        padding: 10,
        borderRadius: 15
    },
    press: {
        width: 100,
        marginTop: 20,
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#102751',
        borderWidth: 1,
        borderColor: '#102751',
        borderRadius: 20,
        textAlign: 'center',

    },
    iconContainer: {
        paddingVertical: 5,

        borderTopWidth: 1,
        marginTop: 10,
        // borderBottomWidth:1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // backgroundColor:'black'
    },


})