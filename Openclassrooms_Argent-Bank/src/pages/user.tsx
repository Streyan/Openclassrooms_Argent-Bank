import UserCard from "../components/user-card";
import UserTitle from "../components/user-title";

export default function User() {
  return (
    <div>
      <UserTitle />
      <UserCard
        title="Argent Bank Checking (x8349)"
        value="$2,082.79"
        balance="Available Balance"
      />
    </div>
  );
}
