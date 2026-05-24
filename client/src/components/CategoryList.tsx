import { useState } from "react";

import {
  FaBrain,
  FaComments,
  FaEye,
  FaBullseye,
  FaUsers,
  FaBriefcase,
  FaHeart,
  FaMagic,
  FaArrowRight,
} from "react-icons/fa";

function CategoryList() {

  const [showAll, setShowAll] = useState(false);

  const categories = [
    {
      title: "Confidence Development",
      icon: <FaBullseye />,
    },

    {
      title: "Communication Skills",
      icon: <FaComments />,
    },

    {
      title: "Body Language",
      icon: <FaEye />,
    },

    {
      title: "Success & Productivity",
      icon: <FaBullseye />,
    },

    {
      title: "Mindset & Motivation",
      icon: <FaBrain />,
    },

    {
      title: "Social Skills",
      icon: <FaUsers />,
    },

    {
      title: "Grooming & Appearance",
      icon: <FaMagic />,
    },

    {
      title: "Emotional Intelligence",
      icon: <FaHeart />,
    },

    {
      title: "Career & Interview Prep",
      icon: <FaBriefcase />,
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
      px-6
      lg:px-10
      py-24
    ">

      {/* Top */}
      <div className="
        flex
        flex-col
        md:flex-row
        md:items-end
        md:justify-between
        gap-8
        mb-14
      ">

        <div>

          <p className="
            uppercase
            tracking-[5px]
            text-[#A78BFA]
            font-semibold
            text-sm
          ">
            Curriculum
          </p>

          <h2 className="
            text-4xl
            lg:text-5xl
            font-black
            mt-4
          ">
            Explore Growth Categories
          </h2>

          <p className="
            text-gray-400
            mt-5
            max-w-2xl
            leading-relaxed
          ">

            Practical systems to improve confidence,
            communication, mindset, personality,
            discipline, and social skills.

          </p>

        </div>

        {/* More Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="
            hidden
            md:flex
            items-center
            gap-3
            px-6
            py-3
            rounded-2xl
            bg-[#111827]
            border
            border-[#1f2937]
            hover:border-[#8B5CF6]
            hover:bg-[#151c2d]
            transition
            duration-300
            text-sm
            font-medium
          "
        >

          {showAll ? "Show Less" : "More Categories"}

          <FaArrowRight className="
            text-[#A78BFA]
          " />

        </button>

      </div>

      {/* Cards */}
      <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">

        {visibleCategories.map((item, index) => (

          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              bg-[#111827]
              border
              border-[#1f2937]
              rounded-[28px]
              p-6
              hover:-translate-y-2
              hover:border-[#8B5CF6]/40
              hover:shadow-xl
              hover:shadow-[#8B5CF6]/10
              transition-all
              duration-500
            "
          >

            {/* Glow */}
            <div className="
              absolute
              top-0
              right-0
              w-32
              h-32
              bg-[#8B5CF6]/10
              blur-3xl
              rounded-full
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
            "></div>

            <div className="relative z-10">

              {/* Icon */}
              <div className="
                w-14
                h-14
                rounded-2xl
                bg-[#8B5CF6]/10
                border
                border-[#8B5CF6]/20
                flex
                items-center
                justify-center
                text-[#A78BFA]
                text-xl
                group-hover:scale-110
                transition
                duration-300
              ">

                {item.icon}

              </div>

              {/* Title */}
              <h3 className="
                text-xl
                font-bold
                mt-6
                leading-snug
                group-hover:text-[#C4B5FD]
                transition
              ">
                {item.title}
              </h3>

              {/* Description */}
              <p className="
                text-gray-400
                text-sm
                leading-relaxed
                mt-4
              ">

                Structured personality development
                systems with practical exercises
                and actionable strategies.

              </p>

              {/* Bottom */}
              <div className="
                flex
                items-center
                justify-between
                mt-6
              ">

                <span className="
                  text-[#A78BFA]
                  text-sm
                  font-medium
                ">
                  20+ Guides
                </span>

                <span className="
                  text-gray-500
                  text-sm
                  group-hover:text-[#8B5CF6]
                  transition
                ">
                  Explore →
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Mobile Button */}
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
            gap-3
            px-6
            py-3
            rounded-2xl
            bg-[#111827]
            border
            border-[#1f2937]
            hover:border-[#8B5CF6]
            transition
            duration-300
          "
        >

          {showAll ? "Show Less" : "More Categories"}

          <FaArrowRight className="text-[#A78BFA]" />

        </button>

      </div>

    </section>
  );
}

export default CategoryList;