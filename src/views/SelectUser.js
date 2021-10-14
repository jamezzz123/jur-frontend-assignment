import BaseButton from "../components/BaseButton";
import ContactList from "../components/ContactList";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../plugins/axios";

const SelectUser = () => {
  let [contactList, setContactList] = useState([]);
  let [selectedUser, setSelectedUser] = useState([]);
  let currentUser = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let history = useHistory();

  const fetchContactListsWithOutSelected = async () => {
    let { data } = await axios.get("./contacts");
    let results = data.filter((item) => item.id !== parseInt(currentUser.id));
    setContactList(results);
  };

  const handleSelectedContact = () => {
    dispatch({ type: "SET_CONTACTS", payload: selectedUser });
    history.push("/create-conversation");
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
            selected={selectedUser.includes(items)}
            clickHandler={() => setSelectedUser([...selectedUser, items])}
          />
        ))}
      {selectedUser.length > 0 ? (
        <div className="row text-end">
          <div className="col">
            <BaseButton clickHandler={() => handleSelectedContact()} />
            <BaseButton clickHandler={() => history.push("/conversations")} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SelectUser;
