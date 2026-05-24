import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaBrain,
  FaComments,
  FaBullseye,
  FaUsers,
  FaBriefcase,
  FaMagic,
  FaArrowRight,
  FaTshirt,
  FaDumbbell,
  FaFire,
} from "react-icons/fa";

function CategoryList() {

  const navigate = useNavigate();

  const [showAll, setShowAll] = useState(false);

  const categories = [
    {
      title: "Dressing Style",
      icon: <FaTshirt />,
      desc: "Learn premium styling and attractive outfit combinations.",
      guides: "35+ Guides",
      path: "/dressing-style",
    },

    {
      title: "Grooming & Appearance",
      icon: <FaMagic />,
      desc: "Upgrade hairstyle, skincare, beard, and appearance.",
      guides: "25+ Guides",
      path: "/grooming",
    },

    {
      title: "Fitness",
      icon: <FaDumbbell />,
      desc: "Build an aesthetic body, confidence, and discipline.",
      guides: "40+ Guides",
      path: "/fitness",
    },

    {
      title: "Confidence Development",
      icon: <FaBullseye />,
      desc: "Remove fear, insecurity, and build real confidence.",
      guides: "30+ Guides",
      path: "/confidence",
    },

    {
      title: "Communication Skills",
      icon: <FaComments />,
      desc: "Master conversations, speaking, and social impact.",
      guides: "28+ Guides",
      path: "/communication",
    },

    {
      title: "Success & Productivity",
      icon: <FaFire />,
      desc: "Create focus, habits, routines, and success systems.",
      guides: "22+ Guides",
      path: "/productivity",
    },

    {
      title: "Mindset & Motivation",
      icon: <FaBrain />,
      desc: "Develop emotional control and strong mindset.",
      guides: "26+ Guides",
      path: "/mindset",
    },

    {
      title: "Social Skills",
      icon: <FaUsers />,
      desc: "Learn charisma, networking, and attraction psychology.",
      guides: "32+ Guides",
      path: "/social-skills",
    },

    {
      title: "Career & Interview Prep",
      icon: <FaBriefcase />,
      desc: "Improve resume, interviews, and career confidence.",
      guides: "18+ Guides",
      path: "/career",
    },
  ];

  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 6);

  return (

    <section className="
      relative
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-10
      py-20
      overflow-hidden
    ">

      {/* GLOW */}
      <div className="
        absolute
        top-0
        right-0
        w-[300px]
        h-[300px]
        bg-[#8B5CF6]/10
        blur-[120px]
      "></div>

      {/* TOP */}
      <div className="
        relative
        flex
        flex-col
        md:flex-row
        md:items-end
        md:justify-between
        gap-6
        mb-12
      ">

        <div>

          {/* BADGE */}
          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-[#111827]
            border
            border-[#1f2937]
            mb-5
          ">

            <div className="
              w-2
              h-2
              rounded-full
              bg-[#8B5CF6]
              animate-pulse
            "></div>

            <p className="
              text-xs
              text-gray-300
            ">
              Self Improvement Curriculum
            </p>

          </div>

          {/* TITLE */}
          <h2 className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-black
            leading-tight
          ">

            Upgrade Your
            <span className="text-[#8B5CF6]">
              {" "}Personality
            </span>

          </h2>

          {/* DESC */}
          <p className="
            text-gray-400
            mt-4
            max-w-2xl
            leading-relaxed
            text-sm
            sm:text-base
          ">

            Practical systems for confidence,
            communication, fitness, mindset,
            and social growth.

          </p>

        </div>

        {/* DESKTOP BUTTON */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="
            hidden
            md:flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-[#111827]
            border
            border-[#1f2937]
            hover:border-[#8B5CF6]
            transition-all
            duration-300
            text-sm
          "
        >

          {showAll ? "Show Less" : "Explore More"}

          <FaArrowRight className="text-[#A78BFA]" />

        </button>

      </div>

      {/* CARDS */}
      <div className="
        relative
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
      ">

        {visibleCategories.map((item, index) => (

          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#1f2937]
              bg-[#111827]
              p-5
              hover:-translate-y-2
              hover:border-[#8B5CF6]/40
              hover:shadow-xl
              hover:shadow-[#8B5CF6]/10
              transition-all
              duration-500
              cursor-pointer
            "
          >

            {/* GLOW */}
            <div className="
              absolute
              top-0
              right-0
              w-28
              h-28
              bg-[#8B5CF6]/10
              blur-3xl
              rounded-full
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
            "></div>

            <div className="relative z-10">

              {/* ICON */}
              <div className="
                w-12
                h-12
                rounded-xl
                bg-[#8B5CF6]/10
                border
                border-[#8B5CF6]/20
                flex
                items-center
                justify-center
                text-[#A78BFA]
                text-lg
                group-hover:scale-110
                transition
                duration-300
              ">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3 className="
                text-lg
                sm:text-xl
                font-bold
                mt-5
                leading-snug
                group-hover:text-[#C4B5FD]
                transition
              ">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="
                text-gray-400
                text-sm
                leading-relaxed
                mt-3
                min-h-[65px]
              ">

                {item.desc}

              </p>

              {/* BOTTOM */}
              <div className="
                flex
                items-center
                justify-between
                mt-6
              ">

                <div>

                  <p className="
                    text-[#A78BFA]
                    text-sm
                    font-semibold
                  ">
                    {item.guides}
                  </p>

                  <p className="
                    text-gray-500
                    text-[11px]
                    mt-1
                  ">
                    Premium Lessons
                  </p>

                </div>

                {/* ARROW */}
                <div className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#0B1120]
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

                  <FaArrowRight size={13} />

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* MOBILE BUTTON */}
      <div className="
        flex
        justify-center
        mt-10
        md:hidden
      ">

        <button
          onClick={() => setShowAll(!showAll)}
          className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-[#111827]
            border
            border-[#1f2937]
            hover:border-[#8B5CF6]
            transition
            duration-300
            text-sm
          "
        >

          {showAll ? "Show Less" : "Explore More"}

          <FaArrowRight className="text-[#A78BFA]" />

        </button>

      </div>

    </section>
  );
}

export default CategoryList;