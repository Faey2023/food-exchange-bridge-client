import Banner from "./Banner";
import FeaturedFood from "./Foods/FeaturedFood";
import MarqueeSection from "./Marquee/MarqueeSection";

// import Phone from "./Phone";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* featured foods */}
      <FeaturedFood />
      {/* <Phone /> */}
      <MarqueeSection />
    </div>
  );
};

export default Home;
