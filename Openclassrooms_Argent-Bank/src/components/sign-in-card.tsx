import SignInForm from "./sign-in-form";
import SignInHeader from "./sign-in-header";

export default function SignInCard() {
  return (
    <div className="box-border bg-white w-[300px] my-[0] mx-auto mt-[3rem] p-[2rem]">
      <SignInHeader />
      <SignInForm />
    </div>
  );
}
