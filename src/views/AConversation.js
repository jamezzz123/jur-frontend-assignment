import Title from "../components/Title";
import ContactList from "../components/ContactList";
import BaseButton from "../components/BaseButton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../plugins/axios";

const AConversation = () => {
  let currentUser = useSelector((state) => state.user);
  const [text, setText] = useState(null);
  const { id } = useParams();
  let [conversation, setConversations] = useState([]);

  const handleGetConversation = async () => {
    try {
      let { data } = await axios.get(`/conversations/${id}`, {
        headers: {
          user_id: currentUser.id,
        },
      });
      setConversations(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = async () => {
    try {
      let { data } = await axios.post(
        `/conversations/${conversation.id}/messages`,
        {
          content: text,
        },
        {
          headers: {
            user_id: currentUser.id,
          },
        }
      );
      console.log(data);
      setText("");
      await handleGetConversation();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetConversation();
  }, []);

  return (
    <>
      <Title title={conversation.title} subTitle="" />

      {conversation.recent_messages &&
        conversation.recent_messages.map((items) => (
          <ContactList
            user
            key={items.id}
            name={items.content}
            message={items.sender_name}
          />
        ))}

      <div className="my-5 d-flex">
        <input
          type="type"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control rounded-0 form-control-lg border-dark mx-2"
        />
        <BaseButton
          text="Send"
          clickHandler={() => handleSendMessage()}
          className="mx-2"
        />
      </div>
    </>
  );
};

export default AConversation;
