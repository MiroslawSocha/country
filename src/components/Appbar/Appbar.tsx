import './appbar.scss';

import Search from '../Search/Search';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Appbar = () => {
  return (
    <div className="appbar">
        <div className="appbar__content container">
            <div className="appbar__content-left">
                <img src="./images/country-api-logo-black.svg" alt="country api text" />
            </div>
            <div className="appbar__content-search">
                <Search/>
            </div>
            <div className="appbar__content-right">
              <div className="appbar__content-cart">
                <ShoppingCartIcon/>
                <div className="appbar__content-cart-counter">
                  10
                </div>
              </div>       
              <MenuIcon/>
            </div>
        </div>
      {/* <h2>Appbar</h2> */}
    </div>
  )
}

export default Appbar
