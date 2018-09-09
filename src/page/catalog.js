import React ,{ Component  } from "react";
import { View , StyleSheet , Platform ,ScrollView } from 'react-native'
import { ViewListBtn , TextBtn } from "../res/styles";

import TitleBar from '../components/layoutbar';
import store from '../action'

export default class Catalog extends Component{

    render(){
        return(
            <View style={ styles.container }>
                <TitleBar name="Catalog" />
                <ScrollView>
                {
                    store.getState().reducerData.loading == 'success' ?
                        store.getState().reducerData.Catalog.map((a, i) => {
                            return  <ViewListBtn key={i}>
                                        <TextBtn> {a.name}</TextBtn>
                                    </ViewListBtn>
                            })
                        :
                        <ViewListBtn key={1}>
                                <TextBtn> กำลังโหลดข้อมูล</TextBtn>
                        </ViewListBtn>
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
