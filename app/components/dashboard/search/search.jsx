import { MdSearch } from "react-icons/md";
import styles from "./styles.module.scss";

const Search = ({placeholder}) => {
  return (
    <div className={styles.search_container}>
     <MdSearch />
     <input type="text" placeholder={placeholder}  className={styles.search_input} />
    </div>
  );
};

export default Search;