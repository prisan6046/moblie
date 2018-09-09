import React ,{ Component  } from "react";
import { View , Text  , StyleSheet , Platform ,ScrollView  ,TouchableOpacity} from 'react-native'
import { ViewListBtn , TextBtn } from "../res/styles";
import TitleBar from '../components/layoutbar';
import store from '../action'

export default class CatalogProject extends Component{

    render(){
        return(
            <View style={ styles.container }>
                <TitleBar name="Project" />
                <ScrollView>
                {
                    store.getState().reducerData.loading == 'success' ?
                        store.getState().reducerData.Product.map((a, i) => {
                              return  <TouchableOpacity onPress={()=>{ console.log( a.id ) }}>
                                        <ViewListBtn key={i}>
                                            <TextBtn> {a.Product_name}</TextBtn>
                                        </ViewListBtn>
                                    </TouchableOpacity>
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
