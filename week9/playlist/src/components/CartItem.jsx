import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../constants/icons.jsx";
import { increase, decrease, removeItem }from "../features/cart/cartSlice"
import { FaCaretUp,  FaCaretDown} from "react-icons/fa";
const CartItem = ({id, title, singer, price, img, amount}) => {
  const dispatch = useDispatch();

  return (
    <article style={{display:'flex', flexDirection: 'row', margin: '20px'}}>
      <img style={{width: '100px', height: '100px'}}src={img} alt={`${title} 이미지`} />
      <div style={{width: '400px'}}>
        <h4 style={{textAlign: 'left', marginLeft: '10px'}}>
          {title} | {singer}
        </h4>
        <h4 style={{textAlign: 'left', marginLeft: '10px'}}>price: {price}</h4>
      </div>
      <div>
        <button style={{background: 'none'}} onClick={()=>dispatch(increase(id))}>
        <FaCaretUp />
        </button>

        <p>{amount}</p>
        <button 
          className="amount-btn"
          style={{background: 'none'}} 
          onClick={()=> {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
        <FaCaretDown/>
        </button>
      </div>
    </article>
  )
};
export default CartItem;