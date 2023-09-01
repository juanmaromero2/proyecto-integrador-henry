import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import Form from './components/Form/Form.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';

const email = "romerojuanma02@gmail.com";
const password = "1234567";

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate("/")
   }, [access]);

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
         {
            location.pathname !== "/"? <Nav onSearch = {onSearch}/> : null
         }
         <Routes>
            <Route path='/' element = {<Form login={login}/>}/>
            <Route path='/home' element = {<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/detail/:id' element = {<Detail/>}/>
            <Route path='/favorites' element = {<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;




// `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-juanmaromero2`
