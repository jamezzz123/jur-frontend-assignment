import PropTypes from "prop-types";

const Title = ({ title, subTitle }) => (
  <div className="row text-center my-4">
    <div className="col">
      <h1>{title}</h1>
      <p className="lead text-black-50">{subTitle}</p>
    </div>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default Title;
