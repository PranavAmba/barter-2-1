import *as React from 'react'
import {StyleSheet ,Text ,View ,TextInput ,TouchableOpacity, Alert} from 'react-native'
import firebase from 'firebase'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
        }
    }
    render(){
        return(
            <View style={styles.container}>
         <TextInput placeholder='Email ID' onChangeText={(info)=>{
         this.setState({
             email:info
         })
     }} style={styles.formTextInput}></TextInput>
     <TextInput placeholder='Password' onChangeText={(info)=>{
         this.setState({
            password:info
         })
     }} style={styles.formTextInput}></TextInput>
     <TouchableOpacity onPress={this.goToScreen} style={styles.button}>
         <Text>Login</Text>
         </TouchableOpacity>
            </View>
        )
    }
    goToScreen= async ()=>{
        if(this.state.email&&this.state.password){
           try{
               const response=await firebase
               .auth()
               .signInWithEmailAndPassword(this.state.email,this.state.password)
               if(response){
                   console.log(response,'login')
                this.props.navigation.navigate('Donate')
               }
           }
           catch(errorResponse){
               console.log(errorResponse)
               switch(errorResponse.code){
                   case 'auth/user-not-found':Alert.alert('User does not exist');break
                   case 'auth/invalid-email':Alert.alert('Incorrect email or password');break
                   default:Alert.alert('Error:Something went wrong :( Please try again');break
               }
           }
        }
        else{
            Alert.alert('Please enter email and password')
        }
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:"center"
    },
    modalContainer:{ 
        flex:1,
        //borderRadius:20,
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:"green", 
        marginRight:30, 
        marginLeft : 30, 
        marginTop:10, 
        marginBottom:10,
    },
    button:{
        width:100, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 0.44, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop:20 
    },
    input:{
       marginTop:50,
       borderColor:'white'
    },    
    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
    }, 
})