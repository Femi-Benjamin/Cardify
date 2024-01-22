import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { CustomButton } from '../static/button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-transparent shadow-md text-white">
            <div className="px-4 md:px-14">
                <div className="flex justify-between items-center py-4">
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
                    <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
                        <ul className="md:flex gap-10">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">Services</li>
                            <li className="cursor-pointer">Contact Us</li>
                            {" "}
                            <div className="md:hidden block">
                                <CustomButton
                                    width="120px"
                                    content="Verify Now"
                                    onClick={() => console.log('Button clicked')}
                                    backgroundColor="#fff"
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






// import Logo from '../assets/Logo.svg'
// import { CustomButton } from '../static/button'

// const Navbar = () => {
//     return (
//         <div>
//             <div className="bg-transparent shadow-md px-14 text-white">
//                 {/* MAIN FLEX */}
//                 <div className="p-6 flex justify-between items-center">
//                     <div>
//                         <img src={Logo} alt="" />
//                     </div>

//                     {/* SECOND FLEX */}
//                     <div className='flex gap-10 items-center text-base'>
//                         <div>
//                             <ul className='flex gap-10'>
//                                 <li className='cursor-pointer '>Home</li>
//                                 <li className='cursor-pointer '>Service</li>
//                                 <li className='cursor-pointer '>Contact Us</li>
//                             </ul>
//                         </div>

//                         <div>
//                             <CustomButton
//                                 width="150px"
//                                 content="Verify Now"
//                                 onClick={() => console.log("Button clicked")}
//                                 backgroundColor="#fff"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Navbar

