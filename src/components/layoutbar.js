import React ,{ Component  } from "react";
import {
    ViewTitleLayout ,
    ViewBoxBar ,
    ViewBoxBarCenter ,
    TextStyle

} from "../res/styles";
import { TouchableOpacity , Image } from "react-native";
import { Actions } from 'react-native-router-flux';

class layoutbar extends Component{

    goBack(){
        Actions.pop();
    }


    render(){
        return(
            <ViewTitleLayout>
                <ViewBoxBar>
                    <TouchableOpacity onPress={this.goBack} >
                        <Image source={ require('../asste/btnback.png') } />
                    </TouchableOpacity>
                </ViewBoxBar>
                <ViewBoxBarCenter>
                    <TextStyle>{ this.props.name }</TextStyle>
                </ViewBoxBarCenter>
                <ViewBoxBar></ViewBoxBar>
            </ViewTitleLayout>
        )
    }
}



export default layoutbar
