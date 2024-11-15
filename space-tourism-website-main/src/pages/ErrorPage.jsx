import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main className="bg-404-page bg-cover bg-center bg-no-repeat w-full min-h-screen flex justify-center items-center">
      <Link to="/">
        <h1 className="uppercase text-preset9 text-center bg-blue-black text-white w-40 h-40 rounded-full flex items-center justify-center md:w-68 md:h-68 explore font-Bellefair">
          The page you are looking for has crossed the event horizon
        </h1>
      </Link>
    </main>
  );
}

export default ErrorPage;
