import cuate from "../../assets/cuate.svg";
import { CustomButton } from "../../static/button";

const Contact = () => {
    return (
        <div className="p-5 md:p-20 px-4 md:px-20">
            <div className="text-center">
                <h1 className="text-[#333] text-4xl md:text-5xl font-medium leading-[145.187%] pb-3 md:pb-5">
                    Contact Us
                </h1>
                <p className="text-[#999] text-base md:text-lg leading-[145.187%] pb-5 md:pb-10">
                    Catering to your gift card verification requirements and offering swift solutions to <br /> your inquiries is our commitment.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="mb-5 md:mb-0">
                    <img src={cuate} alt="" className="max-w-full" />
                </div>

                <div className="w-full md:w-[450px] bg-white rounded-xl px-4 md:px-14 py-12">
                    <input
                        className="border w-full p-2 rounded-lg outline-none mb-5"
                        placeholder='Email'
                        type="email"
                        id="email"
                    />

                    <textarea
                        id="message"
                        type="message"
                        placeholder='Message'
                        className="border w-full p-2 rounded-lg outline-none mb-5"
                    />

                    <div>
                        <CustomButton
                            width="100%"
                            content="Submit"
                            onClick={() => console.log("Button clicked")}
                            backgroundColor="#004CB8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
