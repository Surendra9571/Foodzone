import React, { useState,useEffect } from "react";
import{ View, Text , SafeAreaView, StatusBar,Button, TouchableOpacity ,TextInput} from"react-native";
import { Ionicons } from '@expo/vector-icons';


const Login = ({navigation}) =>{
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [erroremail, setErroremail] = useState("")
    const [errorpassword, setErrorpassword] = useState("")

    const handleFrom = () =>{

        if( email == '' && password == ''){
            setErrorpassword && setErroremail("Email and Password not should be empty")
            return;
        }
        else if(email.length <8 && password.length<8 ){
            setErrorpassword && setErroremail("Email and Password  should be 8 charecters")
            return;
        }
        else if(email.indexOf('') && password.indexOf('') >=0){
          setErrorpassword && setErroremail ("email and password cannot contain spaces")
            return;
                }
              
        else{
            setEmail("");
            setPassword("");
            navigation.navigate('Home')
            }}

    return(
    <View style={{flex:1}}>
       
        <View style={{flexDirection:"row",flex:1,width:320,height:200,backgroundColor:"#fff",justifyContent:"space-between",borderRadius:30,marginHorizontal:20,padding:10}}>
            
           <View style={{justifyContent:"flex-end",marginLeft:30}}>
           <TouchableOpacity>
           <Text style={{fontSize:15,borderBottomWidth:2,borderBottomColor:"#F49B08",fontWeight:"700"}}> Login</Text>
           </TouchableOpacity>
           </View>
           <View style={{paddingVertical:30}}>
            <Ionicons name="fast-food-sharp" size={80} color="#F49B08" />
            </View>
          <View style={{justifyContent:"flex-end",marginRight:30}}>
          <TouchableOpacity>
           <Text style={{fontSize:15,fontWeight:"700"}}>Sign-up </Text>
           </TouchableOpacity>
          </View>

        </View>

        <View style={{padding:30,paddingHorizontal:50}}>
            <View>
            <Text style={{color:"gray",fontWeight:"500"}}>Email address</Text>
            <TextInput
             style={{height: 40,borderBottomWidth:1}}
             placeholder="Enter youe Email"
             value={email}
             onChangeText={text => setEmail(text)} 
            />
            { erroremail.length > 0 &&
            <Text style={{color:'red'}}> {erroremail}</Text> }
            </View>
      
        <View style={{paddingVertical:20}}>
        <Text style={{color:"gray",fontWeight:"500"}}>Password</Text>
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
        <Text style={{color:"#F49B08",fontSize:15,fontWeight:"700"}}> Forgot password ?</Text>
      </TouchableOpacity>
       </View>

      <View style={{flex:1,justifyContent:"center",alignItems:"center",alignContent:"center"}}>
      <TouchableOpacity onPress={handleFrom}>
        <Text style={{fontSize:16,backgroundColor:"#F45308",color:"#fff",borderRadius:50,width:200,height:50,paddingLeft:75,paddingVertical:15}}> Login </Text>
      </TouchableOpacity>
      </View>

    </View>

    )
}
export default Login;