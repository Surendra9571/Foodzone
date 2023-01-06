import React from 'react'
import { View ,Text,TextInput,TouchableOpacity} from 'react-native'

function Home() {
  return (
    <View style={{flex:1}}>
        <View style={{paddingVertical:100,paddingLeft:20}}>
            <Text style={{fontSize:40,fontWeight:"500"}}> Delicious</Text>
            <Text style={{fontSize:40,fontWeight:"500"}}> food for you</Text>

            <View style={{width:70,paddingVertical:50,padding:10,paddingHorizontal:30}}>
            <View>
            <TextInput
             style={{width:250,height: 40,borderRadius:10,paddingLeft:20,backgroundColor:"#fff"}}
             placeholder="Search"
            
            />
            </View>
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
                <Text style={{color:"pink",borderBottomWidth:2,borderBottomColor:"red"}}> Foods</Text>
                <Text> Drink</Text>
                <Text> Snake</Text>
                <Text> Sauoce</Text>

            </View>
            <View style={{flex:1,flexDirection:"row",marginVertical:20}}>
            <View style={{backgroundColor:"#fff",width:180,height:200,borderRadius:20,justifyContent:"flex-end",alignItems:"center"}}>
                <View>
                    <View style={{backgroundColor:"gray",width:100,height:100,borderRadius:50,margin:30}}>

                    </View>
                 
                </View>
                <Text style={{fontSize:20}}> Veggie</Text>
                <Text style={{fontSize:20}}>tomato mix</Text>
                <Text style={{fontSize:10,padding:10,color:"red"}}>N1 900</Text>
                
            </View>

            <View style={{backgroundColor:"#fff",width:180,height:200,borderRadius:20,justifyContent:"flex-end",alignItems:"center",marginHorizontal:20}}>
                <View>
                    <View style={{backgroundColor:"gray",width:100,height:100,borderRadius:50,margin:30}}>

                    </View>
                 
                </View>
                <Text style={{fontSize:20}}> Mango</Text>
                <Text style={{fontSize:20}}>tomato mix</Text>
                <Text style={{fontSize:10,padding:10,color:"red"}}>N1 900</Text>
                
            </View>
            </View>
        </View>

      
       
      
    </View>
  )
}

export default Home
