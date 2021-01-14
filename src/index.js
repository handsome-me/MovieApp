import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers' 
 
import thunk from 'redux-thunk';


const store=createStore(rootReducer, applyMiddleware(thunk));
 
console.log('State'+store.getState());

 // Context API
  export  const myContext=React.createContext()
 
ReactDOM.render(
   
  //this store is available to all the child of app compoent inclusing app component
  //whenever the store value changes, all the consumer consuming it will re render() , it will re render with state change only (setStte in class and set(setount , setName, any) in hooks);

  //when state changes of any component all the child component of that state including that stae get re render()
  //same happean in context , but as we provide context too all the app compoennt it should not re render all the child , it should only
  //re render the component where data is changed
  
  <myContext.Provider value={store}>

    <App store={store} />
     
    
   </myContext.Provider>,

  document.getElementById('root')
);


//we can also wrap app component by creating the class of provider

/*


//this is another way to implement the provider, do the same thing as above code
class Provider extends React.Coponent{

  render()
  {
    return(
     const  {store}= this.props;
      <myContext.Provider value={store}>

      </myContext.Provider
    )
  }
  

}

// we can use 



ReactDOM.render(
   
   
   <Provider store={store}>
    <App store={store} />
   </Provider>,

  document.getElementById('root')
);
*/



 
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
 
 
 