interface Props {
  image: string;
  title: string;
  text: string;
}

export default function Card({ image, title, text }: Props) {
  return (
    <div>
      <img src={image} alt="Image" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
