"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPaperPlane, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10 mb-80">
      {/* Background Image */}
      <Image
        width={1200}
        height={1200}
        src="/hero/banner-pic.png"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />

      {/* Hero Content */}
      <div className="container mx-auto mt-40 sm:mt-36">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <div className="relative flex flex-col bg-clip-border text-gray-700 col-span-full rounded-xl border border-white bg-white/90 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-8">
            {/* Title */}
            <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 lg:text-5xl !leading-snug text-3xl lg:max-w-3xl">
              Hi,<br /> I&apos;m <span className="text-[#824CF3]/90 font-bold tracking-widest">Hamza</span> <br /> Full-Stack Developer
            </h1>

            {/* Subtitle */}
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-10 mt-6 !text-gray-900">
              Are you ready to embark on an exciting journey into the world of
              web development? Look no further! We are your trusted partner for
              mastering the art of web development.
            </p>

            {/* Buttons */}
            <div className="mb-8 flex justify-center gap-8 lg:justify-start">
              <Link href="/about">
                <button className="align-middle select-none flex gap-2 font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                  More About  Me <FaArrowRight className="text-[#bb9aff] animate-bounce-horizontal h-4 w-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="align-middle select-none flex gap-2 font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]">
                  Contact Us <FaPaperPlane className="h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Logos */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
            <Image
                width={144}
                height={144}
                className="max-h-14 opacity-80"
                src="/social/youtube.png"
                alt="youtube"
              />
              <Image
                width={144}
                height={144}
                className="min-h-14 opacity-80"
                src="/social/linkedinn.png"
                alt="linkedin"
              />
              <Image
                width={144}
                height={144}
                className="min-h-20 opacity-80"
                src="/social/insta.png"
                alt="instagram"
              />
              <Image
                width={144}
                height={144}
                className="min-h-14 opacity-80"
                src="/social/facebook.png"
                alt="facebook"
              />
            </div> */}
            <div className="max-w-7xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 mt-5">
                <a href="https://www.youtube.com/@CodeWithHamzaa" target="_blank"
                  className="flex justify-center items-center border border-solid border-gray-400 shadow-sm h-24 rounded-2xl opacity-80 hover:bg-slate-300/20 hover:opacity-90">
                  <Image
                    width={144}
                    height={144}
                    className="max-h-14"
                    src="/social/youtube.png"
                    alt="youtube"
                  />
                </a>

                <a href="https://www.linkedin.com/in/code-with-hamza-00c11h/" target="_blank"
                  className="flex justify-center items-center border border-solid border-gray-400 shadow-sm h-24 rounded-2xl opacity-80 hover:bg-slate-300/20 hover:opacity-90">
                  <Image
                    width={144}
                    height={144}
                    className="min-h-14"
                    src="/social/linkedin.png"
                    alt="linkedin"
                  />
                </a>

                <a href="https://www.instagram.com/official_codewithhamza?igsh=Mzdyc3NpOGZkOXo0" target="_blank"
                  className="flex justify-center items-center border border-solid border-gray-400 shadow-sm h-24 rounded-2xl opacity-80 hover:bg-slate-300/20 hover:opacity-90">
                  <Image
                    width={144}
                    height={144}
                    className="min-h-20"
                    src="/social/insta.png"
                    alt="instagram"
                  />
                </a>

                <a href="https://www.facebook.com/profile.php?id=61556819433779&mibextid=ZbWKwL" target="_blank"
                  className="flex justify-center items-center border border-solid border-gray-400 shadow-sm h-24 rounded-2xl opacity-80 hover:bg-slate-300/20 hover:opacity-90">
                  <Image
                    width={144}
                    height={144}
                    className="min-h-14"
                    src="/social/facebook.png"
                    alt="facebook"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
