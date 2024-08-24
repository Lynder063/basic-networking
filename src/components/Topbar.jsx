import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Topbar(props) {
  return (
    <div>
      <div className="grid fixed top-0 left-0 grid-cols-7 px-2 py-4 w-full bg-white shadow-md">
        <Link to="/">
          <span className="col-span-1 text-lg text-center material-symbols-outlined">
            arrow_back_ios_new
          </span>
        </Link>
        <div className="col-span-5 col-start-3 text-lg">
          <div className="grid grid-cols-7">
            <div className="col-span-1 text-gray-400">{props.number}</div>
            <div className="col-span-6">{props.title}</div>
          </div>
        </div>
      </div>

      <div className="grid top-0 left-0 grid-cols-7 px-2 py-4 w-full bg-white shadow-md">
        <Link to="/">
          <span className="col-span-1 text-lg text-center material-symbols-outlined">
            arrow_back_ios_new
          </span>
        </Link>
        <div className="col-span-5 col-start-3 text-lg">
          <div className="grid grid-cols-7">
            <div className="col-span-1 text-gray-400">{props.number}</div>
            <div className="col-span-6">{props.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
