import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import "./search.scss";

type SearchProps = {
  handleSearchKeyword: Function;
};

const Search = ({ handleSearchKeyword }: SearchProps) => {
  const handleInputChange = (e: any) => {
    handleSearchKeyword((e.target as HTMLInputElement).value);
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
