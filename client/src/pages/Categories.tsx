import Navbar from "../components/Navbar";

function Categories() {
  const categories = [
    {
      title: "Technology",
      description:
        "Explore modern web development, AI, software engineering, and latest tech trends.",
      posts: "120+ Articles",
      icon: "💻",
    },
    {
      title: "Programming",
      description:
        "Learn Java, React, Spring Boot, DSA, backend development, and coding concepts.",
      posts: "95+ Articles",
      icon: "⚡",
    },
    {
      title: "UI / UX Design",
      description:
        "Discover beautiful interfaces, responsive layouts, animations, and design systems.",
      posts: "80+ Articles",
      icon: "🎨",
    },
    {
      title: "Productivity",
      description:
        "Boost your workflow, coding efficiency, learning habits, and personal growth.",
      posts: "60+ Articles",
      icon: "🚀",
    },
    {
      title: "Career",
      description:
        "Interview prep, resume building, developer roadmaps, and placement guidance.",
      posts: "40+ Articles",
      icon: "📈",
    },
    {
      title: "Community",
      description:
        "Connect with creators, developers, designers, and passionate learners worldwide.",
      posts: "30+ Articles",
      icon: "🌍",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070B1A] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#8B5CF6] uppercase tracking-[6px] font-semibold">
            Explore Topics
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold mt-5 leading-tight">
            Browse Our
            <span className="text-[#8B5CF6]"> Categories</span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed">
            Discover articles, tutorials, and resources across
            multiple domains including development, design,
            productivity, and technology.
          </p>

        </div>

      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-[#111827] border border-[#1f2937] rounded-3xl p-8 hover:-translate-y-2 transition duration-500 hover:border-[#8B5CF6]/40 shadow-lg hover:shadow-[#8B5CF6]/20"
            >

              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6366f1] flex items-center justify-center text-3xl shadow-lg shadow-[#8B5CF6]/20">
                {category.icon}
              </div>

              {/* Content */}
              <div className="mt-8 relative z-10">

                <h2 className="text-2xl font-bold group-hover:text-[#A78BFA] transition duration-300">
                  {category.title}
                </h2>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center justify-between mt-8">

                  <span className="text-[#8B5CF6] font-medium">
                    {category.posts}
                  </span>

                  <button className="px-5 py-2 rounded-full bg-[#1f2937] hover:bg-[#8B5CF6] transition duration-300 text-sm font-medium">
                    Explore
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">

        <div className="relative overflow-hidden bg-gradient-to-r from-[#8B5CF6] to-[#6366f1] rounded-3xl p-10 lg:p-16 text-center shadow-2xl">

          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative z-10">

            <h2 className="text-4xl lg:text-5xl font-bold">
              Start Exploring Today
            </h2>

            <p className="text-lg text-gray-100 mt-6 max-w-2xl mx-auto leading-relaxed">
              Join our growing community and discover high-quality
              content designed for developers, creators, and learners.
            </p>

            <button className="mt-10 px-8 py-4 rounded-2xl bg-white text-[#070B1A] font-semibold hover:scale-105 transition duration-300 shadow-lg">
              Explore Articles
            </button>

          </div>

        </div>

      </section>
    </div>
  );
}

export default Categories;