import React from "react";

export const MessagesDetails = (props) => {
  const { details } = props;
  const { id, body, subject, metrics } = details;
  return (
    <tr>
      <td>{id}</td>
      <td>{subject}</td>
      <td>{body}</td>
      <td>{metrics.views}</td>
    </tr>
  );
};
