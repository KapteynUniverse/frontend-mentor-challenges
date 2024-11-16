import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Radio from "../components/Radio";
import { destinations } from "../data/data.json";
import ErrorPage from "../pages/ErrorPage";
import { motion } from "framer-motion";
import Cursor from "../components/CustomCursor";
import { vertical } from "../Utils/AnimationVariants";

function Destination() {
  const { planetName } = useParams();

  const selectedPlanet = planetName
    ? destinations.find((planet) => planet.name.toLowerCase() === planetName)
    : destinations[0];
  if (!selectedPlanet) {
    return <ErrorPage />;
  }

  const textVariants = vertical(50);

  const textVariants2 = vertical(100);

  const textVariants3 = vertical(200);

  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-mobile-bg-destination md:bg-tablet-bg-destination lg:bg-desktop-bg-destination text-white load">
      <Cursor />
      <Navigation />
      <main className="max-w-screen-2xl mx-auto min-h-full flex flex-col lg:flex-row items-center justify-evenly text-center px-generalInlineMT py-generalBlockMT md:px-generalInlineTD md:py-generalBlockTD">
        <div>
          <h1 className="uppercase text-pagesH1MT md:text-pagesH1TD lg:mb-24 lg:text-left font-BarlowCon">
            <b className=" opacity-30">01</b> Pick your destination
          </h1>
          <div className="flex flex-col items-center gap-6 mt-6 lg:gap-28 lg:flex-row lg:text-left">
            <motion.img
              key={selectedPlanet.name}
              src={
                planetName
                  ? selectedPlanet.images.webp
                  : "/assets/images/destination/image-moon.webp"
              }
              alt={
                planetName
                  ? `${selectedPlanet.images.alt}`
                  : "A close image of the Moon during waning gibbous phase"
              }
              loading="lazy"
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] planet"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            />
            <motion.div
              key={selectedPlanet.description}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Radio
                type="destination"
                legend="Pick your destination"
                page={destinations}
                currentPage="dest"
              />
              <hgroup>
                <motion.h2
                  className="uppercase text-destH2MT md:text-destH2TD font-Bellefair"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  {selectedPlanet.name}
                </motion.h2>
                <motion.p
                  className="text-preset9 py-6 max-w-prose text-blue-white border-b-2"
                  variants={textVariants2}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  {selectedPlanet.description}
                </motion.p>
                <motion.div
                  className="flex flex-col gap-6 mt-6 md:flex-row md:justify-between"
                  variants={textVariants3}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <dl>
                    <dt className="uppercase text-preset7 text-blue-white mb-3 font-BarlowCon">
                      Avg. Distance
                    </dt>
                    <dd className="uppercase text-preset6 font-Bellefair">
                      {selectedPlanet.distance}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="uppercase text-preset7 text-blue-white mb-3 font-BarlowCon">
                      Est. travel time
                    </dt>
                    <dd className="uppercase text-preset6 font-Bellefair">
                      {selectedPlanet.travel}
                    </dd>
                  </dl>
                </motion.div>
              </hgroup>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Destination;
