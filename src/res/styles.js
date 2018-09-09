import styled from "styled-components";
import { Dimensions } from 'react-native'

const screenHeight = Dimensions.get('screen').height
const screenWitdh = Dimensions.get('screen').width

export const HomeViewlayout = styled.View`
    height : 45;
    background-color : #e60000;
    justifyContent : center;
    alignItems : center;
`

export const ViewListBtn = styled.View`
    height : 50;
    background-color : #FFFFFF;
    box-shadow: 10px 5px 5px black;
    justifyContent:center;
`

export const TextBtn = styled.Text`
     margin-left : 10px;
`



export const ViewTitleLayout = styled.View`
    height : 45;
    background-color : #e60000;
    flexDirection : row;
    justifyContent : flex-start;
    alignItems : center;
    flexWrap : wrap;
`

export const ViewBoxBar = styled.View`
    flex : 1;
    alignItems: center;
    justifyContent:center;
`
export const ViewBoxBarCenter = styled.View`
     flex : 5;
    alignItems: center;
    justifyContent: center;
`

export const TextStyle = styled.Text`
    color: white ;
    font-size : 20;
    font-weight: bold;
`

export const ContentViewHome = styled.View`
     height : 200;
     margin-top : 10;
     background-color : green;
    
`
export const TextContentHome = styled.Text`
    color: white ;
    font-size : 35;
    font-weight: bold;
`
export const BackgroundImagesView = styled.ImageBackground`
    height: 200;
    justifyContent : center;
     alignItems : center;
`

export const ScrollViewlayout = styled.ScrollView`
    
`