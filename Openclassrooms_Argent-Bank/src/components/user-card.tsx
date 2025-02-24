interface Props {
  title: string;
  value: string;
  balance: string;
}

export default function UserCard({ title, value, balance }: Props) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p> {value}</p>
        <p>{balance}</p>
        <button>View transactions</button>
      </div>
    </div>
  );
}
