import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Radio from "../components/Radio";
import { crew } from "../data/data.json";
import ErrorPage from "../pages/ErrorPage";
import { motion } from "framer-motion";
import Cursor from "../components/CustomCursor";

function CrewPage() {
  const { crewName } = useParams();

  const selectedCrew = crewName
    ? crew.find((member) => member.name.toLowerCase() === crewName)
    : crew[0];

  if (!selectedCrew) {
    return <ErrorPage />;
  }

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-mobile-bg-crew md:bg-tablet-bg-crew lg:bg-desktop-bg-crew text-white load">
      <Cursor />
      <Navigation />
      <main className="max-w-screen-2xl mx-auto min-h-full px-generalInlineMT py-generalBlockMT md:px-generalInlineTD md:py-generalBlockTD">
        <h1 className="uppercase text-pagesH1MT mb-16  md:text-pagesH1TD lg:text-left font-BarlowCon">
          <b className="opacity-30">02</b> Meet your crew
        </h1>
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between"
          key={selectedCrew.role}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <div className="text-center lg:text-left">
            <div className="mb-8 ">
              <hgroup>
                <h2 className="uppercase text-crewTechH2MT opacity-30 md:text-crewTechH2TD font-Bellefair">
                  {selectedCrew.role}
                </h2>
                <h3 className="uppercase text-crewTechH3MT md:text-crewTechH3TD font-Bellefair">
                  {selectedCrew.name}
                </h3>
                <p className="text-preset9 text-blue-white mt-6 mb-12 lg:mb-24">
                  {selectedCrew.bio}
                </p>
              </hgroup>
              <Radio
                type="crew"
                legend="Meet the crew"
                page={crew}
                currentPage="crew"
              />
            </div>
          </div>
          <motion.img
            key={selectedCrew.name}
            src={
              crewName
                ? selectedCrew.images.webp
                : "/assets/images/crew/image-douglas-hurley.webp"
            }
            alt={
              crewName
                ? `${selectedCrew.images.alt}`
                : "Douglas Hurley fist bumping the air with a smile on his face"
            }
            className="w-[270px] h-[340px] md:w-[446px] md:h-[560px] lg:w-[540px] lg:h-[676px]"
            variants={{
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </main>
    </div>
  );
}

export default CrewPage;
