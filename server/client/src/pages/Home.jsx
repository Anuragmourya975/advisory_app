import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center py-11">
      <Link to="/dashboard" className="w-96 h-64 border border-gray-300 mx-2 text-center text-gray-700 rounded-lg shadow-md bg-gray-200 flex flex-col justify-center hover:text-white hover:bg-sky-400">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight ">
          Admin
        </h5>
      </Link>
      <Link to="/farmer" className="w-96 h-64 border border-gray-300 mx-2 text-center text-gray-700 rounded-lg shadow-md bg-gray-200 flex flex-col justify-center hover:text-white hover:bg-sky-400">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight ">
          Farmer
        </h5>
      </Link>
    </div>
  );
};

export default Home;
