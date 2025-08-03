import React from "react";

const Gallery = () => {
  const images = [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png",
  ];

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 relative">
      <div className="text-center mt-12 lg:mt-16 mb-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative">
          {/* Top Left Quote */}
          <div className="absolute left-58 -top-3">
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
          <div className="absolute right-56 -top-3">
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
            Moments of Connection
          </p>
        </div>

      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-xl relative  ${[0, 2, 3, 5].includes(index)
                ? " top-14"
                : ""
              }`}
          >
            <img
              src={image}
              alt={`Moment ${index + 1}`}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Top Glow Above Bottom Row */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#FFF6E5] via-transparent to-transparent z-10 pointer-events-none" />

      {/* Text and Button */}
      <div className="text-center relative z-10 -mt-20">
        <p
          className="text-3xl text-[#CC7A00] italic mb-4"
          style={{ fontFamily: "'La Belle Aurore', cursive" }}
        >
          This may be the sign you're waiting for.
        </p>
        <button className="bg-[#CC7A00] text-white px-6 py-3 cursor-pointer rounded-lg text-lg font-semibold hover:bg-[#4d2f00] transition-colors">
          Book Complimentary 1:1 Session
        </button>
      </div>
    </div>
  );
};

export default Gallery;
