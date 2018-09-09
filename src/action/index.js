import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const initalState = {
  Home :[],
  Product : [],
  Catalog : [],
  loading : false,
}



export const reducerData =  (state = initalState , action  ) => {
  switch (action.type){

      case 'Home':
          return { ...state , 
            Home :  action.home,
            loading : 'success'
          };
      
      case 'Product':
          return{ ...state ,
            Product : action.product,
            loading : 'success'
          }
      case 'Catalog':
      return{
        ...state,
        Catalog : action.catalog,
        loading : 'success'
      }
     
      default :
          return state
  }
}



let rootReducer = combineReducers({
    reducerData,
})


export default createStore( rootReducer, applyMiddleware( logger, thunk ) )

