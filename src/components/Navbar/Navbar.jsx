import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Kids</Link>
          </div>
        </div>

        <div className="center">
          <Link className="logo" to="/">LeLay Store</Link>
        </div>

        <div className="right">
          <div className="items">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="items">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="items">
            <Link className="link" to="/">Contact</Link>
          </div>
         
          <div className="icons">
          <div className="items">
            <Link className="link" to="/signup">SignUp</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
