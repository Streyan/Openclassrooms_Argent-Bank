import UserCard from "../components/user-card";
import UserTitle from "../components/user-title";

export default function User() {
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
