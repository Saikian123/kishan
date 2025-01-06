
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Services/cartSlice";
import { useEffect, useState } from "react";
import './Vegetables.css'
import axios  from "axios"

const VegetableCards = () => {

  const [vegetables,setVegetables]= useState([]);
  useEffect(()=>{
    
    axios.get("http://localhost:3000/vegetables1")
    .then((response)=>{
      setVegetables(response.data)
    })
    .catch((error)=>{
      console.log("error fetching vegtables data ",error);
    })
  },[])


  const dispatch=useDispatch();

  const cart = useSelector((store)=>store.cart);
  console.log(cart);

  let cartItems=0;
  if(cart.items){
    cartItems=cart.items;
    console.log(cartItems)
  }
  const addingToCart =(item)=>{
    dispatch(addToCart(item));
  }

  const removingFromCart=(item)=>{
    dispatch(removeFromCart(item));
  }

  

  return (
    <div className="vegetable-container">
      <div className="vegetable-row">
        {vegetables.map((veg, index) => (
          <div
            key={index}
            className="vegetable-card"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("hovered");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("hovered");
            }}
          >
            {/* Discount Percentage */}
            <div className="vegetable-discount">{veg.discount} OFF</div>

            {/* Image */}
            <img src={veg.image} alt={veg.name} className="vegetable-image" />

            {/* Vegetable Name */}
            <h4 className="vegetable-name">{veg.name}</h4>

            {/* Price and Weight */}
            <p className="vegetable-details">
              <strong>Price:</strong> ₹
              {veg.price} <br />
              <strong>Weight:</strong> {veg.weight}
            </p>

            {/* Quantity Counter */}
{/* <div>
<BsPlusLg />
</div> */}

            <div className="vegetable-counter">
              <button className="counter-button" onClick={() => removingFromCart(veg)}>
                -
              </button>
              <span className="counter-quantity">
                 {cartItems.find(item =>item.id === veg.id)?.quantity||0 }
              </span>
              <button className="counter-button increment" onClick={() => addingToCart(veg)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetableCards;
