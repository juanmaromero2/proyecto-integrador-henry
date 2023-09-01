import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";


function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

const handleFavorite = () => {
   if(isFav){
      setIsFav(false)
      removeFav(id)
   }else{
      setIsFav(true)
      addFav({id, name, species, gender, image}) //onClose, addFav, removeFav, myFavorites
   }
};

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

return (
   <div>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      <button onClick={() => {onClose(id)}}>X</button>
      <Link to = {`/detail/${id}`}>
         <h2>Nombre: {name}</h2>
      </Link>
      <h2>Especie: {species}</h2>
      <h2>Genero: {gender}</h2>
      <img src={image} alt={name} />
   </div>
);
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

