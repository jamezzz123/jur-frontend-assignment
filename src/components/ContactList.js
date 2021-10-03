import person from "../assets/Large.svg";

const ContactList = () => (
  <div className="row text-center">
    <div className="col">
      <div className="d-flex my-2">
        <img src={person} alt="" srcset="" />
        <div className="d-flex flex-column mx-2">
          <p className="mb-0 text-start">Amanda Nano</p>
          <p className="mb-0 small text-start text-black-50">
            Hey there! I’m using Jur chat
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactList;
