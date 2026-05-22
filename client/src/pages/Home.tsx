import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        
        <p className="text-gray-400 uppercase tracking-[0.3em] mb-4 text-sm">
          Welcome To
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          The Boring <br />
          Personality
        </h1>

        <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          A modern web experience crafted with React, Vite, Tailwind CSS,
          and smooth UI interactions. Clean design. Minimal vibes.
          Powerful frontend.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300">
            Explore
          </button>

          <button className="border border-gray-700 px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
            Projects
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        
        <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-gray-600 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Fast
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Built using Vite for lightning-fast performance and smooth developer experience.
          </p>
        </div>

        <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-gray-600 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Modern
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Clean layouts, responsive design, and beautiful user interfaces with Tailwind CSS.
          </p>
        </div>

        <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-gray-600 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Creative
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Designed to feel minimal yet interactive with smooth transitions and animations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;