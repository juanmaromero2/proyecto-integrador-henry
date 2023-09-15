import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect} from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import styles from "./card.module.css";


function Card({id, name, species, gender, image, status, origin, onClose, addFav, removeFav, myFavorites}) {

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
}, [myFavorites,id]);

return (
   <div className={styles.cardContainer}>
      <div className={styles.btnContainer}>
      <button className={styles.btnFav} onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      <button className={styles.btnClose} onClick={() => {onClose(id)}}>X</button>
      </div>
      {/* <h2>Nombre: {name}</h2>
      <h2>Especie: {species}</h2>
      <h2>Genero: {gender}</h2>
      <h2>Estado: {status}</h2>
      <h2>Origen: {origin?.name}</h2> */}
      <div className={styles.imgContainer}>
         <h1>{name}</h1>
      <Link to = {`/detail/${id}`}>
      <img className={styles.img} src={image} alt={name} />
      </Link>
      </div>
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

