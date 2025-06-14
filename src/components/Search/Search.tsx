import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import "./search.scss";

const Search = () => {
  return (
    <div className="search-box">
      <div className="search-box__wrapper">
        <Input id="standard-basic" placeholder="Search" disableUnderline />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
