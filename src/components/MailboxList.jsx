import React from "react";
import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailbox List</h2>
      <div>
        {mailboxes.map((mailbox) => (
          <div key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>
              <p>Box Number: {mailbox._id}</p>
              <p>Boxholder: {mailbox.boxholder}</p>
              <p>Box Size: {mailbox.boxSize}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;
