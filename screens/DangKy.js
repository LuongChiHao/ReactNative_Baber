import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, TextInput, StyleSheet, View, FlatList, Alert, Modal, Text } from 'react-native';
import { Image, Input, Button, Icon } from 'react-native-elements';

const DangKy = (props) =>{
    const {navigation} = props;
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirm, setPasswordConfirm] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [trungEmail, setTrungEmail] = useState(false)


    const onDangKy = () => {
  
                


        if (password && email && passwordConfirm && phoneNumber.length==10)
        {
            const option = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: email, password: password, password_confirm: passwordConfirm, phonenumber:  phoneNumber })
            }
    
            const url = 'http://10.0.2.2:3000/api/signup/'
    
           
                fetch(url, option)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.status) {
                            console.log(res)
                            alert('Đăng ký thành công')
                            navigation.replace("DangNhap")
                        } else {
                            console.log(res)
                            alert('Đăng ký không thành công => Các lý do: Tài khoản đã tồn tại - Mật khẩu không trùng khớp - Số điện thoại không hợp lý ')
                        }
                    }
                    )
                    .catch((err) => console.log("loi:" + err))
        }

        else alert("Không bỏ trống dữ liệu")
   
    }


    return(
        <>
           <View style={styles.container}>
                <View style={styles.header}>
                <Text h2 style={{ color: "#bd9377", fontSize: 30 }}>ĐĂNG KÝ</Text>
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
                    inputStyle={{ color: "white" }}
                    label="Số điện thoại"
                    labelStyle={{ color: "white", fontWeight: "bold" }}
                    placeholderTextColor={"white"}
                    inputContainerStyle={{ borderColor: "white" }}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder={"Nhập số điện thoại"}
                    // onChangeText={value => {checkSignUp(value)}}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'phone',
                        color: "white"
                    }}
                />

                <Input
                    label="Mật khẩu"
                    labelStyle={{ color: "white", fontWeight: "bold" }}
                    placeholderTextColor={"white"}
                    inputContainerStyle={{ borderColor: "white" }}
                    inputStyle={{ color: "white" }}
                    containerStyle={styles.input}
                    secureTextEntry={true}
                    value={password}
                    placeholder={"Nhập mật khẩu"}
                    onChangeText={setPassword}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'key',
                        color: "white"
                    }}
                />

                <Input
                    label="Nhập lại mật khẩu"
                    labelStyle={{ color: "white", fontWeight: "bold" }}
                    placeholderTextColor={"white"}
                    inputContainerStyle={{ borderColor: "white" }}
                    inputStyle={{ color: "white" }}
                    containerStyle={styles.input}
                    secureTextEntry={true}
                    value={passwordConfirm}
                    placeholder={"Nhập lại mật khẩu"}
                    onChangeText={setPasswordConfirm}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'key',
                        color: "white"
                    }}
                />

                

                <Button
                    containerStyle={{ margin: 10, borderColor: "white", borderWidth: 1, borderRadius: 20, }}
                    title="Đăng ký"
                    type="outline"
                    titleStyle={{color: "white"}}
                    onPress={onDangKy}
                    icon={
                        <Icon
                            type='font-awesome'
                            name='user-plus'
                            size={20}
                            color={"white"}
                        />
                    }
                />

                <Button
                    onPress={()=> navigation.replace("DangNhap")}
                    containerStyle={{ margin: 10}}
                    title="Chuyển sang đăng nhập"
                    type="clear"
                    titleStyle={{color: "#bd9377"}}
                />

                
                </View>
           </View>
        </>
    )
}

export default DangKy;

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
        flex: 6,
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