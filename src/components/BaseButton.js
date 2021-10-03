const BaseButton = () => {
  return (
    <button style={buttonStyle} className="btn btn-primary">
      Continue
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
