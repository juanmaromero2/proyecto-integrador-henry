import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
      event.target.value = "";
   }
   return (
      <div>
         <input className={styles.input} type ='search' onChange = {handleChange} value = {id} />
         <button className={styles.btn} onClick={() => {onSearch(id); setId("")}}>Agregar</button>
      </div>
   );
}  

