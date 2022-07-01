import React from "react";
import "./Inputform.css";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";


const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "black",
  marginTop: "20px",

  '&:hover': {
    backgroundColor: "white",
    color: "black",
    border: "2px solid black"
  
  },
}));

export const Inputform = () => {

  const navigate = useNavigate();

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleCompany = (e) => {
    setCompany(e.target.value)
  }

  const handleSubmit = async() => {
    const payload = {
      Name: name,
      Email: email, 
      Company: company
    }

    let res = await fetch("http://localhost:3000/CompanyForm", {
      method: "POST",
      body: JSON.stringify(payload),
      headers:{
        "Content-type": "application/json"
      }
    })

    navigate("/SuccessForm")

    let data  = await res.json()
    console.log(data) 

  }

  return (
    <>
      <section id="section-1">
        <div className="inputField">
          <label htmlFor=""> Full Name </label>
          <input type="text" value={name} onChange={handleName} placeholder="Type your answer here..." />
        </div>
        <a href="#section-2">
          <div className="scroll-down"></div>
        </a>
      </section>

      <section id="section-2">
        <div className="inputField">
          <label htmlFor="">Email</label>
          <p>So that we can get in touch with you.</p>
          <input type="email" value={email} onChange={handleEmail} placeholder="name@example.com" />
        </div>
        <a href="#section-3">
          <div className="scroll-down"></div>
          <a href="#section-1">
          <div className="scroll-up"></div>
          </a>
        </a>
      </section>

      <section id="section-3">
        <div className="inputField">
          <label htmlFor=""> Company</label>
          <input type="text" value={company} onChange={handleCompany} placeholder="Type your answer here..."  />
          <ColorButton vaiant="contained" onClick={handleSubmit } > Submit </ColorButton>
        </div>
        <a href="#section-4">
          <div className="scroll-down"></div>
          <a href="#section-2">
          <div className="scroll-up"></div>
          </a>
        </a>
      </section>
    </>
  );
};
