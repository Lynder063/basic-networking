import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Topbar(props) {
  return (
    <div>
      <div className="flex fixed top-0 left-0 flex-row grid-cols-7 px-2 py-4 w-full align-baseline bg-white shadow-md">
        <Link to="/" className="basis-1/12">
          <span className="h-2 material-symbols-outlined">
            arrow_back_ios_new
          </span>
        </Link>
        <div className="basis-11/12">
          {" "}
          <div className="flex flex-row align-baseline">
            <div className="text-gray-400 basis-1/4">{props.number}</div>
            <div className="text-center text-md basis-3/4">{props.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
