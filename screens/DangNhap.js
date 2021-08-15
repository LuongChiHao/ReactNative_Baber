import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text, StyleSheet, View, FlatList, Alert, Modal } from 'react-native';
import { Image, Input, Button, Icon } from 'react-native-elements';
const DangNhap = (props) =>{
    const {navigation} = props;
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    const onLogin = () => {
        const option = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: email, password: password })
        }

        const url = 'http://10.0.2.2:3000/api/login/'

       
            fetch(url, option)
                .then((res) => res.json())
                .then((res) => {
                    if (res.status) {
                        console.log(res)
                        navigation.replace('Nav_Tab',{id:res.user._id})
                        
                    } else {
                        console.log(res)
                        alert("Sai tài khoản hoặc mật khẩu")
                    }
                }
                )
                .catch((err) => console.log("loi:" + err))
   
    }


    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                <Text h2 style={{ color: "#bd9377", fontSize: 30 }}>ĐĂNG NHẬP</Text>
                </View>

                <View style={styles.footer}>

                <Input
                    inputStyle={{ color: "white" }}
                    label="Tên tài khoản"
                    labelStyle={{ color: "white", fontWeight: "bold" }}
                    placeholderTextColor={"white"}
                    inputContainerStyle={{ borderColor: "white" }}
                    value={email}
                    placeholder={"Nhập tên tài khoản cần đăng ký"}
                    onChangeText={setEmail}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'envelope',
                        color: "white"
                    }}
                />

                <Input
                    label="Password"
                    labelStyle={{ color: "white", fontWeight: "bold" }}
                    placeholderTextColor={"white"}
                    inputContainerStyle={{ borderColor: "white" }}
                    inputStyle={{ color: "white" }}
                    containerStyle={styles.input}
                    secureTextEntry={true}
                    value={password}
                    placeholder={"Nhập password"}
                    onChangeText={setPassword}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'key',
                        color: "white"
                    }}
                />

                

                <Button
                    containerStyle={{ margin: 10, borderColor: "white", borderWidth: 1, borderRadius: 20, }}
                    title="  Đăng nhập"
                    type="outline"
                    titleStyle={{color: "white"}}
                    onPress={onLogin}
                    icon={
                        <Icon
                            type='font-awesome'
                            name='sign-in'
                            size={20}
                            color={"white"}
                        />
                    }
                />

                <Button
                    onPress={()=> navigation.replace("DangKy")}
                    containerStyle={{ margin: 10}}
                    title="Bạn chưa có tài khoản????"
                    type="clear"
                    titleStyle={{color: "#bd9377"}}
                />

                
                </View>
           </View>
        </>
    )
}

export default DangNhap;

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
        flex: 2,
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