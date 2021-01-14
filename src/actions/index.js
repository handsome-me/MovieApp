export const ADD_MOVIES='ADD_MOVIES';
export const REMOVE_FAV="REMOVE_FAV";


export function addMovies(movies){
    
    console.log('into ACTION, addmovie  ');
   
    return {
        type:ADD_MOVIES,
        movies

    }
}

export function addFav(movie)
{

    return{
        type:'ADD_FAV',
        movie
         
        
    }

}

export function removeFav(movie)
{
    return{
        type:REMOVE_FAV,
        movie
        

    }

}


export function setShowfav(val)
{
    return{
        type:'FAVVIEW',
        val
        

    }

}


export function searchMove(inputChange)
{


    return (dispatch)=>{
    
        fetch('https://api.themoviedb.org/3/search/movie?api_key=61a165cb4b595b07d284dbedb9ee6473&query='+inputChange)
        .then(result=>result.json()).then(data=>{


            console.log("Got the API response........",data);
           
           data= data.results;

            dispatch(addMovies(data));

        })



    }


}
 