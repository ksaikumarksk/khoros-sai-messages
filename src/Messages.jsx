// import { useState, useEffect } from "react";

import axios from "axios";

import { MessagesDetails } from "./MessagesDetails";
import { useQuery, gql } from "@apollo/client";

const GET_MESSAGES = gql`
  query getMessages {
    messages {
      type
      size
      items {
        id
        subject
        body
        metrics {
          views
        }
      }
    }
  }
`;

export const Messages = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  // const [messages, setMessages] = useState([]);

  return (
    <div className='containe'>
      <h1>messages</h1>
      <ul className='ul'>
        {data?.messages?.items?.map((user) => (
          <MessagesDetails key={user.id} details={user} />
        ))}
      </ul>
    </div>
  );
};
