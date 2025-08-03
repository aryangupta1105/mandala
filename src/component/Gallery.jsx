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
      <h2
        className="text-3xl text-center font-serif mb-8 text-[#664000]"
        style={{ fontFamily: "'La Belle Aurore', cursive" }}
      >
        <span className="text-4xl text-[#D8BFA3] mr-2">&ldquo;</span>
        Moments of Connection
        <span className="text-4xl text-[#D8BFA3] ml-2">&rdquo;</span>
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-xl relative  ${
              [0, 2, 3, 5].includes(index)
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
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
          Book Complimentary 1:1 Session
        </button>
      </div>
    </div>
  );
};

export default Gallery;
