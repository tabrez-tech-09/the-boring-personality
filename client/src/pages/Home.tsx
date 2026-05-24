import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Result from "../components/Result";
import CategoryList from "../components/CategoryList";
import Hero from "../components/Hero";

function Home() {


  return (
    <div className="bg-[#070B1A] text-white overflow-hidden">

      <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* TRUST BAR */}
      <section className="border-y border-[#1f2937] bg-[#0B1120]">

        <div className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          py-6
          flex
          flex-wrap
          items-center
          justify-center
          gap-10
          text-gray-400
        ">

          <div className="flex items-center gap-3">
            <span className="text-[#8B5CF6] text-xl">✓</span>
            <p>Structured Personality Systems</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#8B5CF6] text-xl">✓</span>
            <p>Confidence Building Frameworks</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#8B5CF6] text-xl">✓</span>
            <p>Real Communication Practice</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#8B5CF6] text-xl">✓</span>
            <p>No Fake Motivation Content</p>
          </div>

        </div>

      </section>

      {/* CURRICULUM */}
      <CategoryList />

      <Result/>

      <Footer />

    </div>
  );
}

export default Home;