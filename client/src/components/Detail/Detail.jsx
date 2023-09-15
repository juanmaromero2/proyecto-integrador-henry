import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./detail.module.css";

function Detail() {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    
    return ( 
        <div className={styles.detail}>
            <div className={styles.text}>
            <h2>Nombre: {character?.name}</h2>
            <h2>Estado: {character?.status}</h2>
            <h2>Especie: {character?.species}</h2>
            <h2>Genero: {character?.gender}</h2>
            <h2>Origen: {character?.origin?.name}</h2>
            </div>
            <div className={styles.img}>
            <img src={character?.image} alt="" />
            </div>
        </div>
    );
}

export default Detail;