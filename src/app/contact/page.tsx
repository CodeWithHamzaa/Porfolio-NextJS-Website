import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="my-24 container mx-auto">
            <h1 className='text-5xl text-center font-medium font-NerkoOne'>Contact Us</h1>
            <div className='w-[50px] mx-auto h-1 bg-indigo-600 lg:-mb-12 z-50'></div>

            <div className="grid sm:grid-cols-2 items-start gap-14 mt-10 lg:mt-32 p-8 mx-auto bg-white shadow-lg shadow-[#a781f7]/30 rounded-xl font-[sans-serif]">
                <div>
                    <h1 className="text-gray-800 text-3xl font-extrabold">Let&apos;s Talk</h1>
                    <p className="text-sm text-gray-500 mt-4"><p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we&apos;d love to hear about your project and provide help.</p></p>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <FaEnvelope className="text-[#a781f7] w-5 h-5" />
                                </div>
                                <a href="mailto:codewithhamzaofficial@gmail.com" className="text-sm ml-4">
                                    <small className="block">Mail</small>
                                    <strong>codewithHamzaofficial@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-800 text-base font-bold">Socials</h2>
                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 border transition-all hover:border-blue-600/50">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-blue-600 hover:text-blue-800 transition-all w-5 h-5" />
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 border transition-all hover:border-[#FF0000]/50">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="text-[#FF0000] hover:text-[#cc0000] transition-all w-5 h-5" />
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 border transition-all hover:border-blue-700/50">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-blue-700 hover:text-blue-900 transition-all w-5 h-5" />
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 border transition-all hover:border-pink-500/50">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-pink-500 hover:text-pink-700 transition-all w-5 h-5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="ml-auto space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#a781f7]" />
                    <input type='email' placeholder='Email'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#a781f7]" />
                    <input type='text' placeholder='Subject'
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-[#a781f7]" />
                    <textarea placeholder='Message' rows={8}
                        className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-[#a781f7]"></textarea>
                    <button type='button'
                        className="text-white bg-[#a781f7] hover:bg-[#a781f7]/80 rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                </form>
            </div>
        </div>

    );
}
