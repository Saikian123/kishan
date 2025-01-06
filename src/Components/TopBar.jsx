import { FaShoppingCart, FaUser, FaHistory, FaSearch, FaMapMarkerAlt } from "react-icons/fa"; // Added icons
import './TopBar.css';
import kingKishan from '../assets/kingKisan.png'; // Correct import path
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { store } from "../Store";

const TopBar = () => {

  const cart = useSelector((store)=>store.cart);
  console.log("top Bar",cart);
  let cartItems=0;
  if(cart.items){
    cartItems=cart.items.length;
    console.log(cartItems)
  }
  return (
    <div className="top-bar">
      <div className="logo">
        <img src={kingKishan} alt="Logo" />
      </div>
      <div className="location">
        <FaMapMarkerAlt className="input-icon" /> {/* Added icon */}
        <input type="text" placeholder="Enter location" />
      </div>
      <div className="search-bar">
        <FaSearch className="input-icon" /> {/* Added icon */}
        <input type="text" placeholder="Search..." />
      </div>
      <div className="icons">
        <div style={{position:'relative'}}>

          <Link to="/checkOutApp">
          
          <FaShoppingCart className="icon" />
          </Link>

          <span  style={{
            position:'absolute',
            top:'-8px',
            right:'-8px',
            backgroundColor:'rgb(243,150,54)',
            borderRadius:'40%',
            padding:'5px',
            fontSize:'12px',
            color:'#fff',
            pointerEvents:MouseEvent

          }}>{cartItems}</span>
        </div>
        
        <FaUser className="icon" />
        <FaHistory className="icon" />
      </div>
    </div>
  );
};

export default TopBar;
