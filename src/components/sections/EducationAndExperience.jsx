import user_info from "../../data/user_info.js";
import { FaBuildingUser } from "react-icons/fa6";

function EducationAndExperience() {
  return (
    <section
      id="education-and-experience"
      className="mt-20 mx-4 lg:mx-20 flex flex-col md:flex-row gap-4 md:gap-2"
    >
      {/* =========== EXPERIENCE =========== */}
      <div className="w-full">
        {/* =========== EXPERIENCE TITLE =========== */}
        <h4 className="text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <FaBuildingUser className="text-2xl text-red-800 dark:text-red-500" />
          Experience
        </h4>

        <div className="md:h-[auto] md:overflow-y-scroll scroll-smooth">
          {/* =========== EXPERIENCE LIST =========== */}
          {user_info.experience.map((exp, index) => {
            return (
              <div key={index}>
                <div className="ps-2 my-2 first:mt-0 !mt-2">
                  <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                    {exp.duration}
                  </h3>
                </div>

                <div className="flex gap-x-3 relative group rounded-lg">
                  <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                    </div>
                  </div>

                  <div className="grow p-2 pb-8">
                    {/* =========== COMPANY NAME =========== */}
                    <h3 className="flex items-center gap-x-2 text-xl font-semibold text-zinc-800 dark:text-white">
                      <img className="w-9 rounded-full" src={exp.image} alt="Company Logo" />
                      <div className="leading-5">
                        {exp.company}
                        {/* =========== POSITION =========== */}
                        <p className="font-normal text-sm text-zinc-600 dark:text-zinc-400">
                          {exp.position}
                        </p>
                      </div>
                    </h3>

                    <ul className="list-disc list-inside text-zinc-800 dark:text-white mt-2">
                      {/* =========== DESCRIPTION LIST =========== */}
                      {exp.descriptions.map((desc, index) => {
                        return (
                          <li className="flex space-x-3" key={index}>
                            <svg
                              className="flex-shrink-0 size-4 mt-0.5 text-red-800 dark:text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                              {desc}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EducationAndExperience;
