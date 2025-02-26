import image from "../assets/img/bank-tree.jpeg";
import BannerText from "./banner-text";

export default function Banner() {
  return (
    <div className="relative">
      <img src={image} alt="Image" />
      <BannerText
        titles={["No fees.", "No minimum deposit.", "High interest rates."]}
        text="Open a savings account with Argent Bank today!"
      />
    </div>
  );
}
