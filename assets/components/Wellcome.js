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
        <View style={{alignItems:"center",margin:20}}>
      <TouchableOpacity>
        <Text style={{fontSize:16,backgroundColor:"#fff",color:"red",borderRadius:50,width:200,height:50,paddingLeft:45,paddingVertical:15}}> Get starteed</Text>
      </TouchableOpacity>
      </View>
        </View>
    </View>
   </SafeAreaView>

    )

}
export default Wellcome;