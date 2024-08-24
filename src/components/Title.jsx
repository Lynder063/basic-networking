import PropTypes from "prop-types";

function Title(props) {
  return (
    <div className="grid grid-cols-4 p-4 m-4 bg-white rounded-lg shadow-md">
      <div className="text-xl text-gray-400">{props.number}</div>
      <div className="col-span-3 text-lg font-semibold">{props.title}</div>
    </div>
  );
}

Title.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
};

export default Title;
