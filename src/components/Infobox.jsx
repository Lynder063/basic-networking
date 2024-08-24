import PropTypes from "prop-types";

function Infobox({ children }) {
  return (
    <div className="p-4 m-4 rounded-lg shadow-md">
      <div>{children}</div>
    </div>
  );
}

export default Infobox;
