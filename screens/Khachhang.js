import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, TextInput, StyleSheet, View, FlatList, Alert, Modal } from 'react-native';
import { Image } from 'react-native-elements'
import { Button, ListItem, Avatar, Text, PricingCard } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/Icon';
import Dialog from "react-native-dialog";
const Khachhang = (props) => {
    const { navigation, route: { params: { id } } } = props
    const [itemId, setItemId] = useState(id)
    const [account, setAccount] = useState([])
    const [dialogon, setDialogon] = useState(false)

    const url = 'http://10.0.2.2:3000/api/account/' + itemId

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAccount(data.account)
            }
            )
            .catch((err) => console.log("loi:" + err))
    }, [])


    const onSignOut = () => {

        const url = "http://10.0.2.2:3000/api/logout"

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                navigation.replace("DangNhap")
            }
            )
            .catch((err) => console.log("loi:" + err))


    }



    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size="xlarge"
                icon={{ name: 'user', type: 'font-awesome' }}
                containerStyle={{ backgroundColor: "grey", marginTop: 100, marginBottom: 10 }}
            />
            <Text style={{ color: "white" }} h2>{account.username}</Text>
            <View style={{ flexDirection: "row", marginVertical: 15 }}>
                <Icon
                    color="white"
                    name="phone"
                    type='font-awesome'
                    size={30}
                />
                <Text style={{ color: "white", fontSize: 20, marginHorizontal: 10 }}>{account.phonenumber}</Text>
            </View>

            <Button
                onPress={() => navigation.navigate("DoiMatKhau", { id: itemId })}
                containerStyle={{ width: "80%", marginTop: 100, borderColor: "white", borderWidth: 1, borderRadius: 20, }}
                title="Thay đổi mật khẩu"
                type="outline"
                titleStyle={{ color: "white" }}
                icon={
                    <Icon
                        style={{ marginHorizontal: 10 }}
                        type='font-awesome'
                        name='lock'
                        size={20}
                        color={"white"}
                    />
                }
            />
           


            <Button
                icon={
                    <Icon
                        style={{ marginHorizontal: 10 }}
                        type='font-awesome'
                        name='sign-out'
                        size={20}
                        color={"#bd9377"}
                    />
                }
                containerStyle={{ marginTop: 50, alignSelf: "flex-end" }}
                title="Đăng xuất"
                type="clear"
                onPress={() => setDialogon(true)}
                titleStyle={{ color: "#bd9377" }}
            />

            <Dialog.Container visible={dialogon}>
                <Dialog.Title>Bạn có muốn đăng xuất</Dialog.Title>
                <Dialog.Description>
                    Hành động này không thể quay lại
                </Dialog.Description>
                <Dialog.Button label="Huỷ" onPress={()=>setDialogon(false)}/>
                <Dialog.Button label="Đồng ý" onPress={onSignOut}/>
            </Dialog.Container>

        </View>
    )
}

export default Khachhang;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3e1a15',
        alignItems: "center",
    },


})