import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text, StyleSheet, View, FlatList, Alert, Modal } from 'react-native';
import { Image, Input, Button, Icon } from 'react-native-elements';
import Dialog from "react-native-dialog";

const DoiMatKhau = (props) =>{
    const { navigation, route: { params: { id } } } = props
    const [itemId, setItemId] = useState(id)
    const [oldpassword, setOldpassword] = useState(null)
    const [newpassword, setNewpassword] = useState(null)
    const [passwordConfirm, setPasswordConfirm] = useState(null)
    const [dialogon, setDialogon] = useState(false)

    const onLogin = () => {
        setDialogon(false)
        const option = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ current_password: oldpassword, password: newpassword, password_confirm: passwordConfirm })
        }

        const url = 'http://10.0.2.2:3000/api/changepass/'+itemId

       
            fetch(url, option)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status) {
                        console.log(res)
                        alert('Đổi mật khẩu thành công')
                        navigation.replace("DangNhap")
                    } else {
                        console.log(res)
                        alert('Không thành công rồi')
                    }
                }
                )
                .catch((err) => console.log("loi:" + err))
   
    }


    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                <Text h2 style={{ color: "#bd9377", fontSize: 30 }}>ĐỔI MẬT KHẨU</Text>
                </View>

                <View style={styles.footer}>

                <Input
                    label="Password cũ"
                    labelStyle={{ color: "white", fontWeight: "bold" }}
                    placeholderTextColor={"white"}
                    inputContainerStyle={{ borderColor: "white" }}
                    inputStyle={{ color: "white" }}
                    containerStyle={styles.input}
                    secureTextEntry={true}
                    value={oldpassword}
                    placeholder={"Nhập password cũ"}
                    onChangeText={setOldpassword}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'key',
                        color: "white"
                    }}
                />

                <Input
                    label="Password mới"
                    labelStyle={{ color: "white", fontWeight: "bold" }}
                    placeholderTextColor={"white"}
                    inputContainerStyle={{ borderColor: "white" }}
                    inputStyle={{ color: "white" }}
                    containerStyle={styles.input}
                    secureTextEntry={true}
                    value={newpassword}
                    placeholder={"Nhập password mới"}
                    onChangeText={setNewpassword}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'key',
                        color: "white"
                    }}
                />

<Input
                    label="Nhập lại Password"
                    labelStyle={{ color: "white", fontWeight: "bold" }}
                    placeholderTextColor={"white"}
                    inputContainerStyle={{ borderColor: "white" }}
                    inputStyle={{ color: "white" }}
                    containerStyle={styles.input}
                    secureTextEntry={true}
                    value={passwordConfirm}
                    placeholder={"Nhập lại password"}
                    onChangeText={setPasswordConfirm}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'key',
                        color: "white"
                    }}
                />

                

                <Button
                    containerStyle={{ margin: 10, borderColor: "white", borderWidth: 1, borderRadius: 20, }}
                    title="Đổi mật khẩu"
                    type="outline"
                    titleStyle={{color: "white"}}
                    onPress={()=>setDialogon(true)}
                    icon={
                        <Icon
                            type='font-awesome'
                            name='exchange'
                            size={20}
                            color={"white"}
                            style={{marginHorizontal: 10}}
                        />
                    }
                />

            <Dialog.Container visible={dialogon}>
                <Dialog.Title>Bạn có muốn đổi mật khẩu</Dialog.Title>
                <Dialog.Description>
                    Hành động này không thể quay lại
                </Dialog.Description>
                <Dialog.Button label="Huỷ" onPress={()=>setDialogon(false)}/>
                <Dialog.Button label="Đồng ý" onPress={onLogin}/>
            </Dialog.Container>
                
                </View>
           </View>
        </>
    )
}

export default DoiMatKhau;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3e1a15'

    },

    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
        flex: 3,
        paddingHorizontal: 20,
        paddingTop: 20,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 30,
    },

    text_picker:{
        
        color: "white",
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: "bold"
    },





})