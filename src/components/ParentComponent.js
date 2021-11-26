import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent(){
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstnameInput(event){
    setFirstName(event.target.value)
    //console.log(handleFirstnameInput)
  }
  function handleLastnameInput(event){
    setLastName(event.target.value)
    //console.log(handleLastnameInput)
  }
  
  return(
      <div>
        <Form
        firstName = {firstName}
        lastName = {lastName}
        handleFirstnameInput = {handleFirstnameInput}
        handleLastnameInput = {handleLastnameInput}
        />
        <DisplayData firstName={firstName} lastName={lastName} />
      </div>
  )
  
}

export default ParentComponent;