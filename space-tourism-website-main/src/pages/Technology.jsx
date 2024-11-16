import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { technology } from "../data/data.json";
import Radio from "../components/Radio";
import ErrorPage from "../pages/ErrorPage";
import { motion } from "framer-motion";
import Cursor from "../components/CustomCursor";

function Technology() {
  const { technologyName } = useParams();

  const selectedTechnology = technologyName
    ? technology.find((item) => item.name.toLowerCase() === technologyName)
    : technology[0];

  if (!selectedTechnology) {
    return <ErrorPage />;
  }

  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-mobile-bg-technology md:bg-tablet-bg-technology lg:bg-desktop-bg-technology text-white load">
      <Cursor />
      <Navigation />
      <main className="max-w-screen-2xl mx-auto min-h-full ">
        <h1 className="uppercase text-center text-pagesH1MT md:text-pagesH1TD mb-8 lg:text-left px-generalInlineMT py-generalBlockMT md:px-generalInlineTD md:py-generalBlockTD font-BarlowCon">
          <b className="opacity-30">03</b> Space launch 101
        </h1>
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-evenly lg:pl-techContentTDL"
          key={selectedTechnology.name}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center lg:flex-row-reverse"
            key={selectedTechnology.name}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
          >
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={
                  technologyName
                    ? selectedTechnology.images.portrait
                    : "/assets/images/technology/image-launch-vehicle-portrait.jpg"
                }
              />
              <motion.img
                src={
                  technologyName
                    ? selectedTechnology.images.landscape
                    : "/assets/images/technology/image-launch-vehicle-landscape.jpg"
                }
                alt={
                  technologyName
                    ? `${selectedTechnology.images.alt}`
                    : "Photo of the WEB-X carrier rocket during liftoff"
                }
                loading="lazy"
                className="w-[768px] max-w-h-[310px] lg:max-w-[608px] lg:max-w-h-[600px] lg:flex-1"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
              />
            </picture>
            <div className="text-center pt-8 pb-techTextB px-generalBlockTD lg:text-left lg:flex lg:gap-16 lg:flex-1 lg:pl-0">
              <Radio
                type="technology"
                legend="Learn the terminology"
                page={technology}
                currentPage="tech"
              />
              <hgroup>
                <motion.h2
                  className="uppercase text-crewTechH2MT opacity-30 md:text-crewTechH2TD font-Bellefair"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.8 }}
                >
                  The terminology
                </motion.h2>
                <motion.h3
                  className="uppercase my-4 lg:mb-6 text-crewTechH3MT md:text-crewTechH3TD font-Bellefair"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.8 }}
                >
                  {selectedTechnology.name}
                </motion.h3>
                <motion.p
                  className="text-preset9 text-blue-white"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.8 }}
                >
                  {selectedTechnology.description}
                </motion.p>
              </hgroup>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default Technology;
