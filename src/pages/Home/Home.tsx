import { useEffect, useState } from "react";

import Appbar from "../../components/Appbar/Appbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CountryList from "../../components/CountryList/CountryList";

import { fetchAllCountries } from "../../redux/actions";

import "./home.scss";
import { useDispatch } from "react-redux";

const Home = () => {
  const [drawerState, setDrawerState] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries() as any);
  }, [dispatch]);

  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };
  return (
    <div className="home">
      <Appbar onClick={handleDrawerState} drawerState={drawerState} />
      <Sidebar onClick={handleDrawerState} drawerState={drawerState} />

      <CountryList />
    </div>
  );
};

export default Home;
