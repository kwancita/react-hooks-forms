import React from "react";

function Form(props) {

  return (
    <form>
      <input type="text" value={props.firstName} onClick= {props.handleFirstnameInput}/>
      <input type="text" value={props.lastName} onClick={props.handleLastnameInput}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
