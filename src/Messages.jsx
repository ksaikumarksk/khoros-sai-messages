import { MessagesDetails } from "./MessagesDetails";
import { useQuery, gql } from "@apollo/client";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const GET_MESSAGES = gql`
  query getMessages {
    messages {
      type
      size
      items {
        id
        subject

        metrics {
          views
        }
      }
    }
  }
`;

const Messages = () => {
  const [model, setModel] = useState({
    open: false,
    id: null,
  });

  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log("data:", data?.messages?.items);

  return (
    <div className='containe'>
      <h1>messages</h1>
      <ul className='ul'>
        {data?.messages?.items?.map((user) => (
          <>
            <li className='li'>
              <p>Id : {user.id}</p>
              <p>Subject : {user.subject}</p>

              <p>Views : {user.metrics.views}</p>

              {/* <MessagesDetails
                modelOpen={model.open}
                key={user.id}
                id={user.id}
              /> */}

              <button
                className='button'
                onClick={() =>
                  setModel({
                    open: true,
                    id: user.id,
                  })
                }>
                View More...
              </button>
            </li>
          </>
        ))}
      </ul>
      <div>
        {console.log("id numbers:", model.id)}
        {model.open ? (
          <MessagesDetails key={model.id} id={model.id} setModel={setModel} />
        ) : null}
        {console.log("open:", model.open)}
      </div>
    </div>
  );
};
export default Messages;
