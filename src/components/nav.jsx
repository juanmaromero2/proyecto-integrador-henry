import SearchBar from "./SearchBar.jsx";

function Nav({onSearch}) {
    return ( 
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}

export default Nav;