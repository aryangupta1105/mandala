import React, { useState } from 'react';
import { Play } from 'lucide-react';

const MandalaHeroSection = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoClick = () => {
        setIsVideoPlaying(true);
        // In a real implementation, you would trigger video playback here
        console.log('Video playback would start here');
    };

    return (
        <section className="min-h-screen relative overflow-hidden">
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Quote */}
                    <div className="mb-8">
                        <p
                            className="italic text-[24px] font-normal leading-[90%] text-[#CC7A00] align-middle"
                            style={{ fontFamily: "'La Belle Aurore', cursive", letterSpacing: "0" }}
                        >
                            <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block -translate-y-4"
                            >
                                <path
                                    d="M18.9183 9.16076L19.6092 9.14468C27.1779 9.01612 24.655 -2.10405 16.5561 0.836681C10.5782 3.00607 11.687 12.9853 18.0826 14.6244C20.9109 15.3475 24.0605 14.8333 21.7143 14.0298C19.7057 13.3549 18.0826 11.4105 18.1951 9.81963C18.2273 9.4661 18.5326 9.16076 18.9183 9.16076Z"
                                    fill="#CC7A00"
                                />
                                <path
                                    d="M4.14977 0.43546C-3.12967 3.23156 -0.172912 15.4445 7.91 15.9748C10.0151 16.1194 10.5615 15.6212 8.97059 15.0267C7.42793 14.4481 5.48353 11.7163 5.27463 9.86832C5.22642 9.49872 5.51564 9.19337 5.88523 9.19337C8.0064 9.19337 8.89025 9.19343 10.1276 7.49006C13.1647 3.27984 9.13129 -1.47682 4.14977 0.43546Z"
                                    fill="#CC7A00"
                                />
                            </svg>

                            For person seeking meaning beyond success
                            <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline-block -translate-y-4"
                            >
                                <path
                                    d="M5.22237 6.83924L4.53138 6.85532C-3.03731 6.98388 -0.514413 18.104 7.58457 15.1633C13.5624 12.9939 12.4536 3.01473 6.05798 1.37564C3.22976 0.652506 0.0801582 1.16673 2.42629 1.97021C4.43497 2.64513 6.05798 4.58948 5.94549 6.18037C5.91335 6.5339 5.60804 6.83924 5.22237 6.83924Z"
                                    fill="#CC7A00"
                                />
                                <path
                                    d="M19.9909 15.5645C27.2703 12.7684 24.3135 0.555539 16.2306 0.0252438C14.1255 -0.119381 13.5792 0.378775 15.17 0.973349C16.7127 1.55185 18.6571 4.28368 18.866 6.13168C18.9142 6.50128 18.625 6.80663 18.2554 6.80663C16.1342 6.80663 15.2504 6.80657 14.013 8.50994C10.9759 12.7202 15.0093 17.4768 19.9909 15.5645Z"
                                    fill="#CC7A00"
                                />
                            </svg>

                        </p>
                    </div>

                    {/* Main Heading */}
                    <div className="mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                        <h1
                            className="font-bold"
                            style={{
                                fontSize: '72px',
                                lineHeight: '64px',
                                letterSpacing: '-0.03em',
                                display: 'inline-block',
                                position: 'relative',
                            }}
                        >
                            <span style={{ color: '#66400040' }}>Rediscover</span>{' '}
                            <span
                                style={{
                                    color: '#664000',
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'dotted',
                                    textDecorationOffset: '8%',
                                    textDecorationThickness: '4%',
                                    textDecorationSkipInk: 'auto',
                                }}
                            >
                                Clarity
                            </span>
                            <span
                                style={{
                                    color: '#664000',
                                    fontSize: '72px',
                                    fontWeight: '700',
                                    fontStyle: 'normal',
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'dotted',
                                    textDecorationOffset: '8%',
                                    textDecorationThickness: '4%',
                                    textDecorationSkipInk: 'auto',
                                    marginLeft: '4px',
                                    position: 'relative',
                                    zIndex: 1, // make sure it's above background but below svg if needed
                                }}
                            >
                                ,
                                {/* SVG above the comma */}
                                <span
                                    style={{
                                        position: 'absolute',
                                        bottom: '50%', // place above the comma
                                        left: '100%', // center horizontally relative to comma
                                        transform: 'translateX(-50%) translateY(20%)', // adjust vertical position (20% down for overlap)
                                        width: '66px',
                                        height: '66px',
                                        pointerEvents: 'none',
                                        zIndex: 2,
                                    }}
                                >
                                    <svg
                                        width="66"
                                        height="66"
                                        viewBox="0 0 66 66"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ display: 'block' }}
                                    >
                                        <path
                                            d="M33.8748 19.6111C30.7313 18.9617 30.3175 19.4051 25.4404 28.3048C20.8626 36.6138 20.6489 37.252 22.2303 37.7362C25.0883 38.6477 25.9493 37.7517 31.2212 28.3421C35.5091 20.6571 35.7132 19.9855 33.8748 19.6111Z"
                                            fill="#CC7A00"
                                            style={{ fillOpacity: 1 }}
                                        />
                                        <path
                                            d="M47.7042 40.4214C45.0592 38.1145 45.0545 38.2239 35.3152 41.738C28.1273 44.34 26.4998 45.4558 27.7487 46.7927C29.1358 48.2342 29.4881 48.2054 38.7756 45.2537C47.5729 42.4787 49.3341 41.8294 47.7042 40.4214Z"
                                            fill="#CC7A00"
                                            style={{ fillOpacity: 1 }}
                                        />
                                    </svg>
                                </span>
                            </span>
                        </h1>


                        <h2
                            className="font-bold mt-2"
                            style={{
                                fontSize: '72px',
                                lineHeight: '64px',
                                letterSpacing: '-0.03em',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                            }}
                        >
                            {/* SVG before Meaning */}
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '47px',
                                    height: '60px',
                                    position: 'relative',
                                    top: '-36px',
                                    left: '8px',       // move right by 6px (adjust as needed)
                                    flexShrink: 0,
                                }}
                                aria-hidden="true"
                            >
                                <svg
                                    width="47"
                                    height="60"
                                    viewBox="0 0 47 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ display: 'block' }}
                                >
                                    <path
                                        d="M28.9888 49.6694C29.2169 50.8827 26.4174 51.3288 17.0646 51.6084C7.16406 51.8979 4.96953 51.6015 5.20857 50.1397C5.56204 48.1335 28.5693 47.7168 28.9888 49.6694Z"
                                        fill="#CC7A00"
                                        style={{ fillOpacity: 1 }}
                                    />
                                    <path
                                        d="M31.2402 5.99177C34.9101 5.56939 35.4544 6.14419 38.7758 13.925C42.2147 21.9579 42.5569 23.5477 41.1049 24.3168C38.4664 25.7006 36.8739 23.8653 32.1249 14.1416C28.6253 6.96562 28.5314 6.30352 31.2402 5.99177Z"
                                        fill="#CC7A00"
                                        style={{ fillOpacity: 1 }}
                                    />
                                    <path
                                        d="M12.4027 20.9444C15.0376 20.6057 16.0591 21.0194 19.5299 23.7896C29.7942 32.0464 37.781 37.1299 32.6391 37.6863C30.542 37.9276 28.4755 36.5895 16.148 27.3307C9.35761 22.1802 8.88062 21.4206 12.4027 20.9444Z"
                                        fill="#CC7A00"
                                        style={{ fillOpacity: 1 }}
                                    />
                                </svg>
                            </span>

                            <span
                                style={{
                                    color: '#664000',
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'dotted',
                                    textDecorationOffset: '8%',
                                    textDecorationThickness: '4%',
                                    textDecorationSkipInk: 'auto',
                                }}
                            >
                                Meaning
                            </span>
                            <span
                                style={{
                                    color: '#664000',
                                    fontSize: '72px',
                                    fontWeight: '700',
                                    fontStyle: 'normal',
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'dotted',
                                    textDecorationOffset: '8%',
                                    textDecorationThickness: '4%',
                                    textDecorationSkipInk: 'auto',
                                }}
                            >
                                ,
                            </span>{' '}
                            <span
                                className="italic"
                                style={{
                                    color: '#66400040',
                                    fontSize: '72px',
                                    fontWeight: '700',
                                    fontStyle: 'italic',
                                }}
                            >
                                &
                            </span>{' '}
                            <span
                                style={{
                                    color: '#664000',
                                    fontWeight: '700',
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'dotted',
                                    textDecorationOffset: '8%',
                                    textDecorationThickness: '4%',
                                    textDecorationSkipInk: 'auto',
                                }}
                            >
                                Inner Peace
                            </span>
                            <span className="text-[#664000]" style={{ fontSize: '48px' }}>
                                .
                            </span>
                        </h2>
                    </div>

                    {/* Subheading */}
                    <div className="mb-12">
                        <p
                            className="max-w-2xl mx-auto"
                            style={{
                                fontFamily: 'Lato, sans-serif',
                                fontWeight: 600,
                                fontStyle: 'normal',        // 'SemiBold' isn't a font-style, use fontWeight 600 as you did
                                fontSize: '22px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textAlign: 'center',
                                color: '#66400080',
                            }}
                        >
                            You don't need fixing. You just need space to remember who you are.
                        </p>

                    </div>

                    {/* CTA Button */}
                    <div className="-mt-2">
                        <button className="bg-[#CC7A00] hover:bg-[#664000] cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform  shadow-lg hover:shadow-xl">
                            Try a Free 20-Minute Session
                        </button>
                        <p
                            className="mt-3 text-sm"
                            style={{
                                fontFamily: 'Lato, sans-serif',
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0%',
                                textAlign: 'center',
                                color: '#66400080',
                            }}
                        >
                            No pressure. Just a conversation. No credit card,
                            <br />
                            no commitments.
                        </p>

                    </div>

                    {/* Video Section */}
                    <div className="w-full flex justify-center pt-16">
                        <div
                            className="relative overflow-hidden group cursor-pointer"
                            onClick={handleVideoClick}
                        >
                            {/* Thumbnail Image */}
                            <div className="relative w-[980px] h-[548px] overflow-hidden ">

                                {/* SVG in top-left corner */}
                                <div className="absolute -top-6 left-4 z-10 p-4">
                                    <svg
                                        width="57"
                                        height="61"
                                        viewBox="0 0 57 61"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M41.7762 22.3093C43.4788 23.7534 48.6553 16.1354 47.5168 13.864C47.1087 13.0231 46.2332 12.8922 45.4222 13.548C41.8555 16.331 39.9996 20.7936 41.7762 22.3093Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M32.9304 18.9603C33.656 20.0998 37.3948 22.4602 37.8764 22.0753C38.9702 21.1792 36.409 18.5764 33.463 17.5385C32.6407 17.2655 32.3585 18.0537 32.9304 18.9603Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M35.4248 32.9099C36.8299 33.7211 40.6837 27.6452 39.9209 25.8213C39.596 25.0861 38.4037 24.4554 37.9039 24.772C34.641 26.7793 33.1766 31.6119 35.4248 32.9099Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M33.3552 35.5484C32.5411 35.5107 32.0029 36.0935 29.749 39.548C27.2955 43.3483 28.6184 48.695 34.2284 40.376C35.899 37.8818 35.4939 35.6879 33.3552 35.5484Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M47.1334 28.2558C49.1213 29.6053 49.9971 29.7362 50.039 28.6652C50.0752 27.5042 44.4344 23.2963 43.6699 23.9214C42.8123 24.6081 44.0931 26.1834 47.1334 28.2558Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M15.575 23.6108C13.5814 22.1715 12.7334 21.3937 11.9342 21.4799C10.4598 21.6374 12.1829 24.0446 14.9955 25.8126C17.7558 27.5215 18.2753 25.5733 15.575 23.6108Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M24.3938 41.3844C23.0237 40.3628 20.6866 38.8694 20.2135 38.7404C18.1697 38.1368 19.7522 40.8375 22.5331 42.7601C26.0549 45.1969 27.785 43.9476 24.3938 41.3844Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M24.833 46.9131C21.4304 49.0126 20.269 53.2707 22.7117 54.681C23.6844 55.2426 27.7987 51.1617 27.8616 49.5551C27.8977 48.3942 25.6124 46.4119 24.833 46.9131Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M18.7298 29.7271C18.119 28.5386 16.8902 27.7715 16.2813 28.227C15.5078 28.818 13.021 32.4263 12.9967 33.0175C12.9298 34.1318 15.2027 36.1358 15.8956 35.5847C16.9553 34.6977 19.0705 30.385 18.7298 29.7271Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M37.6726 50.4348C37.1625 48.8721 31.8167 45.1515 31.0182 45.7858C30.0891 46.5464 31.1913 47.9321 34.4205 50.0271C37.4767 52.0222 38.2317 52.1122 37.6726 50.4348Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M23.4434 16.9705C22.3276 16.5569 19.008 21.5578 19.2885 23.2185C19.5301 24.5974 21.4111 26.9804 23.0187 24.0463C25.3285 19.8459 26.253 18.045 23.4434 16.9705Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M27.0567 30.1823C26.2687 29.1509 22.0626 26.7513 21.6491 27.1179C20.745 27.8352 22.075 29.5254 24.7771 31.0855C27.5008 32.658 28.6111 32.2326 27.0567 30.1823Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                    </svg>
                                </div>

                                <img
                                    src="/image.png"
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute bottom-0 right-0 z-10 p-4">
                                    <svg
                                        width="57"
                                        height="61"
                                        viewBox="0 0 57 61"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.8547 38.0987C13.1521 36.6545 7.97558 44.2726 9.1141 46.544C9.52212 47.3848 10.3977 47.5158 11.2087 46.8599C14.7754 44.0769 16.6313 39.6144 14.8547 38.0987Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M23.7005 41.4476C22.9749 40.3081 19.2361 37.9478 18.7545 38.3326C17.6607 39.2287 20.2219 41.8315 23.1678 42.8694C23.9902 43.1425 24.2723 42.3542 23.7005 41.4476Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M21.2061 27.498C19.801 26.6868 15.9471 32.7628 16.7099 34.5867C17.0348 35.3219 18.2271 35.9526 18.727 35.6359C21.9899 33.6287 23.4542 28.796 21.2061 27.498Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M23.2757 24.8596C24.0898 24.8973 24.628 24.3145 26.8819 20.86C29.3354 17.0596 28.0124 11.713 22.4024 20.032C20.7318 22.5262 21.1369 24.72 23.2757 24.8596Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M9.49742 32.1522C7.50956 30.8027 6.63374 30.6717 6.59181 31.7428C6.55565 32.9037 12.1965 37.1117 12.9609 36.4866C13.8185 35.7999 12.5378 34.2246 9.49742 32.1522Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M41.0559 36.7972C43.0495 38.2365 43.8975 39.0143 44.6967 38.9281C46.1711 38.7705 44.448 36.3634 41.6354 34.5954C38.8751 32.8864 38.3555 34.8346 41.0559 36.7972Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M32.237 19.0235C33.6071 20.0451 35.9442 21.5386 36.4173 21.6676C38.4611 22.2711 36.8787 19.5705 34.0977 17.6479C30.576 15.211 28.8459 16.4604 32.237 19.0235Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M31.7978 13.4949C35.2005 11.3954 36.3619 7.13725 33.9192 5.72696C32.9464 5.16534 28.8322 9.24625 28.7693 10.8528C28.7331 12.0137 31.0185 13.9961 31.7978 13.4949Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M37.901 30.6808C38.5119 31.8693 39.7407 32.6364 40.3495 32.1809C41.1231 31.5899 43.6098 27.9817 43.6342 27.3904C43.701 26.2761 41.4282 24.2721 40.7353 24.8233C39.6756 25.7102 37.5603 30.0229 37.901 30.6808Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M18.9582 9.97321C19.4683 11.5359 24.8141 15.2564 25.6126 14.6222C26.5418 13.8616 25.4395 12.4758 22.2104 10.3809C19.1542 8.38579 18.3991 8.29574 18.9582 9.97321Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M33.1874 43.4374C34.3033 43.8511 37.6229 38.8502 37.3423 37.1894C37.1008 35.8106 35.2197 33.4275 33.6122 36.3617C31.3024 40.5621 30.3779 42.363 33.1874 43.4374Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                        <path
                                            d="M29.5742 30.2257C30.3621 31.2571 34.5683 33.6567 34.9817 33.2901C35.8859 32.5727 34.5559 30.8825 31.8538 29.3225C29.1301 27.7499 28.0198 28.1753 29.5742 30.2257Z"
                                            fill="#CC7A00"
                                            fillOpacity="0.64"
                                            style={{
                                                fill: '#CC7A00',
                                                fillOpacity: 0.64,
                                            }}
                                        />
                                    </svg>
                                </div>

                                {/* Centered Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="rounded-full p-6 transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                                        style={{ background: '#d2b177fa' }}
                                    >
                                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>

                            {/* Video Placeholder When Playing */}
                            {isVideoPlaying && (
                                <div className="absolute inset-0 bg-black flex items-center justify-center">
                                    <p className="text-white">Video would play here</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MandalaHeroSection;