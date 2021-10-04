import BaseButton from "../components/BaseButton";
import ContactList from "../components/ContactList";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../plugins/axios";

const SelectUser = () => {
  let [contactList, setContactList] = useState([]);
  let [currentUser, setCurrentUser] = useState({});
  let [selectedUser, setSelectedUser] = useState([]);
  let { user } = useParams();

  const fetchContactListsWithOutSelected = async () => {
    let { data } = await axios.get("./contacts");
    let foundUser = data.find((item) => item.id === parseInt(user));
    setCurrentUser(foundUser);
    let results = data.filter((item) => item.id !== parseInt(user));
    setContactList(results);
  };
  useEffect(() => {
    fetchContactListsWithOutSelected();
  }, []);
  return (
    <>
      <Title
        title={`Welcome ${currentUser?.name}`}
        subTitle="You don’t have any conversations"
      />

      <Title title="Select contacts to message" />
      {contactList &&
        contactList.map((items) => (
          <ContactList
            key={items.id}
            name={items.name}
            selected={selectedUser.includes(items.id)}
            clickHandler={() => setSelectedUser([...selectedUser, items.id])}
          />
        ))}
      {selectedUser.length > 0 ? (
        <div className="row text-end">
          <div className="col">
            <BaseButton />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SelectUser;
