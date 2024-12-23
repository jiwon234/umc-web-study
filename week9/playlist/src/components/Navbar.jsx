import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>REAL DATA UMC PlayList</h3>
        <div className="nav-container">
          <FaShoppingCart size={30}/>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;