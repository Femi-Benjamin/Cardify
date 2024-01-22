import Jumia from "../assets/Jumia.svg";
import spotify from "../assets/spotify.svg";
import Playstation from "../assets/Playstation.svg";
import Deezer from "../assets/Deezer.svg";
import Apple from "../assets/Apple.svg";

const websites = () => {
  return (
    <div className="text-3xl text-center items-center">
      <h1 className="py-10">
        {" "}
        We have verified over{" "}
        <span className="text-[#5BC2A9]">
          {" "}
          <a href="#">10,000 </a>{" "}
        </span>{" "}
        gift cards
      </h1>

      <div className="flex flex-wrap justify-center pb-6 gap-4 md:gap-8 items-center">
        <a
          href="https://www.jumia.com.ng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Jumia} alt="" className="w-16 h-16 md:w-28  md:h-20" />{" "}
        </a>
        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={spotify} alt="" className="w-16 h-16 md:w-28 md:h-20" />{" "}
        </a>
        <a
          href="https://www.playstation.com/es-ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Playstation} alt="" className="w-16 h-16 md:w-28 md:h-20" />{" "}
        </a>
        <a
          href="https://www.deezer.com/en/offers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Deezer} alt="" className="w-16 h-16 md:w-28 md:h-20" />{" "}
        </a>
        <a
          href="https://www.apple.com/itunes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Apple} alt="" className="w-16 h-16 md:w-28 md:h-20" />
        </a>
      </div>
    </div>
  );
};

export default websites;
