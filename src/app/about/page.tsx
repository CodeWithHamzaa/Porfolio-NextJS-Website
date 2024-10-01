'use client';

import NotifyForm from '@/components/NotifyForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaGithub, FaInstagram, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
    return (
        <div className='mt-24'>
            <h1 className='text-5xl text-center font-medium font-NerkoOne mb-1'>About Me</h1>
            <div className='w-[50px] mx-auto h-1 bg-indigo-600 lg:-mb-12'></div>
            <div className="max-w-4xl flex items-center h-auto lg:h-[90vh] flex-wrap mx-auto my-32 lg:my-0">
                {/* Main Col */}
                <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl shadow-[#a781f7]/30 bg-white opacity-75 mx-6 lg:mx-0">
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        {/* Image for mobile view */}
                        <div
                            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover"
                            style={{ backgroundImage: "url('/hamza-pic-2.png')" }}
                        ></div>

                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Abdul Hameed</h1>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-[#4F46E5] opacity-25"></div>
                        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start gap-3">
                            <FaBriefcase className="h-4 text-[#4F46E5]" /> Full-Stack Developer
                        </p>
                        <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start gap-3">
                            <FaMapMarkerAlt className="h-4 text-[#4F46E5]" /> Karachi, Sindh Pakistan.
                        </p>
                        <p className="pt-8 text-sm">I am always eager to contribute to dynamic development teams and expand my expertise in web development and data modeling.</p>

                        <div className="pt-12 pb-8">
                            <Link href="/contact">
                                <button className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white font-bold py-2 px-4 rounded-full">
                                    Get In Touch
                                </button>
                            </Link>
                        </div>

                        <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                            <a className="link transform transition-transform duration-300 hover:scale-125" href="#" title="LinkedIn">
                                <FaLinkedin className="w-6 h-6 text-[#0077B5]" />
                                <span className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                    LinkedIn
                                </span>
                            </a>
                            <a className="link transform transition-transform duration-300 hover:scale-125" href="#" title="YouTube">
                                <FaYoutube className="w-6 h-6 text-[#FF0000]" />
                            </a>
                            <a className="link transform transition-transform duration-300 hover:scale-125" href="#" title="GitHub">
                                <FaGithub className="w-6 h-6 text-[#181717]" />
                            </a>
                            <a className="link transform transition-transform duration-300 hover:scale-125" href="#" title="Facebook">
                                <FaFacebook className="w-6 h-6 text-[#4267B2]" />
                            </a>
                            <a className="link transform transition-transform duration-300 hover:scale-125" href="#" title="Instagram">
                                <FaInstagram className="w-6 h-6 text-[#E1306C]" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Img Col */}
                <div className="w-full lg:w-2/5">
                    {/*  Big profile image for side bar (desktop)  */}
                    <Image src="/668-850.png" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt='big-pic' width={468} height={830} />
                </div>
            </div>
            <div className="mx-auto mt-32 max-w-7xl px-6 mb-20 sm:mb-36 sm:mt-5 lg:px-8">
                <div
                    className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-28">

                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Keep Updated
                    </h2>

                    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                        Join and Subscribe to get updates, market insights, tips & tricks of Technology, Software, and more.
                    </p>

                    <NotifyForm />

                    <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                        aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7">
                        </circle>
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                                gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                                <stop stop-color="#7775D6"></stop>
                                <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
                            </radialGradient>
                        </defs>
                    </svg>

                </div>
            </div>
        </div>
    );
}
