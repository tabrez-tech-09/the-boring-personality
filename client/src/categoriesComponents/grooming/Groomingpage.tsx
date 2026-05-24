import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

function GroomingPage() {

  const navigate = useNavigate();

  const groomingCards = [
    {
      title: "Skin Care",
      icon: "✨",
      desc: "Clear, glowing and healthy skin routines.",
      guides: "6 Guides",
      path: "/grooming/skin-care",
    },

    {
      title: "Hair Care",
      icon: "💇",
      desc: "Healthy hair, styling and maintenance tips.",
      guides: "4 Guides",
      path: "/grooming/hair-care",
    },

    {
      title: "Beard Care",
      icon: "🧔",
      desc: "Sharp beard styling and grooming habits.",
      guides: "5 Guides",
      path: "/grooming/beard-care",
    },

    {
      title: "Oral Care",
      icon: "😁",
      desc: "Fresh breath and confident smile care.",
      guides: "4 Guides",
      path: "/grooming/oral-care",
    },
  ];

  return (

    <div className="
      min-h-screen
      bg-[#050816]
      text-white
    ">

      <Navbar />

      {/* MAIN */}
      <div className="
        max-w-6xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        pt-28
        pb-16
      ">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/categories")}
          className="
            flex
            items-center
            gap-2
            text-gray-400
            hover:text-white
            transition-all
            duration-300
            text-sm
            mb-8
          "
        >

          <FaArrowLeft size={11} />

          All Categories

        </button>

        {/* HERO */}
        <div className="
          flex
          items-start
          gap-4
          mb-10
        ">

          {/* ICON */}
          <div className="
            w-14
            h-14
            sm:w-16
            sm:h-16
            rounded-2xl
            bg-[#111827]
            border
            border-[#1f2937]
            flex
            items-center
            justify-center
            text-2xl
            sm:text-3xl
            shrink-0
          ">

            ✨

          </div>

          {/* TEXT */}
          <div>

            <h1 className="
              text-3xl
              sm:text-5xl
              font-black
              leading-tight
            ">

              Grooming &
              <span className="text-[#8B5CF6]">
                {" "}Appearance
              </span>

            </h1>

            <p className="
              text-gray-400
              text-sm
              sm:text-base
              mt-3
              max-w-2xl
              leading-relaxed
            ">

              Improve your appearance with skincare,
              beard care, hygiene and self-care habits.

            </p>

            <p className="
              mt-4
              text-xs
              sm:text-sm
              text-[#A78BFA]
              font-semibold
            ">

              22 Premium Guides • 5 Categories

            </p>

          </div>

        </div>

        {/* GRID */}
        <div className="
          grid
          sm:grid-cols-2
          gap-4
        ">

          {groomingCards.map((item, index) => (

            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#1f2937]
                bg-[#0B1120]
                p-4
                sm:p-5
                hover:border-[#8B5CF6]/40
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-[#8B5CF6]/10
                transition-all
                duration-300
                cursor-pointer
              "
            >

              {/* GLOW */}
              <div className="
                absolute
                top-0
                right-0
                w-20
                h-20
                bg-[#8B5CF6]/10
                blur-3xl
                rounded-full
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
              "></div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* TOP */}
                <div className="
                  flex
                  items-center
                  justify-between
                ">

                  {/* ICON */}
                  <div className="
                    w-11
                    h-11
                    rounded-xl
                    bg-[#8B5CF6]/10
                    border
                    border-[#8B5CF6]/20
                    flex
                    items-center
                    justify-center
                    text-lg
                  ">

                    {item.icon}

                  </div>

                  {/* ARROW */}
                  <div className="
                    w-8
                    h-8
                    rounded-lg
                    bg-[#111827]
                    border
                    border-[#1f2937]
                    flex
                    items-center
                    justify-center
                    text-[#A78BFA]
                    group-hover:bg-[#8B5CF6]
                    group-hover:text-white
                    transition-all
                    duration-300
                  ">

                    <FaArrowRight size={10} />

                  </div>

                </div>

                {/* TITLE */}
                <h2 className="
                  text-lg
                  sm:text-xl
                  font-bold
                  mt-4
                  group-hover:text-[#C4B5FD]
                  transition
                ">

                  {item.title}

                </h2>

                {/* DESC */}
                <p className="
                  text-gray-400
                  text-sm
                  leading-relaxed
                  mt-2
                ">

                  {item.desc}

                </p>

                {/* FOOTER */}
                <div className="
                  mt-5
                  flex
                  items-center
                  justify-between
                ">

                  <p className="
                    text-xs
                    sm:text-sm
                    text-[#A78BFA]
                    font-semibold
                  ">

                    {item.guides}

                  </p>

                  <p className="
                    text-[10px]
                    sm:text-[11px]
                    text-gray-500
                  ">

                    Premium Lessons

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default GroomingPage;