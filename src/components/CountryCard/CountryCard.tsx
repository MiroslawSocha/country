import { Button } from "@mui/material";

import "./countrycard.scss";
const CountryCard = () => {
  return (
    <div className="country-card">
      <div className="country-card__wrapper">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/2560px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png"
          alt="country name"
        />

        <h2 className="country-card__name">Afghanistan</h2>
        <h2 className="country-card__region">Asia</h2>
        <div className="country-card__action">
          <Button className=" btn btn__primary">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
