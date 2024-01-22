import Navbar from "../../layouts/Navbar";
import card from "../../assets/card.svg";
import { CustomButton } from "../../static/button";
import Statistics from "../../components/Statistics";

const Hero = () => {
  return (
    <div>
      <div className="Hd bg-[#004CB8] h-auto">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-20 px-4 md:px-20 md:text-left text-center">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="text-4xl md:text-6xl leading-[48px] md:leading-[75.497px] text-[#FFF] pb-4 md:pb-6">
              <span className="text-[#5BC2A9]">Verify</span> your Gift Cards{" "}
              <br /> with <span className="text-[#5BC2A9]">Confidence</span>
            </h1>

            <p className="text-sm md:text-base text-[#FFF] pb-4 md:pb-20">
              Our robust and secure verification system ensures that your <br />{" "}
              gift cards are valid, genuine, and ready to use. Say goodbye to{" "}
              <br /> uncertainty and hello to hassle-free gifting.
            </p>

            <CustomButton
              width="120px"
              content="Verify Now"
              onClick={() => console.log("Button clicked")}
              backgroundColor="#fff"
            />
          </div>
          <div>
            <img src={card} alt="" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
      <Statistics />
    </div>
  );
};

export default Hero;
