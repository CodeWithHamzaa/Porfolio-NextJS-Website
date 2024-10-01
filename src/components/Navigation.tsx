'use client';

import Link from "next/link";
import React from "react";
import { FaHome, FaUserCircle, FaAddressBook, FaBars, FaTimes, FaGithub } from "react-icons/fa";

// NAV_MENU items for the navbar
const NAV_MENU = [
    {
        name: "Home",
        icon: FaHome,
        href: "/",
    },
    {
        name: "About",
        icon: FaUserCircle,
        href: "/about",
    },
    {
        name: "Contact",
        icon: FaAddressBook,
        href: "/contact",
    },
];

// NavItem Component without Material-Tailwind
interface NavItemProps {
    children: React.ReactNode;
    href?: string;
}

function NavItem({ children, href }: NavItemProps) {
    return (
        <li>
            <a
                href={href || "#"}
                className="flex items-center gap-2 text-gray-900 font-medium hover:text-[#824CF3] transition-all"
            >
                {children}
            </a>
        </li>
    );
}

// Main Navbar component
export function Navbar() {
    const [open, setOpen] = React.useState(false);

    // Function to toggle the mobile menu
    function handleOpen() {
        setOpen((cur) => !cur);
    }

    // Close the mobile menu when the window is resized
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="px-10 sticky top-4 z-50">
            <div className="mx-auto container">
                <div className="block w-full max-w-screen-2xl rounded-xl px-8 shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 bg-white text-white z-50 relative border-0 pr-3 py-3 pl-6 ">
                    <div className="flex items-center justify-between">
                        {/* Branding */}
                        <Link href="/">
                            <p className="block antialiased text-4xl font-NerkoOne text-[#824CF3]/90 drop-shadow-2xl">CodeWithHamza</p>
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="ml-10 hidden lg:flex  items-center gap-8">
                            {NAV_MENU.map(({ name, icon: Icon, href }) => (
                                <NavItem key={name} href={href}>
                                    <Icon className="h-5 w-5" />
                                    {name}
                                </NavItem>
                            ))}
                        </ul>

                        {/* Desktop Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link href="https://github.com/CodeWithHamzaa" target="blank">
                                <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-2.5 px-3.5">
                                    <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="flex gap-2 relative w-full text-left text-indigo-600 transition-colors tracking-widest duration-300 ease-in-out group-hover:text-white"><FaGithub className="h-5 w-5" />GitHub</span>
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={handleOpen} className="ml-auto lg:hidden">
                            {open ? (
                                <FaTimes className="h-6 w-6 text-gray-900" />
                            ) : (
                                <FaBars className="h-6 w-6 text-gray-900" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {open && (
                        <div className="mt-3 border-t border-gray-200 pt-4">
                            <ul className="flex flex-col ml-2 gap-4">
                                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                                    <NavItem key={name} href={href}>
                                        <Icon className="h-5 w-5" />
                                        <div className="!font-light">
                                        {name}
                                        </div>
                                        
                                    </NavItem>
                                ))}
                            </ul>

                            <div className="mt-6 mb-4 flex flex-col gap-4">
                                <a href="https://github.com/CodeWithHamzaa" target="_blank" className="bg-gray-200 flex gap-2 items-center border-solid border-gray-900 border justify-center text-gray-900 text-center tracking-widest px-4 py-2 rounded-md hover:bg-gray-300">
                                <FaGithub className="h-5 w-5" />GitHub
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
