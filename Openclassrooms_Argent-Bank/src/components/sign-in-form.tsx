import { NavLink } from "react-router-dom";
import { connect } from "../features/connexionSlice";
import { useDispatch } from "react-redux";
import { Login } from "../app/types";
import { store } from "../app/store";
import { getUser } from "../features/userSlice";

export type AppDispatch = typeof store.dispatch;

export default function SignInForm() {
  const dispatch = useDispatch<AppDispatch>();

  function submit(formData: any) {
    const login: Login = {
      email: formData.get("email"),
      password: formData.get("password")
    };
    dispatch(connect(login)).then((action) => {
      dispatch(getUser(action.payload));
    });
  }

  return (
    <div>
      <form action={submit}>
        <div className="flex flex-col text-left mb-[1rem]">
          <label className="font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="p-[5px] text-[1.2rem]"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col text-left mb-[1rem]">
          <label className="font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="p-[5px] text-[1.2rem]"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="flex">
          <input type="checkbox" id="remember-me" />
          <label className="ml-[0.25rem]" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <NavLink to="/user">Sign In</NavLink>
        <button
          className="block w-full p-[8px] text-[1.1rem] text-bold mt-[1rem] border-[#00bc77] bg-[#00bc77] text-[#fff]"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
