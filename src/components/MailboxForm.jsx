import React, {useState} from "react";

const MailboxForm = ({addBox}) => {
    const [boxSize, setBoxSize] = useState('');
    const[boxHolder,setBoxHolder] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    addBox({boxSize,boxHolder});
    setBoxSize('');
    setBoxHolder('');  
};
return (
    <form onSubmit={handleSubmit}>
        <label>
            Box Size: 
            <input>
                value={boxSize}
                onChange={(e)=>
                setboxSize(e.target.value)}
            </input>
        </label>
        <label>
            Box Holder:
        <input>
        value = {boxHolder}
        onChange = {(e) => setboxHolder(e.target.value)}
        </input>
        </label>
        <label>
        <button type ="submit">Add Mailbox</button>
        </label>
    </form>
)
}

export default MailboxForm;