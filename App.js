import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import {NavigationContainer , StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//importing Screens
import HomeScreen from './Screens/HomeScreen'; 
import SigninScreen from './Screens/SigninScreen';
import SignupScreen from './Screens/SignupScreen';    
import LoadingScreen from './Screens/LoadingScreen';


const firebaseConfig = {
  apiKey: "AIzaSyBEyJYjqavxsK_DlldkAzwEtkwoVKkGLj4",
  authDomain: "fir-auth-75cdb.firebaseapp.com",
  databaseURL: "https://fir-auth-75cdb.firebaseio.com",
  projectId: "fir-auth-75cdb",
  storageBucket: "fir-auth-75cdb.appspot.com",
  messagingSenderId: "50133202884",
  appId: "1:50133202884:web:ad8792be4ef4d406575691"
}; 
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);  
}


const Stack = createStackNavigator();


function App(){
  return(
    <NavigationContainer>
  <Stack.Navigator initialRouteName = 'Loading'>
    <Stack.Screen   
      name = 'Loading'
      component = {LoadingScreen}
      options = {{
        headerTintColor:'#fff',
        headerStyle:{
          backgroundColor:'#2475B0'
        }
      }}
    />
    <Stack.Screen   
      name = 'Home' 
      component = {HomeScreen}
      options = {{
        headerShown: false
      }}
    /><Stack.Screen   
      name = 'Signin'
      component = {SigninScreen}
      options ={{
        headerShown:false
      }}
    /><Stack.Screen   
      name = 'Sign Up'
      component = {SignupScreen}
      options = {{
        headerShown: false
      }}
    />
  </Stack.Navigator>
</NavigationContainer>
  );
}




export default App;