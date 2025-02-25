import { NavLink } from "react-router-dom";

export default function SignInForm() {
  function submit(formData: any) {
    //TODO
  }
  return (
    <form action={submit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
      <NavLink to="/user">Sign In</NavLink>
      <button type="submit">Sign In</button>
    </form>
  );
}
