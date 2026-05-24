import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium tracking-wide transition-all duration-300
    ${
      isActive
        ? "text-[#8B5CF6]"
        : "text-[#F8FAFC] hover:text-[#A78BFA]"
    }`;

  return (

    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-2xl
        bg-[#070B1A]/80
        border-b
        border-[#111827]
      "
    >

      {/* Top Glow */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-125
        h-50
        bg-[#8B5CF6]/10
        blur-[120px]
      "></div>

      <nav className="
        relative
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
      ">

        <div className="
          h-20
          flex
          items-center
          justify-between
        ">

          {/* LOGO */}
          <NavLink
            to="/"
            className="
              flex
              items-center
              gap-4
              group
            "
          >

            <div className="
              relative
              w-11
              h-11
              rounded-2xl
              bg-linear-to-br
              from-[#8B5CF6]
              to-[#6366f1]
              flex
              items-center
              justify-center
              shadow-xl
              shadow-[#8B5CF6]/30
              group-hover:scale-110
              transition
              duration-300
            ">

              <span className="
                text-white
                font-black
                text-lg
              ">
                T
              </span>

            </div>

            <div>

              <h1 className="
                text-xl
                font-black
                text-white
                tracking-wide
              ">
                TBP
              </h1>

              <p className="
                text-[10px]
                text-gray-400
                tracking-[3px]
                uppercase
                mt-0.5
              ">
                The Boring Personality
              </p>

            </div>

          </NavLink>

          {/* DESKTOP LINKS */}
          <ul className="
            hidden
            md:flex
            items-center
            gap-10
          ">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/categories" className={navLinkClass}>
              Categories
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

          </ul>

          {/* RIGHT SIDE */}
          <div className="
            hidden
            md:flex
            items-center
            gap-5
          ">

            {/* CTA BUTTON */}
           <Link to="/login"> <button
              className="
                group
                relative
                overflow-hidden
                px-6
                py-3
                rounded-2xl
                bg-linear-to-r
                from-[#8B5CF6]
                to-[#6366f1]
                text-white
                font-semibold
                text-sm
                shadow-xl
                shadow-[#8B5CF6]/20
                hover:scale-105
                transition
                duration-300
              "
            >

              <span className="
                flex
                items-center
                gap-3
                relative
                z-10
              ">

                Start Growth

                <FaArrowRight
                  className="
                    group-hover:translate-x-1
                    transition
                    duration-300
                  "
                />

              </span>

            </button>
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              w-11
              h-11
              rounded-2xl
              bg-[#111827]
              border
              border-[#1f2937]
              flex
              items-center
              justify-center
              text-white
            "
          >

            {menuOpen ? (
              <FaTimes size={18} />
            ) : (
              <FaBars size={18} />
            )}

          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            ${
              menuOpen
                ? "max-h-125 opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="
            bg-[#111827]
            border
            border-[#1f2937]
            rounded-[30px]
            p-6
            mt-3
            shadow-2xl
          ">

            <ul className="
              flex
              flex-col
              gap-6
            ">

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

            {/* Mobile CTA */}
            <Link to="/signup">
              <button
                className="
                  w-full
                  mt-8
                  py-3
                  rounded-2xl
                bg-linear-to-r
                from-[#8B5CF6]
                to-[#6366f1]
                text-white
                font-semibold
                shadow-lg
                shadow-[#8B5CF6]/20
              "
            >

              Start Growth

            </button>
            </Link>
          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;