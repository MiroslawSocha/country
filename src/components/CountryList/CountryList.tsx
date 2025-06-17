import { useEffect } from "react";

import CountryCard from "../CountryCard/CountryCard";

import { useDispatch, useSelector } from "react-redux";

import { fetchAllCountries, addCountryToCart } from "../../redux/actions";

import { AppState } from "../../types";

import "./countrylist.scss";
const CountryList = () => {
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  );
  const isLoading = useSelector(
    (state: AppState) => state.countryReducer.isLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries() as any);
  }, [dispatch]);

  return (
    <div className="country-list">
      <div className="country-list__sort"></div>
      <div className="country-list__cards">
        {isLoading && <h2>Loading...</h2>}
        {!isLoading &&
          countries &&
          countries.map((country: any) => (
            <CountryCard
              key={country.name}
              {...country}
              onClick={() => dispatch(addCountryToCart(country))}
            />
          ))}
      </div>
      <div className="country-list__pagination"></div>
    </div>
  );
};

export default CountryList;
