import { FaPlay, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

function Hero() {
  return (

    <section className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-[#070B1A]
      pt-28
    ">

      {/* Background */}
      <div className="absolute inset-0 bg-[#070B1A]"></div>

      {/* Main Glow */}
      <div className="
        absolute
        -top-37.5
        left-1/2
        -translate-x-1/2
        w-175
        h-175
        bg-[#8B5CF6]/20
        blur-[180px]
      "></div>

      {/* Extra Glow */}
      <div className="
        absolute
        bottom-0
        right-0
        w-87.5
        h-87.5
        bg-[#6366f1]/10
        blur-[140px]
      "></div>

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        grid
        lg:grid-cols-2
        gap-16
        items-center
      ">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="
            inline-flex
            items-center
            gap-3
            bg-[#111827]
            border
            border-[#1f2937]
            px-5
            py-3
            rounded-full
            shadow-lg
          ">

            <span className="
              w-2
              h-2
              rounded-full
              bg-[#8B5CF6]
              animate-pulse
            "></span>

            <p className="
              text-sm
              text-gray-300
              tracking-wide
            ">
              Self Improvement • Confidence • Communication
            </p>

          </div>

          {/* Heading */}
          <h1 className="
            text-5xl
            lg:text-7xl
            font-black
            leading-[1.05]
            mt-8
          ">

            Become A
            <span className="block text-[#8B5CF6]">
              High Value
            </span>

            <span className="block">
              Personality.
            </span>

          </h1>

          {/* Description */}
          <p className="
            text-gray-400
            text-lg
            leading-relaxed
            mt-8
            max-w-2xl
          ">

            Stop consuming random motivation content.
            Learn confidence, communication,
            discipline, grooming, body language,
            and mindset through practical
            transformation systems.

          </p>

          {/* Buttons */}
          <div className="
            flex
            flex-wrap
            items-center
            gap-5
            mt-10
          ">

            <Link to="/signup">
              <button className="
                px-8
                py-4
                rounded-2xl
                bg-linear-to-r
                from-[#8B5CF6]
              to-[#6366f1]
              hover:scale-105
              transition
              duration-300
              font-semibold
              shadow-2xl
              shadow-[#8B5CF6]/30
            ">

              Start Transformation

            </button>
            </Link>

            <button className="
              flex
              items-center
              gap-3
              px-7
              py-4
              rounded-2xl
              border
              border-[#1f2937]
              bg-[#111827]
              hover:border-[#8B5CF6]
              hover:bg-[#151c2d]
              transition
              duration-300
            ">

              <FaPlay className="text-[#A78BFA]" />

              Watch Preview

            </button>

          </div>

          {/* Trust Row */}
          <div className="
            flex
            flex-wrap
            items-center
            gap-8
            mt-14
          ">

            <div>
              <h2 className="
                text-4xl
                font-black
                text-[#8B5CF6]
              ">
                10K+
              </h2>

              <p className="text-gray-400 mt-2">
                Students
              </p>
            </div>

            <div>
              <h2 className="
                text-4xl
                font-black
                text-[#8B5CF6]
              ">
                200+
              </h2>

              <p className="text-gray-400 mt-2">
                Practical Guides
              </p>
            </div>

            <div>
              <h2 className="
                text-4xl
                font-black
                text-[#8B5CF6]
              ">
                95%
              </h2>

              <p className="text-gray-400 mt-2">
                Positive Growth
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="
            absolute
            inset-0
            bg-[#8B5CF6]/20
            blur-[120px]
            rounded-full
          "></div>

          {/* Main Card */}
          <div className="
            relative
            w-full
            max-w-107.5
            overflow-hidden
            rounded-[36px]
            border
            border-[#1f2937]
            bg-[#111827]
            shadow-2xl
            shadow-[#8B5CF6]/20
          ">

            {/* Overlay */}
            <div className="
              absolute
              inset-0
              bg-linear-to-t
              from-black/60
              via-transparent
              to-transparent
              z-10
            "></div>

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
              alt="personality"
              className="
                w-full
                h-130
                object-cover
              "
            />

            {/* Floating Card */}
            <div className="
              absolute
              bottom-6
              left-6
              right-6
              z-20
              bg-[#0B1120]/90
              backdrop-blur-xl
              border
              border-[#1f2937]
              rounded-2xl
              p-5
            ">

              <div className="
                flex
                items-center
                justify-between
              ">

                <div>

                  <p className="
                    text-sm
                    text-gray-400
                  ">
                    Personality Growth
                  </p>

                  <h3 className="
                    text-xl
                    font-bold
                    mt-2
                  ">
                    Real Transformation
                  </h3>

                </div>

                <div className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-[#8B5CF6]/10
                  border
                  border-[#8B5CF6]/20
                  flex
                  items-center
                  justify-center
                  text-[#A78BFA]
                ">

                  <FaArrowRight />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;