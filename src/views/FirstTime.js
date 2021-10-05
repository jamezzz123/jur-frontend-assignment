import BaseButton from "../components/BaseButton";
import ContactList from "../components/ContactList";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../plugins/axios";

const FirstTime = () => {
  let [contactList, setContactList] = useState([]);
  let [selectedUser, setSelectedUser] = useState();
  // let counter = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedUserFunc = () => {
    //call conversation endpoints
    // check if selected user has existing conversation
    // if not, create new conversation
    // if so, go to conversations

    dispatch({
      type: "SET_USER",
      payload: selectedUser,
    });
    history.push("/select-user");
  };

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
            selected={selectedUser === items}
            clickHandler={() => setSelectedUser(items)}
          />
        ))}
      {selectedUser != null ? (
        <div className="row text-end">
          <div className="col">
            <BaseButton clickHandler={() => selectedUserFunc()} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FirstTime;
