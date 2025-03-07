import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function Header() {
  const user = useSelector(selectUser);

  return (
    <div className="flex justify-between items-center py-[5px] px-[20px]">
      <div className="flex items-center">
        <NavLink to="/">
          <img
            className="max-w-full w-[200px]"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
      </div>
      <div className="flex flex-row no-underline mr-[0.5rem] hover:underline font-bold text-[#2c3e50]">
        {user?.userName} TOTO
        <NavLink to="/signin">
          <i className="fa fa-user-circle"></i> Sign In
        </NavLink>
      </div>
    </div>
  );
}
