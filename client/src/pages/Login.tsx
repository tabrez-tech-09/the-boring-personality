import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

function Login() {

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
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1800&auto=format&fit=crop')",
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

          {/* TOP */}
          <div className="text-center">

            {/* ICON */}
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

              <FaLock className="
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
              Welcome Back
            </h1>

            <p className="
              text-gray-400
              mt-2
              text-xs
              leading-relaxed
              max-w-xs
              mx-auto
            ">

              Login and continue your
              personality transformation journey.

            </p>

          </div>

          {/* FORM */}
          <form className="mt-6 space-y-4">

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

              <div className="
                flex
                items-center
                justify-between
                mb-2
              ">

                <label className="
                  text-xs
                  text-gray-300
                ">
                  Password
                </label>

                <button
                  type="button"
                  className="
                    text-[11px]
                    text-[#A78BFA]
                    hover:text-[#C4B5FD]
                    transition
                  "
                >
                  Forgot?
                </button>

              </div>

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

            {/* REMEMBER */}
            <div className="
              flex
              items-center
              gap-2
            ">

              <input
                type="checkbox"
                className="
                  accent-[#8B5CF6]
                  w-4
                  h-4
                "
              />

              <p className="
                text-xs
                text-gray-400
              ">
                Remember me
              </p>

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

              LOGIN

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

          {/* SIGNUP */}
          <p className="
            text-center
            text-gray-400
            mt-5
            text-xs
          ">

            Don’t have an account?

            <Link
              to="/signup"
              className="
                text-[#A78BFA]
                ml-1
                font-semibold
                hover:text-[#C4B5FD]
                transition
              "
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;