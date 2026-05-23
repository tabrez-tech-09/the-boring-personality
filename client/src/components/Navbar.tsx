import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium tracking-wide transition-all duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:bg-[#8B5CF6] after:transition-all after:duration-300
    ${
      isActive
        ? "text-[#8B5CF6] after:w-full"
        : "text-[#F8FAFC] after:w-0 hover:text-[#A78BFA] hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#070B1A]/90 border-b border-[#111827] shadow-lg">
      
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#8B5CF6] to-[#6366f1] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/30 group-hover:scale-110 transition duration-300">
              <span className="text-white font-bold text-lg">
                T
              </span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-white tracking-wide">
                TBP
              </h1>

              <p className="text-[11px] text-gray-400 -mt-1 tracking-widest uppercase">
                The Boring Personality
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/categories" className={navLinkClass}>
              Categories
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>


          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

          

            {/* Login */}
            <NavLink to="/login">
              {({ isActive }) => (
                <button
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#7C3AED] text-white shadow-lg shadow-[#8B5CF6]/40"
                      : "bg-linear-to-r from-[#8B5CF6] to-[#6366f1] text-white hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/30"
                  }`}
                >
                  Login
                </button>
              )}
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-full bg-[#111827] border border-[#1f2937] flex items-center justify-center text-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${
            menuOpen
              ? "max-h-125 opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 mt-2 shadow-2xl">

            <ul className="flex flex-col gap-6">

              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/categories"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Categories
              </NavLink>

              <NavLink
                to="/blogs"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>

            </ul>

            <div className="mt-8 flex flex-col gap-4">

              <button className="w-full py-3 rounded-2xl bg-[#1f2937] text-white font-medium hover:bg-[#374151] transition duration-300">
                Search
              </button>

              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                {({ isActive }) => (
                  <button
                    className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#7C3AED] text-white"
                        : "bg-linear-to-r from-[#8B5CF6] to-[#6366f1] text-white"
                    }`}
                  >
                    Login
                  </button>
                )}
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;