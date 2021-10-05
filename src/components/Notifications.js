import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import axios from "../plugins/axios";
import { useSelector } from "react-redux";

const Notification = () => {
  let [notification, setNotification] = useState("");
  let [conversation, setConversation] = useState("");
  let currentUser = useSelector((state) => state.user);
  let [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let socket = new WebSocket("ws://34.122.252.114:3000/cable");
    socket.onopen = function () {
      socket.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({
            channel: "NotificationsChannel",
          }),
        })
      );
    };

    socket.onmessage = function (e) {
      let data = JSON.parse(e.data);
      if (!data.hasOwnProperty("type")) {
        console.log(data.message);
        if (data.message.contact_ids.includes(currentUser.id)) {
          axios
            .get(`/conversations/${data.message.conversation_id}`, {
              headers: {
                user_id: currentUser.id,
              },
            })
            .then((e) => {
              setConversation(e.data);
              setNotification(data.message);

              setShowNotification(true);

              setTimeout(() => {
                setShowNotification(false);
              }, 7000);
            });
        }
      }
    };
  }, []);

  return (
    <>
      {showNotification ? (
        <div
          className="row position-absolute align-items-end"
          style={{ zIndex: 1000, top: 0, left: 0, width: "100%" }}
        >
          <div className="col-4 border">
            <ContactList
              style={{ width: "100%" }}
              user
              name={notification.sender_name}
              userName={conversation.title}
              message={notification.content}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Notification;
