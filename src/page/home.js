import React , { Component } from 'react';
import { View , StyleSheet , Platform  , TouchableOpacity } from 'react-native';
import { bg } from "../res/value";
import store from '../action';
import { 
    HomeViewlayout ,
    TextStyle ,
    ScrollViewlayout ,
    ContentViewHome ,
    TextContentHome ,
    BackgroundImagesView
} from "../res/styles.js";
import { Actions } from 'react-native-router-flux';

class Home extends Component{


    clickAction(number){
        if(number == 'C2'){
            Actions.About()
        }
        if(number == 'C4'){
            Actions.Project()
        }
        if(number == 'C5'){
            Actions.Catalog()
        }
    }

    render(){
        let view = [
            {
                menu : 'Home',
                action : 'C2',
            },
            {
                menu : 'PROJECT',
                action : 'C4',
            },
            {
                menu : 'CATALOG',
                action : 'C5',
            },
            {
                menu : 'CONTRACT',
                action : 'C6',
            },
            ].map( ( { menu , action  } , i ) => {
                return <ContentViewHome key={ i } >
                        <TouchableOpacity onPress={()=> { this.clickAction(action) } }>
                            <BackgroundImagesView source={ bg[i] }>
                                <TextContentHome> { menu } </TextContentHome>
                            </BackgroundImagesView>
                        </TouchableOpacity>
                    </ContentViewHome>
            })

        return(
            <View style={ styles.container }>
                <HomeViewlayout>
                    <TextStyle>TTIP </TextStyle>
                </HomeViewlayout>

                <ScrollViewlayout>

                    { view }

                </ScrollViewlayout>

                <HomeViewlayout>
                    
                </HomeViewlayout>
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

export default Home;