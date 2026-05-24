import CategoryList from "../components/CategoryList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Categories() {

  return (
    <div className="min-h-screen bg-[#070B1A] text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#8B5CF6]/20 blur-[140px]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[6px] text-[#A78BFA] font-semibold text-sm">
              Self Growth
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
              Explore Premium
              <span className="text-[#8B5CF6]"> Categories</span>
            </h1>

            <p className="text-gray-400 text-lg mt-7 leading-relaxed">
              Discover powerful guides designed to improve your confidence,
              communication, mindset, productivity, career growth,
              emotional intelligence, and social life.
            </p>

          </div>

        </div>

      </section>

      {/* Categories Grid */}
      <CategoryList/>
      <Footer />

    </div>
  );
}

export default Categories;