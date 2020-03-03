import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartContext from "../../contexts/cart/cart.context";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CurrentUserContext from "../../contexts/current-user/current-user.context";
import "./header.styles.scss";

const Header = () => {
  const currentUser = useContext(CurrentUserContext); // to consume the context, use the useContext function
  const [hidden, setHidden] = useState(true); // set local state and function
  const toggleHidden = () => setHidden(!hidden); // define local method

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        {/* set the value to provider to provide the object :Context is like a vehicle to transfer some objects */}
        <CartContext.Provider value={{ hidden, toggleHidden }}>
          <CartIcon />
        </CartContext.Provider>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
