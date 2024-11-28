import {  Container } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./Components/DatesCount";
import DatesList from "./Components/DatesList";
import DatesAction from "./Components/DatesAction";
import React, { useEffect, useState } from "react";

function App() {
  const [personData , setPersonData] = useState(person);
  const onDelete = ()=>{
    setPersonData([])
  }
  const onView = ()=>{
    setPersonData(person)
  }

  useEffect(()=>{
    setPersonData([])
  } , [])
  return (
    <div className="font color-body">
      <Container className="py-4">

        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} ViewData={onView} />

      </Container>
    </div>
  );
}

export default App;
