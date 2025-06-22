import { useEffect } from "react";

import CountryList from "../../components/CountryList/CountryList";

import { fetchAllCountries } from "../../redux/actions";

import "./home.scss";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries() as any);
  }, [dispatch]);

  return (
    <div className="home">
      <CountryList />
    </div>
  );
};

export default Home;
