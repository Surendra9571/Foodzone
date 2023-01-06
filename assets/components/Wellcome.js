import React,{useEffect} from "react";
import{ View, Text , SafeAreaView, StatusBar,Button,TouchableOpacity,Alert} from"react-native";
import { MaterialCommunityIcons , FontAwesome5} from '@expo/vector-icons';



const Wellcome = ({navigation}) =>{
   useEffect(() =>{
    setTimeout(navi,3000);

   },[])

   const navi =() =>{
   navigation.navigate("Login")
   }
    return(
   <SafeAreaView style={{flex:1}}>
     <View style={{flex:1,backgroundColor:"red"}}>
        <View style={{ paddingHorizontal:50, paddingVertical:10 }}>
        <MaterialCommunityIcons name="bike-fast" size={200} color="pink" style={{paddingVertical:20}} />
        <View>

        </View>
           <FontAwesome5 name="shopping-bag" size={100} color="#f5c907" style={{paddingHorizontal:80}}/>
            
        </View>
        <View style={{ flex:1, alignItems:"center" }}>
            <Text style={{color:"#fff",fontWeight:"bold", fontSize:20}}> Food for Everyone </Text>
            <Text style={{ color:"#fff", fontWeight:"bold", fontSize:20}}> Anytime </Text>

        </View>
        <View>
        <View style={{justifyContent:"center",alignItems:"center",paddingVertical:50}}>
      <TouchableOpacity onPress={navigation.navigate('Login')}>
        <Text style={{width:400,fontSize:25,backgroundColor:"#fff",color:"black",borderRadius:10,width:100,paddingLeft:10}}>Stared </Text>
      </TouchableOpacity>
      </View>
        </View>
    </View>
   </SafeAreaView>

    )

}
export default Wellcome;