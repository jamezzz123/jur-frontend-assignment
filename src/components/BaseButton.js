const BaseButton = ({ clickHandler, text = "Continue" }) => {
  return (
    <button
      onClick={clickHandler}
      style={buttonStyle}
      className="btn btn-primary"
    >
      {text}
    </button>
  );
};

let buttonStyle = {
  color: "black",
  backgroundColor: "#fff",
  borderColor: "black",
  boxShadow: "2px 2px",
};

export default BaseButton;
