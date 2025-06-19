import { Menu } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";

import { removeCountryFromCart } from "../../redux/actions";

import "./cartmenu.scss";

type CartMenuProps = {
  cart: {}[];
  onClick: Function;
  menuOpen: boolean;
  anchorEl: HTMLElement | null;
};

const CartMenu = ({ cart, onClick, menuOpen, anchorEl }: CartMenuProps) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    onClick(null);
  };

  return (
    <div className="cart-menu">
      <Menu
        className="cart-menu__menu"
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
      >
        <h2>Cart items</h2>
        <div className="cart-menu__menu-items">
          {cart.length === 0 && (
            <div className="cart-menu__empty">
              <h2>Your cart is empty</h2>
            </div>
          )}
          {cart &&
            cart.map((country: any) => (
              <div key={country.name.common} className="cart-menu__menu-item">
                <img src={country.flags.png} alt={country.name.common} />
                <h2>{country.name.common}</h2>
                <DeleteIcon
                  className="cart-menu__delete-icon"
                  onClick={() => dispatch(removeCountryFromCart(country))}
                />
              </div>
            ))}
        </div>
      </Menu>
    </div>
  );
};

export default CartMenu;
