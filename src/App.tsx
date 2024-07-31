import CallToAction from "./components/sections/CallToAction";
import Collections from "./components/sections/Collections";
import CreateSell from "./components/sections/CreateSell";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Collections />
      <CreateSell />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default App;
