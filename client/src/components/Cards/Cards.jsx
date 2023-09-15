import Card from '../Card/Card';
import styles from "./cards.module.css";

export default function Cards({characters, onClose}) {

   return (
   <div className={styles.cardList}>
      {characters.map((character) => (
         <Card
         key={character.id}
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         onClose={onClose}
         />
      ) )}
   </div>
   );
}


//https://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub