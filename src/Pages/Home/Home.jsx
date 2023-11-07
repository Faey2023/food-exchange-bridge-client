import Banner from "./Banner";
import FeaturedFood from "./Foods/FeaturedFood";
import Gallery from "./Gallery/Gallery";
import MarqueeSection from "./Marquee/MarqueeSection";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* featured foods */}
      <FeaturedFood />
      {/* gallery */}
      <Gallery />
      {/* trusted partners */}
      <MarqueeSection />
    </div>
  );
};

export default Home;
