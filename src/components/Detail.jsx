import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-juanmaromero2`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    
    return ( 
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt="" />
        </div>
    );
}

export default Detail;