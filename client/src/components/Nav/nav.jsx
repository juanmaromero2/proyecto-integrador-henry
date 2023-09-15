import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

function Nav({onSearch}) {
    return ( 
        <div className={styles.navBar}>
            <button className={styles.btn}>
                <Link className={styles.text} to = "/about">About</Link>
            </button>
            <button className={styles.btn}>
                <Link className={styles.text} to = "/home">Home</Link>
            </button>
            <button className={styles.btn}>
                <Link className={styles.text} to = "/favorites">Favorites</Link>
            </button>
            <SearchBar className={styles.searchBar} onSearch={onSearch} />
        </div>
    );
}

export default Nav;