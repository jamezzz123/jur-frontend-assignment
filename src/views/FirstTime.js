import BaseButton from "../components/BaseButton";
import ContactList from "../components/ContactList";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../plugins/axios";

const FirstTime = () => {
  let [contactList, setContactList] = useState([]);
  let [selectedUser, setSelectedUser] = useState();

  const fetchContactLists = async () => {
    let { data } = await axios.get("./contacts");
    setContactList(data);
  };
  useEffect(() => {
    fetchContactLists();
  }, []);

  return (
    <>
      <Title title="Let's us know who you area" subTitle="" />
      {contactList &&
        contactList.map((items) => (
          <ContactList
            key={items.id}
            name={items.name}
            selected={selectedUser === items.id}
            clickHandler={() => setSelectedUser(items.id)}
          />
        ))}
      {selectedUser != null ? (
        <div className="row text-end">
          <div className="col">
            <Link to={`/select-user/${selectedUser}`}>
              <BaseButton />
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FirstTime;
