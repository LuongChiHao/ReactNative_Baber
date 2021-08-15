import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, TextInput, StyleSheet, View, FlatList, Alert, Modal } from 'react-native';
import { Image, Icon, Card, Text } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/Button';
import Dialog from "react-native-dialog";

const Details = (props) => {
    const { navigation, route: { params: { item, id, lh } } } = props
    const [itemId, setItemId] = useState(id)
    const [data, setData] = useState(item)
    const [islh, setLh] = useState(lh)
    const [dialogon, setDialogon] = useState(false)

    const addToBill = () => {
        setDialogon(false)
        const option = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                date: new Date().toLocaleDateString(),
                accountId: itemId,
                hairId: item._id,
            })
        }

        const url = 'http://10.0.2.2:3000/api/lichhen/insert'


        fetch(url, option)
            .then((res) => res.json())
            .then((res) => {
                if (res.status) {
                    console.log(res)
                    alert('Đặt thành công')
                    navigation.replace("Nav_Tab", {id: itemId})
                } else {

                }
            }
            )
            .catch((err) => console.log("loi:" + err))

    }

    console.log("IDDDĐ", itemId)
    return (
        <>
            <View style={{ flex: 1, marginTop: 55, backgroundColor: "#3e1a15", justifyContent: 'center', alignItems: 'center', }}>
                <ScrollView>
                    <Text style={{ color: "#bd9377", marginVertical: 30,textAlign: "center" }} h2>{item.name}</Text>
                    <Image
                        source={{ uri: item.img }}
                        style={{ width: 400, height: 200,borderWidth: 2, borderColor:"white" }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text style={{color: "white", marginHorizontal: 10, marginTop: 20}}>{item.description}</Text>
              
                </ScrollView>
                {
                    islh==false ?  <Button
                                    containerStyle={{ margin: 10,borderColor: "white", borderWidth: 1, borderRadius: 20, }}
                                    title="Đặt lịch hẹn cho tóc"
                                    type="outline"
                                    titleStyle={{color: "white"}}
                                    onPress={()=>setDialogon(true)}
                                />
                                
                             : <Text></Text>   
                }

            <Dialog.Container visible={dialogon}>
                <Dialog.Title>Bạn có muốn đặt lịch cho tóc</Dialog.Title>
                <Dialog.Description>
                    Hành động này không thể quay lại
                </Dialog.Description>
                <Dialog.Button label="Huỷ" onPress={()=>setDialogon(false)}/>
                <Dialog.Button label="Đồng ý" onPress={addToBill}/>
            </Dialog.Container>
            </View>
        </>
    )
}

export default Details;