import cart from "./../assets/cart.png";
import {Link} from "react-router-dom";
import { Menu } from "antd"; 
import {HomeFilled } from "@ant-design/icons"; 
import {ShoppingCartOutlined} from "@ant-design/icons";
import {ShoppingFilled} from "@ant-design/icons"; 

function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
          <Link to="/"><HomeFilled/></Link>
          <Link to="/products">Products Page</Link>
          {/* <Link to="/review">Add Product Review</Link> */}
          <Link to="/reviews">Reviews</Link>
          {/* <Link to="/cart"><ShoppingFilled/></Link> */}
          {/*<Link to="/cart"> <img 
          src={cart} 
          alt="Cart-icon"
          className="Cart-icon"/>
    </Link>*/}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  