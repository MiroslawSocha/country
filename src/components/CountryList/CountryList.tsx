import CountryCard from "../CountryCard/CountryCard";

import "./countrylist.scss";
const CountryList = () => {
  return (
    <div className="country-list">
      <div className="country-list__sort"></div>
      <div className="country-list__cards">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
      <div className="country-list__pagination"></div>
    </div>
  );
};

export default CountryList;
