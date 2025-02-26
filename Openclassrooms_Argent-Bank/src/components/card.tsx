interface Props {
  image: string;
  title: string;
  text: string;
}

export default function Card({ image, title, text }: Props) {
  return (
    <div className="flex flex-col flex-1 p-[2.5rem] items-center">
      <img
        className="w-[100px] border-[10px] border-solid border-[#00bc77] rounded-[50%] p-[1rem]"
        src={image}
        alt="Image"
      />
      <h3 className="text-[#222] text-[1.25rem] font-bold mb-[0.5rem]">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
}
