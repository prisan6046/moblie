import React , { Component } from 'react';
import { Router , Scene  , Stack } from 'react-native-router-flux';
import { url } from "./res/value";
import Home from './page/home';
import About from './page/about';
import Project from './page/project';
import Catalog from './page/catalog';
import store from './action/index';

export default class Route extends Component{

    componentDidMount(){
        this.getApiHome()
        this.getApiProduct()
        this.getApiCatalog()
    }

    getApiHome(){
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            store.dispatch({ type: 'Home',  home : responseJson })
        })
        .catch((error) => {
            console.error(error);
        });
    }
    getApiProduct(){
        fetch(url + 'product')
        .then((response) => response.json())
        .then((responseJson) => {
            store.dispatch({ type: 'Product',  product : responseJson })
        })
        .catch((error) => {
            console.error(error);
        });
    }
    getApiCatalog(){
        fetch(url+'catalog')
        .then((response) => response.json())
        .then((responseJson) => {
            store.dispatch({ type: 'Catalog',  catalog : responseJson })
        })
        .catch((error) => {
            console.error(error);
        });
    }

   render(){
       return(

            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="Home" component={Home} inital={true} />
                    <Scene key="About" component={About} />
                    <Scene key="Project" component={ Project} />
                    <Scene key="Catalog" component={ Catalog} />
                </Stack>
            </Router>
            
       )
   }
}
