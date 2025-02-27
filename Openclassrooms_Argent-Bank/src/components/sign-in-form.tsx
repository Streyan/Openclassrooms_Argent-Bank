import { NavLink } from "react-router-dom";
import { connect } from "../features/connexionSlice";
import { useDispatch } from "react-redux";

export default function SignInForm() {
  const dispatch = useDispatch();

  function submit(formData: any) {
    dispatch(connect("hello"));
  }

  return (
    <div>
      <form action={submit}>
        <div className="flex flex-col text-left mb-[1rem]">
          <label className="font-bold" htmlFor="username">
            Username
          </label>
          <input className="p-[5px] text-[1.2rem]" type="text" id="username" />
        </div>
        <div className="flex flex-col text-left mb-[1rem]">
          <label className="font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="p-[5px] text-[1.2rem]"
            type="password"
            id="password"
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
