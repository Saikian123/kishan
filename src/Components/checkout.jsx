import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart,deleteFromCart } from "../Services/cartSlice";
// import { AiOutlinesminus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { Link } from "react-router-dom"
import './checkout.css'

const Checkout=()=>{
    const cart = useSelector((store)=>store.cart);
    const dispatch=useDispatch();
    const addingToCart=(item)=>{
        dispatch(addToCart(item));
    }

    const removingFromCart=(item)=>{
        dispatch(removeFromCart(item));
    }


    const deletingFromCart=(item)=>{
        dispatch(deleteFromCart(item));
    }


    let cartData=[]
   
    if(cart.items){
        cartData=cart.items;
        console.log("cartData",cartData)
    }

    return(
        <>
  
        {
            cartData.map((item,index)=>


                <div className="conatiner" key={index}>
                  
                    <div className="row">
                        <div className="col-sm-1 co1-1">
                            <img src={item.image} alt={item.name} style={{width:'100%'}}/>
                        </div>
                        <div className="col-sm-3 co1-2">
                            <div className="row table-head">{item.name}</div>
                            <div className="row table-head">Sold by </div>
                            <div className="row">Qty-{item.weight}</div>
                        </div>
                        <div className="col-sm-1 co1-1">
                            <div className="row table-head">Price</div>
                            <div className="row table-head">₹{item.price} </div>
                            <div className="row">you Save</div>
                        </div>

                        <div className="col-sm-1 co1-1">
                        <div className="row">Qty</div>
                        <div className="row">
                                <div className="col-sm-1 co1-1" onClick={()=> removingFromCart(item)}> <TiMinus />  </div>
                                <div className="col-sm-1 co1-1">{item.quantity}</div>
                                <div className="col-sm-1 co1-1" onClick={()=> addingToCart(item)}><FaPlus /></div>
                          
                        </div>
                        </div>

                        <div className="col-sm-1 co1-1">
                            <div className=" row table-head">Total</div>
                            <div className="row table-head"> ₹
                            {(item.quantity)*(item.price)}</div>
                        </div>
                        <div className="col">
                            <div className="row table-head">Action </div>
                            <div className="row" style={{color:'red',cursor:"pointer"}} onClick={()=>deletingFromCart(item)}>Remove</div>
                        </div>
                     
                    </div>
                </div>
            )
        }
        
        
        <Link className="navigateToHome" to="/home">
        <button className="NavigateButton">Navigate to Shopping </button>
        </Link>
       
        </>
    )
}
export default Checkout;