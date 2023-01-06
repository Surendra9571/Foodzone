import React, { useState,useEffect } from "react";
import{ View, Text , SafeAreaView, StatusBar,Button, TouchableOpacity ,TextInput} from"react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) =>{
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [erroremail, setErroremail] = useState("")
    const [errorpassword, setErrorpassword] = useState("")

    const handleFrom = () =>{

        if( email == '' && password == ''){
            setErrorpassword("Email and Password not should be empty")
            return;
        }
        else if(email.length<8 && password.length<8 ){
            setErrorpassword("Email and Password  should be 8 charecters")
            return;
        }
        else if(email.length< 8){
            setErroremail ("email should be minimum 8 word")
            return;
                }

        else{
            setEmail("");
            setPassword("");
            navigation.navigate('Home')
            }}

    return(
    <View style={{flex:1}}>
        <View style={{backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-between",padding:20,paddingVertical:120,borderRadius:30,alignItems:"flex-end"}}>
       <TouchableOpacity>
       <Text style={{color:"black",fontWeight:"bold", fontSize:20}}>Login</Text>
       </TouchableOpacity>
       <TouchableOpacity>
       <Text style={{ color:"black", fontWeight:"bold", fontSize:20}}>sign-up </Text>
       </TouchableOpacity>
        </View>

        <View style={{padding: 20,paddingHorizontal:50}}>
            <View>
            <Text>Email</Text>
            <TextInput
             style={{height: 40,borderBottomWidth:1}}
             placeholder="Enter youe Email"
             value={email}
             onChangeText={text => setEmail(text)} 
            />
            { erroremail.length > 0 &&
            <Text style={{color:'red'}}> {erroremail}</Text> }
            </View>
      
        <View>
        <Text>Password</Text>
        <TextInput
        style={{height: 40,borderBottomWidth:1}}
        placeholder="Enter youe password"
        value={password}
        onChangeText={text => setPassword (text)} 
         />
         {errorpassword.length > 0 &&
         <Text style={{color:'red'}}> {errorpassword}</Text>

         }
        </View>

      <TouchableOpacity style={{paddingVertical:20}}>
        <Text style={{color:"red",fontSize:15}}> Forgot password</Text>
      </TouchableOpacity>
       </View>

      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity onPress={handleFrom}>
        <Text style={{fontSize:25,backgroundColor:"red",color:"#fff",borderRadius:10,width:130,paddingLeft:25}}> Login </Text>
      </TouchableOpacity>
      </View>

    </View>

    )
}
export default Login;