import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import DangKy from './screens/DangKy'
import DangNhap from './screens/DangNhap'
import Trangchu from './screens/Trangchu'
import Lichhen from './screens/Lichhen'
import Giohang from './screens/Giohang'
import Khachhang from './screens/Khachhang'
import Nav_Tab from './screens/Nav_Tab';
import Details from './screens/Details'
import DoiMatKhau from './screens/DoiMatKhau';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
;

const Stack = createStackNavigator();



const App=() => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DangNhap">

        <Stack.Screen
        options={{
          headerTransparent: 'false',
          title: '',

        }}
            name="DangKy"
            component={DangKy}
          />

        <Stack.Screen
        options={{
          headerTransparent: 'false',
          title: '',

        }}
            name="Nav_Tab"
            component={Nav_Tab}
          />

      <Stack.Screen
        options={{
          headerTransparent: 'false',
          title: '',

        }}
            name="DoiMatKhau"
            component={DoiMatKhau}
        />

        <Stack.Screen
        options={{
          headerTransparent: 'false',
          title: '',

        }}
            name="Details"
            component={Details}
          />

        <Stack.Screen
        options={{
          headerTransparent: 'false',
          title: '',

        }}
            name="DangNhap"
            component={DangNhap}
          />

        <Stack.Screen
        options={{
          headerTransparent: 'false',
          title: '',

        }}
            name="Trangchu"
            component={Trangchu}
          />

        <Stack.Screen
        options={{
          headerTransparent: 'false',
          title: '',

        }}
            name="Lichhen"
            component={Lichhen}
          />

        <Stack.Screen
        options={{
          headerTransparent: 'false',
          title: '',

        }}
            name="Giohang"
            component={Giohang}
          />

        <Stack.Screen
        options={{
          headerTransparent: 'false',
          title: '',

        }}
            name="Khachhang"
            component={Khachhang}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
