import { ADD_MOVIES } from "../actions"
import { act } from "react-dom/test-utils";
import { useDebugValue } from "react";


const initialMoviesState={
    list:[],
    favourites:[],
    showFav:false,

}
 




export  function movies(state=initialMoviesState,action){


    console.log('into movie reducer, action.type()', action.type);

    

   /* if(action.type==='ADD_MOVIES'){
       return{
       
        ...state,
        list:action.movies,
        

       }
    }
    return state;*/

    switch(action.type){
        case ADD_MOVIES:
        //you can also use Object.assign() 
        //return Object.assign(state, {list:action.movies}); 

        console.log( "action.movie",action.type)
        return{
                ...state,
                list:action.movies
            }
           
            case 'ADD_FAV':
                console.log('add fav ');
      return{
            
        ...state,
       favourites:[action.movie, ...state.favourites]
        
          
          }

          case 'REMOVE_FAV':
             console.log('remove fav reducer');
             //console.log( movie.title!=action.movie.title);
             const arrayFilter=state.favourites.filter(function(item){
                 
                console.log(item);
                return  item.Title!==action.movie.Title;

             });


             console.log(arrayFilter);
             return{

                ...state,
                favourites:arrayFilter,
 
             }
      
              case 'FAVVIEW':
                  console.log('into  tab click');
                 return{

                    ...state,
                    showFav:action.val,



                 }



            default:
                return state;

    }


 

}
 

//make the search initial state
const initialsearch ={
    
    result:{}
    
}


//make search reducer
function search(state=initialsearch ,action)
{
    
   return state;
}


//initial rootreducer
const initialrootreducer={

    movies:initialMoviesState,
    search:initialsearch

}


export default  function rootReducer(state=initialrootreducer, action)
{
    console.log("action.movie->>>>",action);
    return {
        
        movie:movies(state.movie, action),
        search:search(state.search, action)

    }
}

  