import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useQuery, gql } from "@apollo/client";

const GET_MESSAGE = gql`
  query getmessage($id: String!) {
    message(id: $id) {
      id
      subject
      body
      metrics {
        views
      }
    }
  }
`;

export const MessagesDetails = (props) => {
  const { details } = props;
  const { id, body, subject, metrics } = details;

  console.log(" id:", { id });
  const { data } = useQuery(GET_MESSAGE, {
    variables: {
      id: id,
    },
  });

  const result = data?.message;
  console.log(" data:", result);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <li className='li'>
            <p>Id : {id}</p>
            <p>Subject : {subject}</p>

            <p>Views : {metrics.views}</p>
          </li>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='DialogOverlay' />
          <Dialog.Content className='DialogContent'>
            <Dialog.Title className='DialogTitle'>
              Id : {result?.id}
            </Dialog.Title>
            <Dialog.Description>Subject : {result?.subject}</Dialog.Description>
            <Dialog.Description className='Description'>
              Body :{result?.body}
            </Dialog.Description>
            <Dialog.Description>
              Views : {result?.metrics.views}
            </Dialog.Description>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}>
              <Dialog.Close asChild>
                <button className='Button green'>Close</button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className='IconButton' aria-label='Close'>
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
