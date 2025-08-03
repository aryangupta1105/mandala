import React from 'react';

const MandalaMethod = () => {
    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center ">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <h1 className="text-[52px] leading-[64px] font-bold italic tracking-[-0.03em] font-playfair text-center">
                            <span className="text-[#66400040]">Introducing</span>{' '}
                            <span className="text-[#664000]">→ The Mandala Method</span>
                        </h1>

                        <svg
                            width="32"
                            height="34"
                            viewBox="0 0 32 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative -top-8  shrink-0"
                        >
                            <path
                                d="M17.0349 3.7706C13.8915 3.12122 13.4777 3.5646 8.60051 12.4644C4.02278 20.7734 3.8091 21.4115 5.39049 21.8957C8.24846 22.8073 9.10948 21.9113 14.3814 12.5016C18.6692 4.81668 18.8733 4.14503 17.0349 3.7706Z"
                                fill="#CC7A00"
                            />
                            <path
                                d="M30.8644 24.5811C28.2194 22.2741 28.2147 22.3836 18.4754 25.8976C11.2875 28.4997 9.66 29.6155 10.9089 30.9524C12.2959 32.3939 12.6482 32.365 21.9358 29.4134C30.733 26.6383 32.4943 25.9891 30.8644 24.5811Z"
                                fill="#CC7A00"
                            />
                        </svg>
                    </div>



                    <p className="text-center text-[22px] leading-[100%] font-semibold text-[#66400080] max-w-4xl mx-auto font-lato">
                        The Mandala Within is more than a philosophy — it's a practice.
                        <br />{' '}
                        <svg
                            width="36"
                            height="38"
                            viewBox="0 0 40 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ position: 'relative', top: '18px', left: '6px', display: 'inline-block' }}
                        >
                            <path
                                d="M24.7477 8.89824C24.8585 7.94743 22.6689 7.75375 15.4194 8.04339C7.7456 8.35497 6.06415 8.70296 6.32812 9.82075C6.71005 11.3535 24.5288 10.4313 24.7477 8.89824Z"
                                fill="#CC7A00"
                            />
                            <path
                                d="M28.197 33.7452C31.0585 33.8734 31.4485 33.3994 33.5967 27.2011C35.8222 20.8015 36.0009 19.5533 34.8362 19.0369C32.7204 18.1092 31.5879 19.615 28.4405 27.3934C26.1216 33.1334 26.0848 33.6506 28.197 33.7452Z"
                                fill="#CC7A00"
                            />
                            <path
                                d="M9.81448 30.5135C11.8709 30.6329 12.6386 30.2576 15.1735 27.9271C22.6664 20.9853 28.5692 16.621 24.5618 16.4688C22.9266 16.3956 21.4006 17.5424 12.366 25.371C7.39223 29.7222 7.06436 30.3356 9.81448 30.5135Z"
                                fill="#CC7A00"
                            />
                        </svg>{' '}
                        It offers a gentle path for men and women seeking clarity, stillness, and wholeness in a noisy world.
                    </p>

                </div>

                {/* Main Mandala Container */}
                <div className="relative flex items-center justify-center ">
                    <div className="w-94 h-94 md:w-120 md:h-120 lg:w-146 lg:h-146">
                        <img
                            src="/Intro.png"
                            alt="Intro"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>


                {/* Quote Section */}
                <div className="text-center mt-6 lg:mt-6 mb-12">
                    <div className="flex flex-col items-center text-center max-w-7xl mx-auto relative">
                        {/* Top Left Quote */}
                        <div className="absolute left-38 -top-4">
                            <svg
                                width="25"
                                height="17"
                                viewBox="0 0 25 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18.9183 10.0746L19.6092 10.0585C27.1779 9.92994 24.655 -1.19023 16.5561 1.7505C10.5782 3.91989 11.687 13.8991 18.0826 15.5382C20.9109 16.2613 24.0605 15.7471 21.7143 14.9436C19.7057 14.2687 18.0826 12.3243 18.1951 10.7334C18.2273 10.3799 18.5326 10.0746 18.9183 10.0746Z" fill="#664000" fillOpacity="0.25" />
                                <path d="M4.14977 1.34928C-3.12967 4.14538 -0.172912 16.3583 7.91 16.8886C10.0151 17.0332 10.5615 16.535 8.97059 15.9405C7.42793 15.362 5.48353 12.6301 5.27463 10.7821C5.22642 10.4125 5.51564 10.1072 5.88523 10.1072C8.0064 10.1072 8.89025 10.1073 10.1276 8.40388C13.1647 4.19365 9.13129 -0.562999 4.14977 1.34928Z" fill="#664000" fillOpacity="0.25" />
                            </svg>
                        </div>

                        {/* Top Right Quote */}
                        <div className="absolute right-38 -top-4">
                            <svg
                                width="25"
                                height="17"
                                viewBox="0 0 25 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5.22237 7.75306L4.53138 7.76914C-3.03731 7.8977 -0.514413 19.0179 7.58457 16.0771C13.5624 13.9077 12.4536 3.92855 6.05798 2.28945C3.22976 1.56632 0.0801582 2.08055 2.42629 2.88403C4.43497 3.55895 6.05798 5.5033 5.94549 7.09419C5.91335 7.44772 5.60804 7.75306 5.22237 7.75306Z" fill="#664000" fillOpacity="0.25" />
                                <path d="M19.9909 16.4784C27.2703 13.6823 24.3135 1.46936 16.2306 0.939062C14.1255 0.794437 13.5792 1.29259 15.17 1.88717C16.7127 2.46567 18.6571 5.1975 18.866 7.0455C18.9142 7.4151 18.625 7.72045 18.2554 7.72045C16.1342 7.72045 15.2504 7.72039 14.013 9.42376C10.9759 13.634 15.0093 18.3906 19.9909 16.4784Z" fill="#664000" fillOpacity="0.25" />
                            </svg>
                        </div>

                        {/* Quote Text */}
                        <p
                            className="italic font-normal px-4 text-center"
                            style={{
                                fontFamily: "'Lato', sans-serif",
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize: '18px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                maxWidth: '48rem',
                                color: '#664000',
                            }}
                        >
                            To guide individuals—<span style={{ color: '#CC7A00' }}>especially men</span>—toward rediscovering their <span style={{ color: '#CC7A00' }}>inner compass</span>, and to <span style={{ color: '#CC7A00' }}>create safe spaces</span> for open-hearted dialogue.
                        </p>

                    </div>

                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button
                        className="text-[#CC7A00] text-lg font-medium cursor-pointer rounded-lg transition-all duration-300 transform"
                        style={{
                            width: "230px",
                            height: "56px",
                            paddingTop: "16px",
                            paddingRight: "24px",
                            paddingBottom: "16px",
                            paddingLeft: "24px",
                            background: "#CC7A001F",
                            borderRadius: "8px",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "#CC7A0052",
                            boxShadow: "0px 8px 24px 0px #995C001A",
                            opacity: 1,
                            fontFamily: "'Lato', sans-serif",
                            fontWeight: 700,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                        }}
                    >
                        Book a Session
                    </button>

                </div>
            </div>
        </div>
    );
};

export default MandalaMethod;