import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Topbar(props) {
  return (
    <div>
      <div className="flex fixed top-0 left-0 flex-row grid-cols-7 px-2 py-4 w-full align-baseline bg-white shadow-md">
        <Link to="/" className="basis-2/12">
          <span className="h-2 material-symbols-outlined">
            arrow_back_ios_new
          </span>
        </Link>
        <div className="text-gray-400 basis-2/12">{props.number}</div>
        <div className="justify-start text-md basis-8/12">{props.title}</div>
      </div>
    </div>
  );
}

export default Topbar;
