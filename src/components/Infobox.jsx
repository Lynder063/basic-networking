import PropTypes from "prop-types";

function Infobox({ children }) {
  return (
    <div className="flex flex-row justify-center">
      <div
        className="p-4 m-4 text-center bg-white rounded-lg 
                      w-full           /* Default: full width */
                      sm:w-3/4         /* Small screens and up: 75% width */
                      md:w-2/3         /* Medium screens and up: 66.67% width */
                      lg:w-1/2         /* Large screens and up: 50% width */
                      xl:w-1/3         /* Extra large screens and up: 33.33% width */
                      "
      >
        {children}
      </div>
    </div>
  );
}

Infobox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Infobox;
