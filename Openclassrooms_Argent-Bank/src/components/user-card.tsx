interface Props {
  title: string;
  amount: string;
  description: string;
}

export default function UserCard({ title, amount, description }: Props) {
  return (
    <section
      className="flex justify-between items-center border-[1px] border-solid border-black bg-[#fff]
    w-[80%] my-[0] mx-auto flex-col p-[1.5rem] box-border text-left mb-[2rem] md:flex-row"
    >
      <div className="w-full flex-1">
        <h3 className="m-[0] p-[0] text-[1rem] font-normal">{title}</h3>
        <p className="m-[0] text-[2.5rem] font-bold">{amount}</p>
        <p className="m-[0]">{description}</p>
      </div>
      <div className="w-full flex-1 md:flex-0">
        <button className="block w-full p-[8px] text-[1.1rem] font-bold mt-[1rem] border-[#00bc77] bg-[#00bc77] text-[#fff]">
          View transactions
        </button>
      </div>
    </section>
  );
}
