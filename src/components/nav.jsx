import SearchBar from "./SearchBar.jsx";
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
            <SearchBar onSearch={onSearch} />
        </div>
    );
}

export default Nav;