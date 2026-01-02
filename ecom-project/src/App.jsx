import { FeatureSection } from "./components/FeatureSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { TopProducts } from "./components/TopProducts";

const App = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <HeroSection />
      <TopProducts />
      <div className="flex flex-col w-full lg:w-[80%] m-auto">
        <FeatureSection
          title="Why Choose Us?"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          facere maiores! Voluptate corrupti qui"
          ctaTitle="Learn More"
          srcImg="/assets/first-feature.png"
        />
        <FeatureSection
        classNames="flex-row-reverse"
          title="Shop By category"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          facere maiores! Voluptate corrupti qui"
          ctaTitle="Browse Categories"
          srcImg="/assets/second.png"
        />
        <FeatureSection
          title="Trending right now?"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          facere maiores! Voluptate corrupti qui"
          ctaTitle="view Best sellers"
          srcImg="/assets/third.png"
        />
        <FeatureSection
        classNames="flex-row-reverse"
          title="Limited-time deals"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          facere maiores! Voluptate corrupti qui"
          ctaTitle="shop Deals"
          srcImg="/assets/four.png"
        />
        <FeatureSection
          title="Loved By Thousands"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          facere maiores! Voluptate corrupti qui"
          ctaTitle="Shop now"
          srcImg="/assets/five.png"
        />
      </div>
      <div className="w-full bg-black">
<Footer/>
      </div>
      
    </div>
  );
};

export default App;
