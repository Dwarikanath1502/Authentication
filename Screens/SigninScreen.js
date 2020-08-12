import React, { Component } from 'react'
import { Text, View , StyleSheet , Image , TouchableOpacity , KeyboardAvoidingView} from 'react-native'
import  * as firebase from 'firebase';
import {Card , Form , Input , Label , Button, Item} from 'native-base'


export default class SigninScreen extends Component {

    static navigationOptions ={
        title: 'Sign in',
        header: null
    };

    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        }
    }

    signInUser =( email , password) =>{
        firebase
        .auth()
        .signInWithEmailAndPassword( email , password)
        .then( () =>{
            this.props.navigation.replace('Home');
        })
        .catch(error =>{
            alert(error.message)
        })
    }

    render() {
        return (
            <KeyboardAvoidingView style = {styles.container}
            behavior = 'position' 
            enabled
            style = {styles.container}
            >
               <View style = {styles.logoContainer}>
                   <Image   
                    source = {require('../assets/logo.png')}
                   />
                   <Text>Learn code Online</Text>
               </View>
               <Form style = {styles.form}>
                   <Item floatingLabel>
                       <Label>E-mail</Label>
                       <Input
                            autoCapitalize = 'none'
                            autoCorrect = {false}
                            keyboardType = 'email-address'
                            onChangeText = {email => this.setState({ email })}
                       ></Input>
                   </Item>
                   <Item floatingLabel>
                       <Label>Password</Label>
                       <Input
                            secureTextEntry = {true}
                            autoCapitalize = 'none'
                            autoCorrect = {false}
                            onChangeText = {password => this.setState({ password })}
                       ></Input>
                   </Item>
                   <Button 
                    full
                    rounded
                   style = {styles.button}
                    onPress = {()=>{
                        this.signInUser( this.state.email,
                                        this.state.password)
                    }}
                   >
                       <Text style = {styles.buttonText}>Sign in</Text>
                   </Button>
               </Form>
               <View style = {styles.footer}>
                   <Text>OR</Text>
                   <TouchableOpacity
                    onPress = {()=>{this.props.navigation.navigate('Sign Up')}}
                   >
                       <Text
                        style = {{ fontWeight:'bold'}}
                       >
                           Create new Account
                       </Text>
                   </TouchableOpacity>
               </View>
            </KeyboardAvoidingView>
        )
    }
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10
    },
    form: {
      padding: 20,
      width: "100%",
      marginBottom: 30
    },
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center"
    }
  });