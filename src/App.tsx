import CallToAction from "./components/sections/CallToAction";
import Collections from "./components/sections/Collections";
import CreateSell from "./components/sections/CreateSell";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <main className="relative">
      <div className="container relative overflow-x-hidden">
        <Header />
        <Hero />
        <Collections />
        <CreateSell />
        <CallToAction />
        <Footer />
        {/* Vertical Line*/}
        <span className="absolute top-0 left-[63px] max-lg:left-[31px] max-sm:left-[19px] w-[1px] h-full bg-neutral-50 z-[2]"></span>
      </div>
      {/* Horizontal Top Line */}
      <span className="absolute top-[88px] max-lg:top-[64px] left-0 h-[1px] w-full bg-neutral-50 z-[2]"></span>
    </main>
  );
}

export default App;
