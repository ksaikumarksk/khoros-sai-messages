import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export const MessagesDetails = (props) => {
  const { details } = props;
  const { id, body, subject, metrics } = details;
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <li className='li'>
            <p>id: {id}</p>
            <p>subject: {subject}</p>
            <p dangerouslySetInnerHTML={{ __html: body }}></p>
            <p>Views: {metrics.views}</p>
          </li>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='DialogOverlay' />
          <Dialog.Content className='DialogContent'>
            <Dialog.Title className='DialogTitle'>id : {id}</Dialog.Title>
            <Dialog.Description className='DialogDescription'>
              subject : {subject}
            </Dialog.Description>
            <Dialog.Description
              className='DialogDescription'
              dangerouslySetInnerHTML={{ __html: body }}></Dialog.Description>
            <Dialog.Description className='DialogDescription'>
              views : {metrics.views}
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
