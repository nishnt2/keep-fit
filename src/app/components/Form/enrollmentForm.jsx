import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import "./form.css";
import PLANS from '../../constants/plans'

import Back from "../Back/Back";


const EnrollmentForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const members = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const handleDateChange = (e)=>{
    const date = e.target.value;
    console.log(typeof date == 'string')
    const newDate = new Date(date)
    setStartDate(newDate);
  } 



  const setEndDate = ()=>{
    let result = new Date(startDate);
    result.setDate(result.getDate() + 28);
    return result.toISOString().substring(0,10);
    
  }
  return (
    <div className="wrapper">
      <Back />
      <form className="container">
        <h1>Enrollment Form</h1>
        <div className="column">
          <h3>Select Member</h3>
          <Select
            isSearchable={true}
            unstyled={true}
            className="react-select-container"
            classNamePrefix="react-select"
            options={members}
          />

          

          <h3>Select Plan:</h3>
          <Select
            
            unstyled={true}
            className="react-select-container"
            classNamePrefix="react-select"
            options={PLANS}
          />
          {
            console.log(startDate)
          }
          <div className="row">
            <div className="column">
              <h3>Start Date</h3>
              <div class="row" >
                <input type="date" id="startDate" onChange={handleDateChange} defaultValue={startDate.toISOString().substring(0,10)}/>
              </div>
            </div>
            <div className="column">
              <h3>End Date</h3>
              <div class="row">
                <input disabled={true}  type="date" value={setEndDate()}/>
              </div>
            </div>
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnrollmentForm;
