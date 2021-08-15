import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, TextInput, StyleSheet, View, FlatList, Alert, Modal } from 'react-native';
import { Image } from 'react-native-elements'
import { Button, ListItem, Avatar, Text, PricingCard } from 'react-native-elements';
import Dialog from "react-native-dialog";

const Lichhen = (props) => {
    const { navigation, route: { params: { id } } } = props
    const [itemId, setItemId] = useState(id)
    const [lichhen, setLichhen] = useState([])
    const [hair, setHair] = useState([])
    const [account, setAccount] = useState([])
    const [dialogon, setDialogon] = useState(false)
    const url = 'http://10.0.2.2:3000/api/lichhen/account/' + itemId

    const renderItem = ({ item }) => {
        const toc = hair.filter(data => {
            return data._id == item.hairId
        })


        const ondelete = () => {
            setDialogon(false)
            const option = {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },

            }
            const url = 'http://10.0.2.2:3000/api/lichhen/delete/' + item._id
            fetch(url, option)
                .then((res) => res.json())
                .then((res) => {
                    alert('Đã xóa')
                    fetch('http://10.0.2.2:3000/api/lichhen/account/' + itemId)
                        .then((res) => res.json())
                        .then((data) => {
                            setHair(data.hair)
                            setLichhen(data.lichhen)
                            setAccount(data.account)
                        }
                        )
                        .catch((err) => console.log("loi:" + err))
                }


                )
                .catch((err) => console.log("loi:" + err))


        }

        const keyExtractorItem = (items, index) => index.toString()

        return (

            <>
                <View style={{ flex: 1, backgroundColor: "white", marginVertical: 5, marginHorizontal: 7, borderRadius: 15 }}>

                    <FlatList
                        data={toc}
                        renderItem={({ item }) =>
                            <View style={{ flex: 1 }}>
                                <Pressable onPress={() => navigation.navigate('Details', { item: item, id: itemId, lh: true })} style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ marginVertical: 10 }} h2>{item.name}</Text>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={{ width: 300, height: 200, marginVertical: 10 }}
                                        PlaceholderContent={<ActivityIndicator />}
                                    />
                                </Pressable>
                            </View>
                        }
                        keyExtractor={keyExtractorItem}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 15, color: "grey", fontWeight: "bold", marginTop: 10 }}>Ngày cắt: {item.date}</Text>
                        <Button
                            containerStyle={{ margin: 10, borderWidth: 1, borderRadius: 20, }}
                            title="Xoá lịch hẹn"
                            type="outline"
                            titleStyle={{ color: "black" }}
                            onPress={()=>setDialogon(true)}

                        />
                    </View>
                </View>
                <Dialog.Container visible={dialogon}>
                <Dialog.Title>Bạn có muốn đăng xuất</Dialog.Title>
                <Dialog.Description>
                    Hành động này không thể quay lại
                </Dialog.Description>
                <Dialog.Button label="Huỷ" onPress={()=>setDialogon(false)}/>
                <Dialog.Button label="Đồng ý" onPress={ondelete}/>
            </Dialog.Container>

            </>
        )


    }

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.lichhen)
                setHair(data.hair)
                setLichhen(data.lichhen)
                setAccount(data.account)
            }
            )
            .catch((err) => console.log("loi:" + err))
    }, [])
    return (

        <View style={{ flex: 1, backgroundColor: "#3e1a15" }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#bd9377", textAlign: "center" }} h3>Lịch hẹn</Text>
            </View>
            <View style={{ flex: 7, marginHorizontal: 10, backgroundColor: "gray" }}>

                <FlatList
                    data={lichhen}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={1}
                />

            </View>
        </View>

    )
}

export default Lichhen;