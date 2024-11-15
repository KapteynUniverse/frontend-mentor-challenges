import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Cursor from "../components/CustomCursor";

function Home() {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-mobile-bg-home md:bg-tablet-bg-home lg:bg-desktop-bg-home text-white load relative">
      <Cursor />
      <Navigation />
      <main className="max-w-screen-2xl mx-auto min-h-full flex flex-col lg:flex-row items-center gap-30 py-homeBlockMT px-generalInlineMT md:px-generalInlineTD md:gap-16 lg:gap-64 ">
        <div className="lg:text-left">
          <p className="uppercase text-preset6 text-blue-white font-BarlowCon">
            So, you want to travel to
          </p>
          <hgroup>
            <h1 className="uppercase my-6 text-preset1 font-Bellefair">
              Space
            </h1>
            <p className="text-preset-9 max-w-prose text-blue-white">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </hgroup>
        </div>
        <Link to="*">
          <p className="uppercase text-preset4 bg-white text-blue-black w-36 h-36 rounded-full flex items-center justify-center md:w-68 md:h-68 explore font-Bellefair">
            Explore
          </p>
        </Link>
      </main>
    </div>
  );
}

export default Home;
