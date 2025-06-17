import React from 'react';

const AiEdTechSection = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-4">
                    <span className="text-yellow-500">Leading the AI</span> <br />
                    EdTech Revolution
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm md:text-base">
                    Shaping tomorrow’s innovators with the skills they need to thrive in the digital age
                </p>
                <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-yellow-300 mx-auto mb-12 transition">
                    Get in Touch <span className="text-xl">↗</span>
                </button>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#A441F1] rounded-3xl p-6 w-full mx-auto relative overflow-hidden">
                        <div className="bg-white rounded-xl border-4 border-black px-6 py-4 text-center mb-8 mx-auto max-w-xs">
                            <h2 className="text-2xl font-bold text-[#004D80]">55+ <br /> <span className="text-xl font-semibold">Countries</span></h2>
                            <p className="text-sm text-gray-600 mt-1">have been served</p>
                        </div>
                        <div className="flex justify-center -mt-8">
                            <img
                                src="https://i.ibb.co/jP3P2jzm/6708bc536dfb1ea762230e06-about-country.png"
                                alt="Kids with VR and keyboard"
                                className="w-full max-w-xs object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-orange-500 rounded-3xl p-6 w-full mx-auto relative overflow-hidden">
                        <div className="bg-white text-center text-gray-800 w-full rounded-xl p-6 mb-6 border-2 border-black max-w-xs mx-auto">
                            <div className="text-green-600 font-bold mb-2">★ Trustpilot</div>
                            <div className="text-green-500 text-2xl mb-1">★★★★★</div>
                            <p className="text-sm mb-2">
                                TrustScore <strong>4.8</strong> <span className="text-gray-500">426 reviews</span>
                            </p>
                            <div className="text-orange-500 font-semibold mb-1">★ Google</div>
                            <p className="text-sm">4.8 (278 Reviews)</p>
                        </div>
                        <div className="flex justify-center -mt-8">
                            <img
                                src="https://i.ibb.co/rKGQx8z8/6708bcc8caec4e5d7b3d1c26-about-hero-img.png"
                                alt="Girls learning"
                                className="w-full max-w-xs object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-sky-500 rounded-3xl p-6 w-full mx-auto relative overflow-hidden">
                        <div className="rounded-xl border-4 border-black px-6 py-4 text-center mb-8 mx-auto max-w-xs">
                            <h3 className="text-3xl font-bold">97% +</h3>
                            <p className="text-lg font-semibold">Students re-enrolling</p>
                        </div>
                        <div className="flex justify-center -mt-8">
                            <img
                                src="https://i.ibb.co/ycS4CMGV/6708bea0ca6c7da8da139377-about-hero-img3.png"
                                alt="Kids with laptop and VR"
                                className="w-full max-w-xs object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiEdTechSection;
