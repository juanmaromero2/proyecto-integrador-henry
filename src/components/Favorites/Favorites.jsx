import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions"; 
import { useState } from "react";

const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites)
    
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return ( 
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="allCharacters"></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        {
            favorites.map(({id, name, species, gender, image})=> {
                return (
                    <Card
                    key={id}
                    id={id}
                    name={name}
                    species={species}
                    gender={gender}
                    image={image}
                    />
                )
            
            })
        }
        </div>
    )
}

export default Favorites;

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps, null)(Favorites);

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Card from "./Card"; // Asegúrate de importar el componente Card
// import { removeFav } from "../redux/actions"; // Asegúrate de importar la acción removeFav
// function Favorites() {
//   const favorites = useSelector((state) => state.myFavorites);
//   const dispatch = useDispatch();
//   const removeFromFavorites = (id) => {
//     dispatch(removeFav(id));
//   };
//   return (
//         <div>
//         {
//             favorites.map(({id, name, species, gender, image})=> {
//                 return (
//                     <Card
//                     key={id}
//                     id={id}
//                     name={name}
//                     species={species}
//                     gender={gender}
//                     image={image}
//                     />
//                 )
//             })
//         }
//         </div>
//   );
// }
// export default Favorites;