import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { CustomButton } from '../static/button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#004CB8] shadow-md text-white left-0 right-0  xl:bg-opacity-95 bg-opacity-100 fixed">
            <div className="px-4 md:px-14">
                <div className="flex justify-between items-center py-6 ">
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>

                    {/* Hamburger Menu */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>

                    </div>

                    {/* Menu Links */}
                    <div
                        className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} mt-4 md:mt-0 ${isMenuOpen ? 'bg-white text-black rounded-md shadow-2xl p-4 text-center' : ''} md:bg-transparent md:shadow-none md:p-0`}>
                        <ul className="md:flex gap-10 text-">
                            <li className="md:cursor-pointer cursor-pointer md:mb-0 mb-1">Home</li>
                            <li className="md:cursor-pointer cursor-pointer md:mb-0 mb-1">Services</li>
                            <li className="md:cursor-pointer cursor-pointer md:mb-0 mb-2">Contact Us</li>
                            {" "}
                            <div className="md:hidden block">
                                <CustomButton
                                    width="120px"
                                    content="Verify Now"
                                    onClick={() => console.log('Button clicked')}
                                    backgroundColor="#004CB8"
                                    textColor="#FFFFFF"
                                />
                            </div>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <CustomButton
                            width="150px"
                            content="Verify Now"
                            onClick={() => console.log('Button clicked')}
                            backgroundColor="#fff"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
