import { useState, useEffect } from "react";

import axios from "axios";

import { MessagesDetails } from "./MessagesDetails";
export const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://khoros-server-vercel-bikhz4mt9-koushil-mankali.vercel.app/api/messages"
      )
      .then((res) => {
        console.log(res.data[0].data.items);
        setMessages(res.data[0].data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("messages data:", messages);
  return (
    <div>
      <h1>messages</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Subject</th>
          <th>Body</th>
          <th>views</th>
        </tr>
        {messages &&
          messages.map((user) => (
            <MessagesDetails key={user.id} details={user} />
          ))}
      </table>
    </div>
  );
};
