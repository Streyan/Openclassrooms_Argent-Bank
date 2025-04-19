import { useSelector } from "react-redux";
import UserCard from "../components/user-card";
import UserTitle from "../components/user-title";
import { selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function User() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user == null) {
      navigate("/signin");
    }
  });

  return (
    <div className="bg-[#12002b] h-auto w-full">
      <UserTitle />
      <h2 className="sr-only">Accounts</h2>
      <UserCard
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <UserCard
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <UserCard
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
    </div>
  );
}
