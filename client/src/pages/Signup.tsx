import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

function Signup() {

  return (

    <div className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#070B1A]
      text-white
    ">

      <Navbar />

      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-105
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="
        absolute
        inset-0
        bg-[#070B1A]/85
        backdrop-blur-[6px]
      "></div>

      {/* GLOW */}
      <div className="
        absolute
        top-[-120px]
        left-1/2
        -translate-x-1/2
        w-[420px]
        h-[420px]
        bg-[#8B5CF6]/20
        blur-[160px]
      "></div>

      {/* CONTENT */}
      <div className="
        relative
        z-10
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-20
      ">

        {/* CARD */}
        <div className="
          w-full
          max-w-[370px]
          rounded-[24px]
          border
          border-[#ffffff10]
          bg-[#111827]/90
          backdrop-blur-2xl
          shadow-2xl
          shadow-[#8B5CF6]/10
          p-5
        ">

          {/* ICON */}
          <div className="text-center">

            <div className="
              w-14
              h-14
              mx-auto
              rounded-full
              bg-[#8B5CF6]/10
              border
              border-[#8B5CF6]/20
              flex
              items-center
              justify-center
            ">

              <FaUser className="
                text-xl
                text-[#A78BFA]
              " />

            </div>

            {/* HEADING */}
            <h1 className="
              text-2xl
              font-black
              mt-4
            ">
              Create Account
            </h1>

            <p className="
              text-gray-400
              mt-2
              text-xs
              leading-relaxed
              max-w-xs
              mx-auto
            ">

              Improve confidence,
              mindset, communication,
              and personality.

            </p>

          </div>

          {/* FORM */}
          <form className="mt-6 space-y-4">

            {/* NAME */}
            <div>

              <label className="
                text-xs
                text-gray-300
                block
                mb-2
              ">
                Full Name
              </label>

              <div className="relative">

                <FaUser className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                  text-xs
                " />

                <input
                  type="text"
                  placeholder="John Doe"
                  className="
                    w-full
                    h-11
                    rounded-lg
                    bg-[#0B1120]
                    border
                    border-[#1f2937]
                    pl-10
                    pr-3
                    outline-none
                    focus:border-[#8B5CF6]
                    transition
                    duration-300
                    placeholder:text-gray-500
                    text-sm
                  "
                />

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label className="
                text-xs
                text-gray-300
                block
                mb-2
              ">
                Email Address
              </label>

              <div className="relative">

                <FaEnvelope className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                  text-xs
                " />

                <input
                  type="email"
                  placeholder="name@example.com"
                  className="
                    w-full
                    h-11
                    rounded-lg
                    bg-[#0B1120]
                    border
                    border-[#1f2937]
                    pl-10
                    pr-3
                    outline-none
                    focus:border-[#8B5CF6]
                    transition
                    duration-300
                    placeholder:text-gray-500
                    text-sm
                  "
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="
                text-xs
                text-gray-300
                block
                mb-2
              ">
                Password
              </label>

              <div className="relative">

                <FaLock className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                  text-xs
                " />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="
                    w-full
                    h-11
                    rounded-lg
                    bg-[#0B1120]
                    border
                    border-[#1f2937]
                    pl-10
                    pr-3
                    outline-none
                    focus:border-[#8B5CF6]
                    transition
                    duration-300
                    placeholder:text-gray-500
                    text-sm
                  "
                />

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                group
                w-full
                h-11
                rounded-lg
                mt-1
                bg-gradient-to-r
                from-[#7C3AED]
                to-[#6366f1]
                font-semibold
                text-sm
                shadow-lg
                shadow-[#8B5CF6]/20
                hover:scale-[1.02]
                transition
                duration-300
                flex
                items-center
                justify-center
                gap-2
              "
            >

              SIGN UP

              <FaArrowRight
                className="
                  group-hover:translate-x-1
                  transition
                  duration-300
                  text-[10px]
                "
              />

            </button>

          </form>

          {/* LOGIN */}
          <p className="
            text-center
            text-gray-400
            mt-5
            text-xs
          ">

            Already have an account?

            <Link
              to="/login"
              className="
                text-[#A78BFA]
                ml-1
                font-semibold
                hover:text-[#C4B5FD]
                transition
              "
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;