import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#070B1A] border-t border-[#111827] overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-75 bg-[#7C3AED] blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* Top */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">

              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-[#8B5CF6] to-[#6366f1] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/30">
                <span className="text-white font-bold text-lg">
                  T
                </span>
              </div>

              <div>
                <h1 className="text-2xl font-bold text-white">
                  TBP
                </h1>

                <p className="text-xs tracking-widest uppercase text-gray-400">
                  The Boring Personality
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Building futuristic web experiences with modern UI,
              smooth interactions, and premium frontend design.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#111827] border border-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#7C3AED] hover:scale-110 transition duration-300"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#111827] border border-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#7C3AED] hover:scale-110 transition duration-300"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#111827] border border-[#1f2937] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#7C3AED] hover:scale-110 transition duration-300"
              >
                <FaInstagram size={18} />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-6">
              Navigation
            </h2>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-[#A78BFA] cursor-pointer transition duration-300">
                Home
              </li>

              <li className="hover:text-[#A78BFA] cursor-pointer transition duration-300">
                Categories
              </li>

              <li className="hover:text-[#A78BFA] cursor-pointer transition duration-300">
                Blogs
              </li>

              <li className="hover:text-[#A78BFA] cursor-pointer transition duration-300">
                About
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-6">
              Resources
            </h2>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-[#A78BFA] cursor-pointer transition duration-300">
                Documentation
              </li>

              <li className="hover:text-[#A78BFA] cursor-pointer transition duration-300">
                UI Components
              </li>

              <li className="hover:text-[#A78BFA] cursor-pointer transition duration-300">
                Design System
              </li>

              <li className="hover:text-[#A78BFA] cursor-pointer transition duration-300">
                Changelog
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-6">
              Stay Updated
            </h2>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Subscribe for latest UI inspirations and frontend updates.
            </p>

            <div className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#111827] border border-[#1f2937] rounded-2xl px-5 py-3 text-white outline-none focus:border-[#7C3AED] transition duration-300"
              />

              <button className="bg-linear-to-r from-[#8B5CF6] to-[#6366f1] hover:scale-[1.02] text-white py-3 rounded-2xl font-semibold shadow-lg shadow-[#8B5CF6]/20 transition duration-300">
                Subscribe
              </button>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-[#111827] flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 The Boring Personality. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">

            <span className="hover:text-white cursor-pointer transition duration-300">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition duration-300">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;