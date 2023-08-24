import Cards from './components/Cards.jsx';
import Nav from './components/nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-juanmaromero2`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const characterFilter = characters.filter(character => character.id !== Number(id));
      setCharacters(characterFilter);
   }
   
   return (
      <div className='App'>
         <Nav onSearch = {onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
