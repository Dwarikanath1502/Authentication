import React, { Component } from 'react'
import { Text, View , StyleSheet , Image , KeyboardAvoidingView , TouchableOpacity, Alert} from 'react-native'
import * as firebase from 'firebase'
import {Card , Form , Input , Label , Button, Item} from 'native-base'


export default class SignupScreen extends Component {

    static navigationOptions ={
        title: 'Sign Up',
        header: null
    };
    
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            password : ""
        }
    }

    signupUser = (name , email , password) =>{
        firebase
            .auth()
            .createUserWithEmailAndPassword(email , password)
            .then(authenticate =>{
                return authenticate.user
                .updateProfile({
                    displayName : name
                })
                .then(()=>{
                    this.props.navigation.replace('Home');
                })
            })
            .catch( error =>{
                alert(error.message)
            } )

    };


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
                   <Text>COMPANY NAME</Text>
               </View>
               <Form style = {styles.form}>
               <Item floatingLabel>
                       <Label>Name</Label>
                       <Input
                            autoCapitalize = 'none'
                            autoCorrect = {false}
                            keyboardType = 'name-phone-pad'
                            onChangeText = {name => this.setState({ name })}
                       ></Input>
                   </Item>
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
                       this.signupUser(
                           this.state.name,
                           this.state.email,
                           this.state.password
                       )
                   }}

                   >
                       <Text style = {styles.buttonText}>Sign Up</Text>
                   </Button>
               </Form>
               <View style = {styles.footer}>
                   <Text>OR</Text>
                   <TouchableOpacity
                    onPress = {()=>{this.props.navigation.navigate('Signin')}}
                   >
                       <Text
                        style = {{ fontWeight:'bold'}}
                       >
                          Already having an Account?
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
      marginTop: 5,
      marginBottom: 2
    },
    form: {
      padding: 20,
      width: "100%"
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