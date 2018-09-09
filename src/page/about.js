import React , { Component } from "react";
import { View , StyleSheet  , Platform , Text , ScrollView } from "react-native";

import TitleBar from '../components/layoutbar';
import store from '../action/index'

export default class about extends Component {

    constructor(){
        super();
       
    }

    render(){
        return(
            <View style={ styles.container }>    
                <TitleBar name="About" />
                <ScrollView>  

                   {
                        store.getState().reducerData.loading == 'success' ?
                        store.getState().reducerData.Home.map((a, i) => {
                            return  <View key={i}>
                                        <Text> {a.detail}</Text>
                                    </View>
                            })
                        :
                        <View key={1}>
                                <Text> กำลังโหลดข้อมูล</Text>
                        </View>
                   }

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        paddingTop : Platform.OS === "ios" ? 25 : 0,
        flex: 1,
      },
});


