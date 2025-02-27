interface Props {
  titles: string[];
  text: string;
}

export default function BannerText({ titles, text }: Props) {
  return (
    <div
      className="relative top-[2px] w-[200px] bg-white p-[2rem] text-left mx-[0] my-auto 
    md:absolute md:top-[50px] md:right-[50px] md:w-[300px] md:m-[2rem]"
    >
      <h2 className="sr-only">Promoted Content</h2>
      {titles.map((title) => (
        <p key={title} className="font-bold text-[1rem] m-[0] md:text-[1.5rem]">
          {title}
        </p>
      ))}
      <p className="mb-[0] text-[0.9rem] md:text-[1.2rem]"> {text}</p>
    </div>
  );
}
