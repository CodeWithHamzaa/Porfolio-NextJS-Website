import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import React from 'react';

export function Footer() {
    return (
        <footer className="w-full pt-10 pb-2 bg-[#111827]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <a href="/" className="flex justify-center">
                        <img src="/logo.png" className="w-50 h-20" alt="Logo" />
                    </a>

                    <ul className="text-lg text-slate-200 flex items-center justify-center flex-col gap-7 md:flex-row transition-all duration-500 py-11 mb-10 border-b border-gray-200">
                        <li><a href="/">
                            <p className="text-[19px] m-5 relative w-max two">
                                <span>Home</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#9062F3]"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#9062F3]"></span>
                            </p>
                        </a>
                        </li>
                        <li><a href="/about">
                            <p className="text-[19px] m-5 relative w-max two">
                                <span>About</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#9062F3]"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#9062F3]"></span>
                            </p>
                        </a>
                        </li>
                        <li><a href="#">
                            <p className="text-[19px] m-5 relative w-max two">
                                <span>Privacy Policy</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#9062F3]"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#9062F3]"></span>
                            </p>
                        </a>
                        </li>
                        <li><a href="/contact">
                            <p className="text-[19px] m-5 relative w-max two">
                                <span>Contact</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#9062F3]"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#9062F3]"></span>
                            </p>
                        </a>
                        </li>

                    </ul>

                    {/* Social Media Icons */}
                    <div className="flex justify-center mt-8 space-x-8 text-white">
                        <a href="https://www.facebook.com/profile.php?id=61556819433779&mibextid=ZbWKwL" target="_blank" aria-label="Facebook" className="text-gray-500 transition-all duration-300 hover:text-[#9062F3]">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/CodeWithHamzaa" target="_blank" aria-label="Github" className="text-gray-500 transition-all duration-300 hover:text-[#9062F3]">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/official_codewithhamza?igsh=Mzdyc3NpOGZkOXo0" target="_blank" aria-label="Instagram" className="text-gray-500 transition-all duration-300 hover:text-[#9062F3]">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/code-with-hamza-00c11h/" target="_blank" aria-label="LinkedIn" className="text-gray-500 transition-all duration-300 hover:text-[#9062F3]">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.youtube.com/@CodeWithHamzaa" target="_blank" aria-label="YouTube" className="text-gray-500 transition-all duration-300 hover:text-[#9062F3]">
                            <FaYoutube className="w-6 h-6" />
                        </a>
                    </div>
                    <span className="text-base text-gray-500 text-center block mt-10">©<a href="/" className='text-[#af91ef] font-semibold'> CodeWithHamza</a> 2024, All rights reserved.</span>
            
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
