import React from "react";
import PanoramaIcon from "@mui/icons-material/Panorama";

const Gallery = () => {
  const galleryImages = [
    "/img/g2.jpg",
    "/img/g1.jpg",
    "/img/g3.jpg",
    "/img/g4.jpg",
    "/img/g5.jpg",
  ];

  return (
    <main className="bg-[#255ea8] pt-[5vw] pb-[2vw]">
      <h1 className="text-white font-bold text-[7vw] text-center mb-[2vw]">
        Gallery
      </h1>
      <section className="flex gap-[2vw] justify-center">
        <article className="flex flex-col gap-[2vw]">
          {galleryImages.map(
            (image, index) =>
              index < 2 && (
                <figure
                  className="w-full max-w-[40vw] relative group overflow-hidden"
                  key={index}
                  style={{ position: "relative" }}
                >
                  <img
                    src={image}
                    alt={`gallery image ${index + 1}`}
                    className="w-full transition-transform duration-300 transform scale-100 hover:scale-110"
                    style={{ display: "block", height: "auto" }} // Ensure height is set to auto for proper scaling
                  />
                  <div className="overlay group-hover:opacity-100 opacity-0 absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center transition-opacity duration-300">
                    <PanoramaIcon
                      style={{
                        color: "white",
                        fontSize: "3rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                    <h2 className="text-white text-2xl">Image {index + 1}</h2>
                  </div>
                </figure>
              )
          )}
        </article>
        <article className="flex flex-col gap-[2vw]">
          {galleryImages.map(
            (image, index) =>
              index >= 2 && (
                <figure
                  className="w-full max-w-[40vw] relative group overflow-hidden"
                  key={index}
                  style={{ position: "relative" }}
                >
                  <img
                    src={image}
                    alt={`gallery image ${index + 1}`}
                    className="w-full transition-transform  duration-300 transform scale-100 hover:scale-110"
                    style={{ display: "block", height: "auto" }} // Ensure height is set to auto for proper scaling
                  />
                  <div className="overlay group-hover:opacity-100 opacity-0 absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center transition-opacity duration-300">
                    <PanoramaIcon
                      style={{
                        color: "white",
                        fontSize: "3rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                    <h2 className="text-white text-2xl">Image {index + 1}</h2>
                  </div>
                </figure>
              )
          )}
        </article>
      </section>
    </main>
  );
};

export default Gallery;
