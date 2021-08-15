import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import Trangchu from './Trangchu'
import Lichhen from './Lichhen'
import Khachhang from './Khachhang'
import Giohang from './Giohang'


const Tab = createBottomTabNavigator();

const Nav_Tab = (props) =>{
    const { navigation, route: { params: { id } } } = props
    const [itemId, setItemId] = useState(id)
    return(
        <Tab.Navigator
        screenOptions={{
                
                showLabel:false,
                style:{
                    position:'absolute',
                    
                    elevation:0,
                    backgroundColor:'#60bff1',
                    // borderTopLeftRadius:15,
                    // borderTopRightRadius:15,
                    
                    height:50,
                    shadowColor:'black',
                    shadowOffset:{
                        width:0,
                        height:10
                    },
                    shadowOpacity:0.25,
                    shadowRadius:3.5
                }

            }}>

            <Tab.Screen  name="Trangchu" component={Trangchu} initialParams={{id:itemId}}

                options={{
                  title: 'Trang chủ',
                    tabBarIcon: ({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center',top:5}}>
                            <Icon name="home" size={20} style={{color:focused?"#e32f45":"black" }} />
                            {/* <Text style={{color:focused?"#e32f45":"black"}}>HOME</Text> */}
                        </View>
                    ),
                }}
            />


            <Tab.Screen name="Lichhen" component={Lichhen} initialParams={{id:itemId}}

                options={{
                  title: 'Lịch hẹn',
                    tabBarIcon: ({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center',top:5}}>
                            <Icon name="calendar"  type='font-awesome' size={20} style={{color:focused?"#e32f45":"black" }} />
                            {/* <Text style={{color:focused?"#e32f45":"black"}}>HOME</Text> */}
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Khachhang" component={Khachhang} initialParams={{id:itemId}}
                options={{
                  title: 'Tài khoản',
                    tabBarIcon: ({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center',top:5}}>
                            <Icon name="user"  type='font-awesome' size={20} style={{color:focused?"#e32f45":"black" }} />
                            {/* <Text style={{color:focused?"#e32f45":"black"}}>HOME</Text> */}
                        </View>
                    ),
                }}
            />

            
        </Tab.Navigator>

    )
}

export default Nav_Tab;