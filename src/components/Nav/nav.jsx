import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

function Nav({onSearch}) {
    return ( 
        <div>
            <button>
                <Link to = "/about">About</Link>
            </button>
            <button>
                <Link to = "/home">Home</Link>
            </button>
            <button>
                <Link to = "/favorites">Favorites</Link>
            </button>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}

export default Nav;