import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div class="flex flex-col w-full h-screen p-8 md:px-28 gap-16">
      <Navbar />
      <Hero />
    </div>
  );
};
export default App;
