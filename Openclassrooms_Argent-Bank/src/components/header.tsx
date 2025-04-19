import { NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
import { useSelector } from "react-redux";
import { selectUser, disconnectUser } from "../features/userSlice";
import { clearToken } from "../features/connexionSlice";
import { useDispatch } from "react-redux";
import { store } from "../app/store";

export type AppDispatch = typeof store.dispatch;

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const handleDisconnect = () => {
    dispatch(clearToken());
    dispatch(disconnectUser());
  };

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
      <div className="flex flex-row no-underline mr-[0.5rem] ">
        {user ? (
          <div className="flex flex-row no-underline mr-[0.5rem]">
            <div className="mr-[0.5rem] hover:underline font-bold text-[#2c3e50]">
              <NavLink to="/user">
                <i className="fa fa-user-circle"></i> {user.userName}
              </NavLink>
            </div>
            <div className="mr-[0.5rem] hover:underline font-bold text-[#2c3e50]">
              <div onClick={handleDisconnect} className="mr-[0.5rem]">
                <i className="fa fa-sign-out"></i> Disconnect
              </div>
            </div>
          </div>
        ) : (
          <div className="mr-[0.5rem]">
            <NavLink to="/signin">
              <i className="fa fa-user-circle"></i> Sign In
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
