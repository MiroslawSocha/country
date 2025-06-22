import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./countrycard.scss";

type CountryCardProps = {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  region: string;
  onClick: Function;
  disabled: boolean;
};

const CountryCard = ({
  flags,
  name,
  region,
  onClick,
  disabled,
}: CountryCardProps) => {
  return (
    <div className="country-card">
      <div className="country-card__wrapper">
        <Link to={`/country/${name.common}`}>
          <img src={flags.png} alt={name.common} />
          <h2 className="country-card__name">{name.common}</h2>
          <h2 className="country-card__region">{region}</h2>
        </Link>
        <div className="country-card__action">
          <Button
            disabled={disabled}
            className=" btn btn__primary"
            onClick={() => onClick()}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
