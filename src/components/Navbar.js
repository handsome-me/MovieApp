import React from 'react';
//import logo from './logo.svg';
//import './App.css';
 import ConsoleHelper from '../ConsoleHelper';

import {addMovies, searchMove} from '../actions/index';

class Navbar  extends React.Component {

       constructor()
       {
         super();

         this.state={value:""}
          this.handleClickBind=this.handleClick.bind(this);
       }


       inputChange= (e)=>{
        const value= e.target.value;
   ConsoleHelper(value);

   this.setState(
     {value:value}
     );

      }

  handleClick(e){

 
//e.nativeEvent.Mouseevent

  //if e is define means key is press (any on keyboard) else mouse is click...
  
  ConsoleHelper(e.nativeEvent.type);
  
    if( e.nativeEvent.type!="click")
    if (e.key !=="Enter") 
    {
      
      ConsoleHelper("Wrong key pressed ......return", e.key);
      return;
      // callMyFunction();
    } 

    ConsoleHelper(e);

         const  value=this.state.value;
        
         const {dispatch}= this.props.store;

         ConsoleHelper('into handleClick()....',value);
        dispatch(searchMove(value));

         

     

  };

  render ()
  {
      return (
          <div className='nav'>
              <div className="search-container">

                <input onChange={this.inputChange} onKeyDown={this.handleClickBind}/> 


    <button id='search-btn' onClick={this.handleClickBind}>Search</button>

        
     
              </div>
              
              </div>

      );
  }
    
}

export default Navbar;
