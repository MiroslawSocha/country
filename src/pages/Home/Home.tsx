import { useEffect, useState } from "react";

import Appbar from "../../components/Appbar/Appbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CountryList from "../../components/CountryList/CountryList";

import { fetchAllCountries } from "../../redux/actions";

import "./home.scss";
import { useDispatch } from "react-redux";

const Home = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries() as any);
  }, [dispatch]);

  const handleSearchKeyword = (value: string) => {
    setSearchKeyword(value);
  };

  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };
  return (
    <div className="home">
      <Appbar
        onClick={handleDrawerState}
        drawerState={drawerState}
        handleSearchKeyword={handleSearchKeyword}
      />
      <Sidebar onClick={handleDrawerState} drawerState={drawerState} />

      <CountryList searchKeyword={searchKeyword} />
    </div>
  );
};

export default Home;
