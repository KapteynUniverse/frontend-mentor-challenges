import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";

const Header = () => {
  return (
    <header className="p-4 shadow-md">
      <div className="limit-vw flex justify-between flex-wrap gap-4 ">
        <h1 className="text-2xl font-extrabold hover-element">
          <Link href="/">Where in the world?</Link>
        </h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
