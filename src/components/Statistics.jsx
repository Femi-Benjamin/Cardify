import Jumia_logo from "../assets/Jumia_logo.svg";
import Spotify_logo from "../assets/Spotify_logo.svg";
import Playstation_logo from "../assets/Playstation_logo.svg";
import Deezer_logo from "../assets/Deezer_logo.svg";
import Apple_logo from "../assets/Apple_logo.svg";

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
        <a href="https://www.jumia.com.ng/" target="_blank" rel="noopener noreferrer">
          <img src={Jumia_logo} alt="" className="w-16 h-16 md:w-28  md:h-20" />{" "}
        </a>
        <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
          <img
            src={Spotify_logo}
            alt=""
            className="w-16 h-16 md:w-28 md:h-20"
          />{" "}
        </a>
        <a href="https://www.playstation.com/es-ar/" target="_blank" rel="noopener noreferrer">
          <img
            src={Playstation_logo}
            alt=""
            className="w-16 h-16 md:w-28 md:h-20"
          />{" "}
        </a>
        <a href="https://www.deezer.com/en/offers" target="_blank" rel="noopener noreferrer">
          <img src={Deezer_logo} alt="" className="w-16 h-16 md:w-28 md:h-20" />{" "}
        </a>
        <a href="https://www.apple.com/itunes/" target="_blank" rel="noopener noreferrer">
          <img src={Apple_logo} alt="" className="w-16 h-16 md:w-28 md:h-20" />
        </a>
      </div>
    </div>
  );
};

export default websites;
