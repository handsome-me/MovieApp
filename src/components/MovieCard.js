import React from 'react';
 import {addFav, removeFav} from '../actions'
 import ConsoleHelper from '../ConsoleHelper';

 
class MovieCard extends React.Component{
    
    handleFavClick=()=>{
        
        ConsoleHelper('fav button clicked');
        ConsoleHelper(this.props.f);
        const {f} =this.props;
        this.props.dispatch(addFav(f));

       // console.log(this.props);
      
       
         

    }
    handleUnFavClick=()=>{
        
        console.log('Unfav button clicked');
          
         const {f} =this.props;

         ConsoleHelper(f);
         
         this.props.dispatch(removeFav (f));
          

    }
    
    
    render()
    {
    
        console.log("PROPSSSSS>..>>>>...>>>..>.......>>...",this.props);

        const {f, isFav} =this.props;


        return (
 
            <div className='movie-card'>
                <div className='left'>

<img alt="movie poster" src={"https://image.tmdb.org/t/p/w500//"+f.poster_path}/>
</div>
               <div className='right'>
             
        <div className='title'>{f.title}</div>
        <div className="release_date">Release Date- {f.release_date}</div>
        <div className='plot'>{f.overview}</div>
        <div className='footer'></div>

<div className='rating' style={{margin:6}}>Rating -  {f.vote_average}</div>
{
    isFav

? <button className='unfavourite-btn' onClick={this.handleUnFavClick}>
    UnFavourite
</button>

:
<button className='favourite-btn' onClick={this.handleFavClick}>
Favourite
</button>  
    }
               </div>


                </div>
            

        )
    }
}

export default MovieCard;
