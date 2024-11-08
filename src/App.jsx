// src/App.jsx
import { useState } from "react";
import NavBar from "./components/NavBar";
import Route, { Form } from "react-router-dom";
import Routes from "react-router-dom";
import MailboxList from "./components/MailboxList"
import MailboxForm from "./components/MailboxForm"
import MailboxDetails from "./components/MailboxDetails"

const App = () => {
  const [mailboxes, setmailboxes] = useState([]);

  const addBox = (FormData) => {
    const newMailbox = {
      _id: mailboxes.length + 1, 
      ...FormData,
    };
    setmailboxes([...mailboxes, newMailbox]);
  }
  return (
  <Router>
    <NavBar/>
    <Routes>
    <Route path='/' element={<main><h1>Post Office</h1></main>}/>
    <Route path='/mailboxes' element={<MailboxList />}/>
    <Route path='/new-mailbox' element={<MailboxForm />}/>
    <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />}/>
    </Routes>
  </Router>
  )
};

export default App;
