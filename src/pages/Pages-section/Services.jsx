import Servicecard from "../../assets/servicecard.svg";
import Icon from "../../assets/icon.svg";
import doticon from "../../assets/doticon.svg";

const Services = () => {
    return (
        <div className="p-5 md:p-10">
            <div className="text-center">
                <h1 className="text-[#333] text-4xl md:text-5xl font-medium leading-[145.187%] pb-3 md:pb-5">Our Services</h1>
                <p className="text-[#999] text-base md:text-lg leading-[145.187%] pb-5 md:pb-10">
                    Utilize our agile and efficient systems to ensure thorough gift card
                    verification and <br /> concise summaries for top-tier evaluations
                </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-evenly">
                {/* BOX ONE */}
                <div className="w-full md:w-[264px] h-[290px md:bg-white bg-white p-5 md:rounded-md rounded-xl md:p-10 text-center items-center flex flex-col mb-5 md:mb-0">
                    <img className="mx-auto mb-2 md:mb-4" src={Servicecard} alt="" />
                    <h1 className="text-lg md:text-xl pb-2">High Performance</h1>
                    <p className="text-sm md:text-base">
                        Our cutting-edge technology ensures high-performance gift card
                        verification, giving you results in seconds.
                    </p>
                </div>

                {/* BOX TWO */}
                <div className="w-full md:w-[264px] h-[290px md:bg-white bg-white p-5 md:rounded-md rounded-xl md:p-10 text-center items-center flex flex-col mb-5 md:mb-0">
                    <img className="mx-auto mb-2 md:mb-4" src={Icon} alt="" />
                    <h1 className="text-lg md:text-xl pb-2">Secured</h1>
                    <p className="text-sm md:text-base">
                        Rest easy knowing your gift card details are secured with state-of-the-art encryption. Your data remains confidential.
                    </p>
                </div>

                {/* BOX THREE */}
                <div className="w-full md:w-[264px] h-[290px md:bg-white bg-white p-5 md:rounded-md rounded-xl md:p-10 text-center items-center flex flex-col">
                    <img className="mx-auto mb-2 md:mb-4" src={doticon} alt="" />
                    <h1 className="text-lg md:text-xl pb-2">Decentralized</h1>
                    <p className="text-sm md:text-base">
                        With nodes around the world, your verifications are always within reach, anytime, anywhere.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
