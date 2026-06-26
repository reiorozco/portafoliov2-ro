import PropTypes from "prop-types";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      {sub && (
        <div className="hero-badge">
          <p>{sub}</p>
        </div>
      )}

      <div>
        <h2 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

TitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string,
};

export default TitleHeader;
