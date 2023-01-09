import React from 'react'
import { View ,Text,TextInput,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo , Ionicons, Fontisto} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


function Home() {
  return (
    <View style={{flex:1}}>
        <View style={{paddingVertical:30,marginLeft:40}}>
        <AntDesign name="menuunfold" size={24} color="black" />
        
        <View style={{paddingLeft:260,marginTop:-20}}>
        <MaterialCommunityIcons name="bag-carry-on" size={24} color="gray" />
        </View>
        </View>
        <View style={{paddingVertical:10,paddingLeft:20}}>
            <Text style={{fontSize:25,fontWeight:"700"}}> Delicious</Text>
            <Text style={{fontSize:25,fontWeight:"700"}}> food for you</Text>

            <View style={{width:80,paddingVertical:50,padding:10,paddingHorizontal:30}}>
            <TextInput
             style={{width:250,height: 40,borderRadius:10,paddingLeft:20,backgroundColor:"#fff"}}
             placeholder="Search"
            
            />
           
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
                <Text style={{color:"#F45308",borderBottomWidth:2,borderBottomColor:"#F45308"}}> Foods</Text>
                <Text> Drink</Text>
                <Text> Snake</Text>
                <Text> Sauoce</Text>

            </View>
           
            <View style={{flex:1,flexDirection:"row",marginVertical:50}}>
                
            <View style={{backgroundColor:"#fff",width:180,height:220,borderRadius:20,justifyContent:"flex-end",alignItems:"center"}}>
                
                <View>
                    <View style={{backgroundColor:"gray",width:100,height:100,borderRadius:50,margin:60,justifyContent:"center",paddingHorizontal:20}}>
                    <Ionicons name="fast-food-sharp" size={60} color="#F49B08"/>
                    </View>
                </View>
                <Text style={{fontSize:20}}> Veggie</Text>
                <Text style={{fontSize:20}}>tomato mix</Text>
                <Text style={{fontSize:10,padding:10,color:"#F45308"}}>N1 900</Text>
                </View>

            <View style={{backgroundColor:"#fff",width:180,height:220,borderRadius:20,justifyContent:"flex-end",alignItems:"center",marginHorizontal:20}}>
                <View>
                    <View style={{backgroundColor:"gray",width:100,height:100,borderRadius:50,margin:60,justifyContent:"center",paddingHorizontal:20}}>
                    <Fontisto name="coffeescript" size={50} color="#F49B08" />                   
                    </View>
                </View>
                <Text style={{fontSize:20}}> Mango</Text>
                <Text style={{fontSize:20}}>tomato mix</Text>
                <Text style={{fontSize:10,padding:10,color:"#F45308"}}>N1 900</Text>
                
            </View>
            </View>
        </View>

      <View style={{flexDirection:"row",paddingVertical:190,justifyContent:"space-between",padding:30}}>
      <Entypo name="home" size={24} color="#F45308" />
      <Entypo name="heart-outlined" size={24} color="black" />
      <AntDesign name="user" size={24} color="black" />
      <AntDesign name="clockcircleo" size={24} color="black" />
      </View>
       
      
    </View>
  )
}

export default Home
