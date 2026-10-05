import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../SearchProvider";

const Navbar=()=>{
    const {search,setSearch}=useContext(SearchContext)
    return(
        <div>
           <ul className="flex justify-around bg-red-500 capitalize text-white text-xl p-3" >
          <Link to="/">  <li>Home</li></Link>
            <Link to="/about"> <li>About</li></Link>
            <Link to="/category"> <li>category</li></Link>
            <Link to="/contact"> <li>Contact</li></Link>
            <Link to="/product"> <li>Product</li></Link>
            <input type="search" className="border" value={search} onChange={(e)=>{
                setSearch(e.target.value)
            }} />
            <Link to="/login"> <li>Login</li></Link>
            <Link to="/cart"> <li>Cart</li></Link>
           </ul>
        </div>
    )
}
export default Navbar;