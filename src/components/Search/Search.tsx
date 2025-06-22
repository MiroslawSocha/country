import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch } from "react-redux";

import { setSearchKeyword } from "../../redux/actions";

import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const handleInputChange = (e: any) => {
    dispatch(setSearchKeyword(e.target.value));
  };

  return (
    <div className="search-box">
      <div className="search-box__wrapper">
        <Input
          onChange={handleInputChange}
          id="standard-basic"
          placeholder="Search"
          disableUnderline
        />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
