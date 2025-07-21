import {FaSearch} from "react-icons/fa";

import styles from "./SearchBox.module.css";

// eslint-disable-next-line react/prop-types
const SearchBox = ({search, setSearch, searchHandler}) => {
    return (<div className={styles.search}>
        <input type="text" placeholder="Search title" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
        <button onClick={searchHandler}><FaSearch/></button>
    </div>);
};

export default SearchBox;
