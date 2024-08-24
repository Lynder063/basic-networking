import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Title(props) {
  return (
    <div>
      <Link
        to={props.link}
        className="flex flex-row p-4 m-4 bg-white rounded-lg shadow-md"
      >
        <div className="text-xl text-gray-400 basis-3/12">{props.number}</div>
        <div className="text-lg font-semibold basis-9/12">{props.title}</div>
      </Link>
    </div>
  );
}

Title.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
};

export default Title;
