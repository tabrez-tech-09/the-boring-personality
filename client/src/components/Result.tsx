import { useEffect, useState } from "react";

function Result() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  /* BEFORE IMAGES */
  const beforeImages = [
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  ];

  /* AFTER IMAGES */
  const afterImages = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  ];

  /* IMAGE CHANGE */
  useEffect(() => {

    const interval = setInterval(() => {

      setAnimate(false);

      setTimeout(() => {

        setCurrentIndex((prev) =>
          prev === beforeImages.length - 1 ? 0 : prev + 1
        );

        setAnimate(true);

      }, 200);

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="
      relative
      py-28
      overflow-hidden
      bg-[#070B1A]
    ">

      {/* Glow */}
      <div className="
        absolute
        top-0
        right-0
        w-[500px]
        h-[500px]
        bg-[#8B5CF6]/15
        blur-[180px]
      "></div>

      {/* Extra Glow */}
      <div className="
        absolute
        bottom-0
        left-0
        w-[350px]
        h-[350px]
        bg-[#6366f1]/10
        blur-[140px]
      "></div>

      <div className="
        relative
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
      ">

        {/* TOP */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="
            inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            bg-[#111827]
            border
            border-[#1f2937]
            shadow-lg
          ">

            <span className="text-xl">✨</span>

            <p className="text-sm tracking-wide text-gray-300">
              Real Student Transformations
            </p>

          </div>

          <h2 className="
            text-4xl
            lg:text-6xl
            font-black
            mt-8
            leading-tight
          ">

            Your
            <span className="text-[#8B5CF6]">
              {" "}Glow Up
            </span>

            <span className="block">
              Starts Here
            </span>

          </h2>

          <p className="
            text-gray-400
            text-lg
            leading-relaxed
            mt-7
          ">

            Transform your confidence,
            communication, discipline,
            and mindset with structured
            personality development systems.

          </p>

        </div>

        {/* BEFORE AFTER */}
        <div className="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-12
          mt-20
        ">

          {/* BEFORE */}
          <div className="
            group
            w-full
            max-w-[320px]
          ">

            {/* Top */}
            <div className="
              flex
              items-center
              justify-between
              mb-5
            ">

              <h3 className="
                text-2xl
                font-black
              ">
                Before
              </h3>

              <span className="
                px-4
                py-2
                rounded-full
                bg-[#111827]
                border
                border-[#1f2937]
                text-gray-400
                text-sm
              ">
                Low Confidence
              </span>

            </div>

            {/* CARD */}
            <div className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-[#1f2937]
              bg-[#111827]
              shadow-xl
            ">

              {/* Overlay */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
                z-10
              "></div>

              {/* IMAGE */}
              <img
                src={beforeImages[currentIndex]}
                alt="before"
                className={`
                  w-full
                  aspect-[9/16]
                  object-cover
                  transition-all
                  duration-[1200ms]
                  ease-in-out
                  ${
                    animate
                      ? "translate-x-0 opacity-100 scale-100"
                      : "-translate-x-24 opacity-0 scale-110"
                  }
                `}
              />

              {/* Bottom Content */}
              <div className="
                absolute
                bottom-6
                left-6
                right-6
                z-20
              ">

                <h4 className="
                  text-2xl
                  font-bold
                ">
                  Lost & Unfocused
                </h4>

                <p className="
                  text-gray-300
                  mt-3
                  leading-relaxed
                ">

                  Weak confidence,
                  poor communication,
                  low discipline,
                  and no direction.

                </p>

              </div>

            </div>

          </div>

          {/* AFTER */}
          <div className="
            group
            relative
            w-full
            max-w-[320px]
          ">

            {/* Glow */}
            <div className="
              absolute
              inset-0
              bg-[#8B5CF6]/20
              blur-[120px]
              rounded-full
            "></div>

            <div className="relative">

              {/* Top */}
              <div className="
                flex
                items-center
                justify-between
                mb-5
              ">

                <h3 className="
                  text-2xl
                  font-black
                ">
                  After
                </h3>

                <span className="
                  px-4
                  py-2
                  rounded-full
                  bg-[#8B5CF6]/10
                  border
                  border-[#8B5CF6]/20
                  text-[#C4B5FD]
                  text-sm
                ">
                  Confident & Disciplined
                </span>

              </div>

              {/* CARD */}
              <div className="
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-[#8B5CF6]/20
                bg-[#111827]
                shadow-2xl
                shadow-[#8B5CF6]/10
              ">

                {/* Overlay */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                  z-10
                "></div>

                {/* IMAGE */}
                <img
                  src={afterImages[currentIndex]}
                  alt="after"
                  className={`
                    w-full
                    aspect-[9/16]
                    object-cover
                    transition-all
                    duration-[1200ms]
                    ease-in-out
                    ${
                      animate
                        ? "translate-x-0 opacity-100 scale-100"
                        : "translate-x-24 opacity-0 scale-110"
                    }
                  `}
                />

                {/* Bottom Content */}
                <div className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-20
                ">

                  <h4 className="
                    text-2xl
                    font-bold
                  ">
                    High Value Personality
                  </h4>

                  <p className="
                    text-gray-300
                    mt-3
                    leading-relaxed
                  ">

                    Attractive presence,
                    confidence, discipline,
                    strong mindset,
                    and social power.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Result;