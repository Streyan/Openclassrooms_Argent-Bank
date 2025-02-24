interface Props {
  title: string;
  text: string;
}

export default function BannerText({ title, text }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p> {text}</p>
    </div>
  );
}
