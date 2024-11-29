import { useState } from "react";

function NameForm( {onSubmit} ){
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = (e) =>{
    e.preventDefault();// hindrar sidan från att laddas om
    onSubmit(name, message);
  }

  return (<form onSubmit={handelSubmit}>
    <input type="text" placeholder="namn" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="text" placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
    <button type="submit">send</button>
  </form>)

}



export default NameForm;