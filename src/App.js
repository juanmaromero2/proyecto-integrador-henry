import Cards from './components/Cards.jsx';
import Nav from './components/nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import About from './components/About.jsx';
// import Detail from './components/Detail.jsx';
import './App.css';


function App() {
   const [characters, setCharacters] = useState([]);
   console.log(characters);

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
         <Nav onSearch = {onSearch}/>
         <Routes>
            <Route path='/home' element = {<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/detail/:id' element = {<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
