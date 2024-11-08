import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({mailboxes}) => {
const { mailboxId } = useParams();
const selectedMailBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);


return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {selectedMailbox._id}</p>
      <p>Box Holder: {selectedMailbox.boxholder}</p>
      <p>Box Size: {selectedMailbox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;