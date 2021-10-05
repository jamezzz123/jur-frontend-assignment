import Title from "../components/Title";
import ContactList from "../components/ContactList";
import BaseButton from "../components/BaseButton";
import axios from "../plugins/axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const SetConversationTitle = () => {
  let currentUser = useSelector((state) => state.user);
  let selectedContacts = useSelector((state) => state.contactList);
  const [title, setTitle] = useState("");
  const [buttonTitle, setButtonTitle] = useState("Start Conversation");

  const handlerCreateConversation = async () => {
    try {
      setButtonTitle("Loading...");
      console.log({
        title: title,
        contact_ids: 2,
      });
      let data = await axios.post(
        "/conversations",
        {
          title: title,
          contact_ids: selectedContacts.map((items) => items.id),
        },
        {
          headers: {
            user_id: currentUser.id,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-center">
      <Title
        title={`Welcome ${currentUser?.name}`}
        subTitle={`Give title to start a new conversation with ${selectedContacts.length} participants`}
      />

      {selectedContacts &&
        selectedContacts.map((items) => (
          <ContactList key={items.id} name={items.name} selected={true} />
        ))}
      <div className="my-5 d-flex">
        <input
          type="type"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control rounded-0 form-control-lg border-dark mx-2"
        />
        <BaseButton
          text={buttonTitle}
          clickHandler={() => handlerCreateConversation()}
          className="mx-2"
        />
      </div>
    </div>
  );
};

export default SetConversationTitle;
