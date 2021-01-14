import React from 'react';
//import logo from './logo.svg';
//import './App.css';
 
import Navbar from './Navbar'
import MovieCard from './MovieCard';
import {addMovies, searchMove} from '../actions/index';
import {setShowfav} from '../actions';

import ConsoleHelper from '../ConsoleHelper';
import  {myContext} from  '../index.js';

 



 

class  App extends React.Component{

    
  

  componentDidMount(){
    
   
    this.props.store.subscribe(()=>{
     
      console.log('Update');
        this.forceUpdate();

    })
    
    

    this.props.store.dispatch(searchMove());
      

     
    ConsoleHelper(this.props.store.getState());

  }

  isMovieFav=(movieName)=>{


    const {movie} =this.props.store.getState();
    const {favourites}= movie;

    const index= favourites.indexOf(movieName);

    if(index!==-1)
    {
      return true

    }else{
      return false;
    }
    

  }
 

  onTabChange=(val)=>{

    console.log('into onTabChange');
 
    this.props.store.dispatch(setShowfav(val));
      
     
     


  }
  
   
  render(){

    
    //console.log("myContext",myContext);
  
  ConsoleHelper(this.props.store.getState());



    const {movie}=this.props.store.getState();
    const {list, favourites, showFav}=movie;
    ConsoleHelper("render()--->>>>>>>", movie);


    ConsoleHelper("List ----<><>,..STORE...........",list);
    
    ConsoleHelper(this.props.store.getState());

    

    const displayMovie= showFav ? favourites :list;

  return (
   
    <myContext.Consumer>
    {
      (store)=>{
        ConsoleHelper(store);
    

   return(


    
      <div className="App">
  
       <Navbar store={store}/>

   <div className="main">
<div className="tabs">

<div className='tab' onClick={ ()=>this.onTabChange(false) }> Movies </div>
<div className='tab' onClick={ ()=>this.onTabChange (true)}  > Fav</div>
</div>

<div className='list'>

 
  {displayMovie.map((movie,index)=>(

   <MovieCard  f={movie}  key={`movie=${index}`}   dispatch={this.props.store.dispatch}  
   
   isFav={this.isMovieFav(movie)}
   /> 
     

  ))}


     
  
   
</div>


   </div>

    </div>

   ); 
    }}
   
    </myContext.Consumer>
    
  );
  
}
}

export default App;
