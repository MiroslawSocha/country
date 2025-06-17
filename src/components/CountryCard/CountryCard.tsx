import { Button } from "@mui/material";

import "./countrycard.scss";

type CountryCardProps = {
  alpha2Code: string;
  name: string;
  region: string;
  onClick: Function;
};

const CountryCard = ({
  alpha2Code,
  name,
  region,
  onClick,
}: CountryCardProps) => {
  return (
    <div className="country-card">
      <div className="country-card__wrapper">
        <img
          src={`https://flagcdn.com/w320/${alpha2Code.toLowerCase()}.png`}
          alt={name}
        />
        <h2 className="country-card__name">{name}</h2>
        <h2 className="country-card__region">{region}</h2>
        <div className="country-card__action">
          <Button className=" btn btn__primary" onClick={() => onClick()}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
