import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";

import { addCountryToCart, fetchAllCountries } from "../../redux/actions";
import { AppState } from "../../types";

import "./country.scss";

const Country = () => {
  const { name } = useParams() as any;
  const navigate = useNavigate();

  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  );
  const cart = useSelector((state: AppState) => state.cartReducer.cart);

  const [currentCountry, setCurrentCountry] = useState(
    countries.filter((country) => country.name.common === name)[0]
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (currentCountry) {
      dispatch(addCountryToCart(currentCountry.name.common));
    }
  };

  const isInCart = cart.includes(currentCountry?.name.common);

  useEffect(() => {
    dispatch(fetchAllCountries() as any);
  }, [dispatch]);

  useEffect(() => {
    setCurrentCountry(
      countries.filter((country) => country.name.common === name)[0]
    );
  }, [countries, name]);

  return (
    <div className="country-page">
      <div className="country-page__go-back">
        <Button
          className="btn__text"
          size="small"
          variant="text"
          onClick={() => navigate("/")}
        >
          <ArrowBackIosIcon /> Go back
        </Button>
      </div>
      {currentCountry && currentCountry.name.common && (
        <div className="country-page__details">
          <div className="country-page__details-left">
            <img
              src={currentCountry.flags.png}
              alt={currentCountry.name.common}
            />
            <h2 className="country-card__name">{currentCountry.name.common}</h2>
          </div>
          <div className="country-page__details-right">
            <div className="country-page__details-right-list">
              <h2>Official name:</h2>{" "}
              <h2 className="right">{currentCountry.name.official}</h2>
            </div>
            <div className="country-page__details-right-list">
              <h2>Capital city: </h2>{" "}
              <h2 className="right">{currentCountry.capital}</h2>
            </div>
            <div className="country-page__details-right-list">
              <h2>Region:</h2>{" "}
              <h2 className="right">{currentCountry.region}</h2>
            </div>
            <div className="country-page__details-right-list">
              <h2>Subregion: </h2>{" "}
              <h2 className="right">{currentCountry.subregion}</h2>
            </div>
            <div className="country-page__details-right-list">
              <h2>Population:</h2>{" "}
              <h2 className="right">
                {currentCountry.population.toLocaleString("en")}
              </h2>
            </div>
            <div className="country-page__details-right-list">
              <h2>Currencies:</h2>{" "}
              <h2 className="right">
                {currentCountry.currencies &&
                  (() => {
                    const entries = Object.entries(currentCountry.currencies);
                    return (
                      <>
                        {entries.length > 0 && (
                          <>
                            {
                              (
                                entries[0][1] as unknown as {
                                  name: string;
                                  symbol: string;
                                }
                              ).name
                            }{" "}
                            (
                            {
                              (
                                entries[0][1] as unknown as {
                                  name: string;
                                  symbol: string;
                                }
                              ).symbol
                            }
                            )
                          </>
                        )}
                        {entries.slice(1).map(([_, currency], index) => {
                          const c = currency as unknown as {
                            name: string;
                            symbol: string;
                          };
                          return (
                            <div key={index}>
                              {c.name} ({c.symbol})
                            </div>
                          );
                        })}
                      </>
                    );
                  })()}
              </h2>
            </div>
            <div className="country-page__details-right-list">
              <h2>Languages:</h2>
              <h2 className="right">
                {currentCountry.languages &&
                  (() => {
                    const values = Object.values(currentCountry.languages);
                    return (
                      <>
                        {values.length > 0 && values[0]}
                        {values.slice(1).map((name, index) => (
                          <div key={index}>{name}</div>
                        ))}
                      </>
                    );
                  })()}
              </h2>
            </div>
          </div>
        </div>
      )}
      <div className="country-page__actions">
        <Button
          className=" btn btn__primary"
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? "In cart" : "Add to cart"}
        </Button>
      </div>
    </div>
  );
};

export default Country;
