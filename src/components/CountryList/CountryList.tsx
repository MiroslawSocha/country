import { useEffect, useState } from "react";
import {
  MenuItem,
  Select,
  FormControl,
  Typography,
  Box,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import CountryCard from "../CountryCard/CountryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries, addCountryToCart } from "../../redux/actions";
import { AppState, CountryState } from "../../types";
import "./countrylist.scss";

const CountryList = () => {
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  );
  const isLoading = useSelector(
    (state: AppState) => state.countryReducer.isLoading
  );
  const cart = useSelector((state: AppState) => state.cartReducer.cart);

  const dispatch = useDispatch();

  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(filteredCountries.length / rowsPerPage);

  const sortCountries = (countriesToSort: any[], criterion: string) => {
    const sorted = [...countriesToSort].sort((a: any, b: any) => {
      if (criterion === "name") {
        return a.name.common.localeCompare(b.name.common);
      } else if (criterion === "region") {
        const regionCompare = a.region.localeCompare(b.region);
        if (regionCompare !== 0) return regionCompare;
        return a.name.common.localeCompare(b.name.common);
      } else if (criterion === "population") {
        return a.population - b.population;
      }
      return 0;
    });
    setFilteredCountries(sorted);
  };

  const handleSort = (e: any) => {
    const value = e.target.value;
    setSortBy(value);
    sortCountries(filteredCountries, value);
  };

  const handlePrevPage = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent<number>) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchAllCountries() as any);
  }, [dispatch]);

  useEffect(() => {
    sortCountries(countries, sortBy);
  }, [countries, sortBy]);

  const searchKeyword = useSelector(
    (state: AppState) => state.uiReducer.searchKeyword
  );
  useEffect(() => {
    const filtered = countries.filter((country: CountryState) =>
      country.name.common.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    sortCountries(filtered, sortBy);
    setPage(0);
  }, [searchKeyword, countries, sortBy]);

  const paginatedCountries = filteredCountries.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const startIndex = page * rowsPerPage + 1;
  const endIndex = Math.min((page + 1) * rowsPerPage, filteredCountries.length);

  return (
    <div className="country-list">
      <div className="country-list__sort">
        <p>Sort by</p>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            id="sort-country-select"
            onChange={handleSort}
            disableUnderline={true}
            value={sortBy}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="region">Region</MenuItem>
            <MenuItem value="population">Population</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="country-list__cards">
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && filteredCountries.length === 0 && (
          <Typography variant="h6" sx={{ mt: 4 }}>
            No results for the given search.
          </Typography>
        )}
        {!isLoading &&
          paginatedCountries.map((country) => (
            <CountryCard
              key={country.name.common}
              {...country}
              onClick={() => dispatch(addCountryToCart(country))}
              disabled={cart.includes(country)}
            />
          ))}
      </div>

      {!isLoading && filteredCountries.length > 0 && (
        <Box className="country-list__pagination">
          <Typography variant="body2">
            Results {startIndex}–{endIndex} of {filteredCountries.length}
          </Typography>

          <Box className="country-list__pagination-controls">
            <Button
              className="btn btn__primary"
              variant="outlined"
              onClick={handlePrevPage}
              disabled={page === 0}
            >
              Previous
            </Button>
            <Typography>
              Page {page + 1} of {totalPages}
            </Typography>
            <Button
              className="btn btn__primary"
              variant="outlined"
              onClick={handleNextPage}
              disabled={page >= totalPages - 1}
            >
              Next
            </Button>
          </Box>

          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <Select<number>
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              disableUnderline
            >
              {[5, 10, 25, 50].map((value) => (
                <MenuItem key={value} value={value}>
                  {value} per page
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
    </div>
  );
};

export default CountryList;
