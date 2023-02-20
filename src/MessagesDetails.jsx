import React, { useEffect } from "react";
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

export const MessagesDetails = ({ setModel, id }) => {
  // const { details } = props;
  // const { id } = details;
  console.log(id, "model");

  // console.log(" id:", { id });
  // useEffect(() => {
  //   if (modelOpen) {

  //   }
  // }, [ modelOpen ] );

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
        {/* <Dialog.Trigger asChild className='trigger'>
          <button>View More..</button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='DialogOverlay' />
          <Dialog.Content className='DialogContent'> */}
        <div className='content'>
          <fieldset className='Fieldset'>
            <label className='label' htmlFor='Id'>
              Id :
            </label>
            <input className='Input' id='Id' defaultValue={result?.id} />
          </fieldset>
          <br />
          <fieldset className='Fieldset'>
            <label className='label' htmlFor='subject'>
              Subjest :
            </label>
            <input
              className='Input'
              id='subject'
              defaultValue={result?.subject}
            />
          </fieldset>
          <br />
          <fieldset className='Fieldset'>
            <label className='label' htmlFor='body'>
              Body :
            </label>
            <input className='Input' id='Id' defaultValue={result?.body} />
          </fieldset>
          <br />
          <fieldset className='Fieldset'>
            <label className='label' htmlFor='views'>
              Views :
            </label>
            <input
              className='Input'
              id='views'
              defaultValue={result?.metrics.views}
            />
          </fieldset>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}>
            <Dialog.Close asChild>
              <button
                className='button'
                onClick={() => setModel({ open: false })}>
                Close
              </button>
            </Dialog.Close>
          </div>
        </div>
        {/* </Dialog.Content>
        </Dialog.Portal> */}
      </Dialog.Root>
    </div>
  );
};
