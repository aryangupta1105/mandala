import React from 'react';

const MeetClayBoykin = () => {
    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center ">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <h1 className="text-[52px] leading-[64px] font-bold italic tracking-[-0.03em] font-playfair text-center">
                            <span className="text-[#66400040]">Meet</span>{' '}
                            <span className="text-[#664000]">→ Clay Boykin</span>
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
                        Founder of The Mandala Within™ — a guide for men & women on the path inward.
                    </p>

                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-12 max-w-6xl mx-auto">
                    {/* Left Side - Photo Collage */}
                    <div className="relative">
                        {/* Photo Frame Container */}
                        <div className="relative ">
                            <img
                                src="/meet1.png"
                                alt="Clay - Office, Outdoor, Portrait, and Group Photos"
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-3">
                        {/* Opening statement */}
                        <div>
                            <p
                                className="italic font-bold mb-4"
                                style={{
                                    fontFamily: "'Lato', sans-serif",
                                    fontWeight: 700,
                                    fontStyle: 'italic',
                                    fontSize: '21px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#664000', // Tailwind's amber-800 hex value
                                }}
                            >
                                Clay Boykin is not your typical leadership coach.
                            </p>

                        </div>

                        {/* Main content paragraphs */}
                        <div
                            className="space-y-4"
                            style={{
                                fontFamily: "'Lato', sans-serif",
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize: '21px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                color: '#664000A6',
                            }}
                        >
                            <p>
                                How's This: Clay Boykin redefines what it means to be a transformational coach. A former Marine officer and corporate executive with nearly four decades in the business world, Clay reached a point of profound burnout and spiritual disconnection. His soul whispered what his mind had long ignored: “This isn’t it.”
                            </p>

                            <p>
                                That whisper sparked many years of deep inner work—beyond titles and tactics—into meditation halls, men’s circles, ancient wisdom traditions, and spiritual exploration.
                            </p>

                            <p>
                                Clay eventually founded the Men’s Fellowship Network and developed The Mandala Within™—a holistic framework for emotional wholeness, spiritual balance, and authentic self-leadership.
                            </p>

                            <p>
                                Today, he works with individuals across the gender spectrum to help them reclaim their center and rediscover clarity, meaning, and purpose—for a more fulfilling life.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Quote Section */}
                <div className="text-center mt-12 lg:mt-16 mb-12">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative">
                        {/* Top Left Quote */}
                        <div className="absolute left-4 -top-4">
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
                        <div className="absolute right-4 -top-4">
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
                            className="text-[#664000] italic font-light px-4"
                            style={{
                                fontFamily: "'La Belle Aurore', cursive",
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize: '28px',
                                lineHeight: '32px',
                                letterSpacing: '0%',
                                maxWidth: '48rem',
                            }}
                        >
                            What began as a personal search became a life’s purpose :
                            <br />
                            To hold space for men to rediscover their inner truth.
                        </p>
                    </div>

                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <button
                        className="text-[#CC7A00] text-lg font-medium cursor-pointer rounded-lg transition-all duration-300 transform"
                        style={{
                            width: "228px",
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
                        Watch Story video
                    </button>

                </div>
            </div>
        </div>
    );
};

export default MeetClayBoykin;