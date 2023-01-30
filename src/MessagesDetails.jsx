import React from "react";

export const MessagesDetails = (props) => {
  const { details } = props;
  const { id, body, subject, metrics } = details;
  return (
    <li className='li'>
      <p>id: {id}</p>
      <p>subject: {subject}</p>
      <p dangerouslySetInnerHTML={{ __html: body }}></p>
      <p>Views: {metrics.views}</p>
    </li>
  );
};
