import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="my-10 flex flex-col lg:flex-row justify-around items-center gap-5 p-4">
      <div className="flex-1">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold text-descolor font-cabin">
              Craftsmanship Unveiled: Explore Our Artisanal Crafts
            </h2>
            <p className="font-mulish text-cardDescolor">
              Dive deeper into the world of artisanal mastery with our
              captivating video section. Immerse yourself in the enchanting
              process of crafting exquisite jute and wooden treasures, where
              every creation is a testament to skill, passion, and tradition.
              Click the button below to embark on a visual journey through our
              workshop, witnessing the intricate techniques and heartfelt
              dedication that bring each piece to life. Prepare to be inspired
              as you discover the artistry behind every stitch, weave, and
              carve. Let the magic of craftsmanship unfold before your eyes,
              guiding you to our comprehensive craft list page where you can
              explore and acquire your own piece of artisanal beauty.
            </p>
            <div className="card-actions justify-start">
              <Link to={"/allArtAndCraftItems"}>
                <button className="btn btn-outline text-orange-500 font-extrabold text-xl font-manrope">
                  {" "}
                  See All Our Crafts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="card h-[450px] bg-base-100 shadow-xl ">
          <div className="card-body">
            <video autoPlay loop muted className="w-full h-full object-cover">
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/F5_HWSdoncw?si=UvJQNU-4LC0kdwhM"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen=""
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
