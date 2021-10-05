import Title from "../components/Title";
import ContactList from "../components/ContactList";
import BaseButton from "../components/BaseButton";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../plugins/axios";

const Conversation = () => {
  let [conversations, setConversations] = useState([]);
  let currentUser = useSelector((state) => state.user);
  let history = useHistory();

  const handlerGetContactList = async () => {
    console.log("get contact list");
    try {
      let { data } = await axios.get("/conversations", {
        headers: {
          user_id: currentUser.id,
        },
      });
      setConversations(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlerGetContactList();
  }, []);

  return (
    <>
      <Title title="Conversations" subTitle="" />

      {conversations &&
        conversations.map((items) => (
          <ContactList
            user
            key={items.id}
            name={items.title}
            clickHandler={() => history.push(`/conversation/${items.id}`)}
            userName={
              items.last_message.length > 0
                ? items.last_message[0].sender_name
                : ""
            }
            message={
              items.last_message.length > 0 ? items.last_message[0].content : ""
            }
          />
        ))}

      <div className="row text-end">
        <div className="col">
          <BaseButton
            text="New Conversation"
            clickHandler={() => history.push("/select-user")}
            className="mx-2"
          />
        </div>
      </div>
    </>
  );
};

export default Conversation;
