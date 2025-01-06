import { MdHome } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { VscIssueReopened } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";

import { RiAccountCircleLine } from "react-icons/ri";
import './icons.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Ico(){
  const cart = useSelector((store)=>store.cart);
  console.log("top Bar",cart);
  let cartItems=0;
  if(cart.items){
    cartItems=cart.items.length;
    console.log(cartItems)
  }
  
  return(
    <div className="mobile-grid">
    
        <div className="icon-container"> 
          <MdHome />
          <span className="icon-title">Home</span>
        </div>
        <div className="icon-container"> 
          <BiCategoryAlt />
          <span className="icon-title">Catergoies</span>
        </div >
        <div className="icon-container"> 
          <VscIssueReopened />
          <span className="icon-title">Reorder</span>
        </div>
        <div className="icon-container icontop"> 
          <BsCart3 />
          <Link  to="/checkOutApp">
        <button style={{display:'flex',padding:'0px',backgroundColor:'wheat'}}><span className="icon-title">Cart</span> 
        <span
        style={{
          position:"absolute",
          top:'-9px',
          left:'10px',
          backgroundColor:"white",
          padding:'0px',
          height:'20px',
          width:'20px',
          borderRadius:'50%'

        }}
        >{cartItems}</span>
        </button>
        </Link>

          {/* <span className="icon-title">Cart</span> */}
        </div>
        <div className="icon-container"> 
          <RiAccountCircleLine />
          <span className="icon-title">Account</span>
        </div>
      

    </div>

  )
}
export default Ico;