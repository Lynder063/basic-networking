import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Topbar(props) {
  return (
    <div className="flex fixed top-0 left-0 flex-row flex-grow justify-evenly px-2 py-4 w-full text-lg align-baseline bg-white shadow-md">
      <Link to="/" className="basis-1/4">
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </Link>
      <div className="grid grid-cols-4 text-center">
        {" "}
        <div className="col-span-1 font-semibold text-center text-gray-400">
          {props.number}
        </div>
        <div className="col-span-3 font-semibold text-center basis-auto">
          {props.title}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
