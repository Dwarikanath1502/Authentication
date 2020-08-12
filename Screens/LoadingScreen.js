import React, { Component } from 'react'
import { Text, View , StyleSheet , ActivityIndicator } from 'react-native'

import * as firebase from 'firebase';


export default class LoadingScreen extends Component {
   
    static navigationOptions ={
        title: 'Loading',
        header: null
    }
   
     componentDidMount(){
        firebase.auth().onAuthStateChanged((authenticate)=>{
            if(authenticate){
                this.props.navigation.replace('Home')
            }else{ 
                this.props.navigation.replace('Signin')
            } 
        })
    }


    render() {
        return (
            <View>
                <ActivityIndicator  
                    size = 'large'
                    color = 'red'
                />
            </View>
        )
    }
}
