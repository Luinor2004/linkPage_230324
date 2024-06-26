import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar