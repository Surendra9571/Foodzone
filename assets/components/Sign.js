import react from "react";
import {View,Text ,TextInput,TouchableOpacity, SafeAreaView} from "react-native";

const Form = () =>{
    return(
        <View>
            <SafeAreaView >
            <View style={{padding:10,justifyContent:"center"}}>
                <Text style={{fontSize:25,fontWeight:"600"}}> Signup</Text>
            </View>
         <View style={{padding:20}}>
            <View style={{paddingVertical:10}}>
            <TextInput
             style={{height: 40,borderWidth:1,borderRadius:10}}
             placeholder="Frist Name"
            />
            </View>
        <View style={{paddingVertical:10}}>
          <TextInput
          style={{height: 40,borderWidth:1,borderRadius:10}}
          placeholder="Last Name"
            />
          </View>
          <View style={{paddingVertical:10}}>
          <TextInput
          style={{height: 40,borderWidth:1,borderRadius:10}}
          placeholder="Date of Brith"
            />
          </View>
          <View style={{paddingVertical:10}}>
          <TextInput
          style={{height: 40,borderWidth:1,borderRadius:10}}
          placeholder="Mobile Number"
            />
          </View>
          <View style={{paddingVertical:10}}>
          <TextInput
          style={{height: 40,borderWidth:1,borderRadius:10}}
          placeholder="Email"
            />
          </View>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
            <Text> Gender: </Text>
            <Text> Female </Text>
            <Text> Male </Text>
            <Text> Other </Text>
          </View>
          <View style={{padding:20}}>
            <View style={{paddingVertical:10}}>
            <TextInput
             style={{height: 40,borderWidth:1,borderRadius:10}}
             placeholder="Address line 1"
            />
            </View>
        <View style={{paddingVertical:10}}>
          <TextInput
          style={{height: 40,borderWidth:1,borderRadius:10}}
          placeholder="Address line 1"
            />
          </View>
          <View style={{paddingVertical:10}}>
          <TextInput
          style={{height: 40,borderWidth:1,borderRadius:10}}
          placeholder="Select State"
            />
          </View>
         
          </View>
          </SafeAreaView>
          </View>
       
     

    )
};
export default Form;