import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";

export default function Header() {
  return (
    <div>
      <NavLink to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </NavLink>
      <nav>
        <i className="fa fa-user-circle"></i>
        <NavLink to="/signin">Sign In</NavLink>
      </nav>
    </div>
  );
}
