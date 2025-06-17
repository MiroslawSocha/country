import Search from "../Search/Search";
import CartMenu from "../CartMenu/CartMenu";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

import { useSelector } from "react-redux";

import { AppState } from "../../types";

import "./appbar.scss";
import { useState } from "react";

interface AppbarProps {
  onClick: Function;
  drawerState: boolean;
}

const Appbar = (props: AppbarProps) => {
  const { onClick, drawerState } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const cart = useSelector((state: AppState) => state.cartReducer.cart);

  const onDrawerClick = () => {
    onClick(!drawerState);
  };

  const handleCartMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="appbar">
      <div className="appbar__content container">
        <div className="appbar__content-left">
          <img
            src="./images/country-api-logo-black.svg"
            alt="country api text"
          />
        </div>
        <div className="appbar__content-search">
          <Search />
        </div>
        <div className="appbar__content-right">
          <div className="appbar__content-cart">
            <ShoppingCartIcon className="cursor-pointer" />
            <div
              className="appbar__content-cart-counter"
              onClick={handleCartMenuClick}
            >
              {cart && cart.length}
            </div>
            <CartMenu
              cart={cart}
              onClick={handleCartMenuClose}
              menuOpen={menuOpen}
              anchorEl={anchorEl}
            />
          </div>
          <MenuIcon className="cursor-pointer" onClick={onDrawerClick} />
        </div>
      </div>
      {/* <h2>Appbar</h2> */}
    </div>
  );
};

export default Appbar;
