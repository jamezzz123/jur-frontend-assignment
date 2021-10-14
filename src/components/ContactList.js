import person from "../assets/Large.svg";
import PropTypes from "prop-types";

const ContactList = ({
  name,
  message = "Hey there! I’m using Jur chat",
  user = false,
  userName = "",
  clickHandler,
  selected,
}) => {
  return (
    <div className="row text-center" onClick={clickHandler}>
      <div className="col">
        <div className="d-flex my-2">
          <img
            src={person}
            alt=""
            style={{ backgroundColor: `${selected ? "#BCE3FF" : ""}` }}
          />
          <div className="d-flex flex-column mx-2">
            <p className="mb-0 text-start">{name}</p>
            {user ? <p className="mb-0 small text-start">{userName}</p> : null}
            <p className="mb-0 small text-start text-black-50">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ContactList;
