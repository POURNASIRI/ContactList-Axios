import React, { useState } from 'react'
import './AddNewContact.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

var phonenumber = /^\d{11}$/;

export default function AddNewContact() {

        const [input, setInput] = useState({
          name:"",
          number:""
        })

        const [isValid, setIsValid] = useState(false)

        const navigate = useNavigate()

        const handleChangename = (e)=>{
         setInput({...input, name:e.target.value})
                      
        }

        const handleChangenumber = (e)=>{
          setInput({...input, number:e.target.value})
        
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
            if(input.name.trim() === "" || input.number.trim() === ""){
              return;
            }else if(input.number.match(phonenumber)){
              axios.post('http://localhost:3000/contacts', input)
              .then(res =>{
                setTimeout(()=>{
                  navigate("/")
                },1000)
                setIsValid(true)
              })

            }else{
              return null
            }    
        }

  return (
    <div className='input__container'>
      <form action="" className='contact__form' onSubmit={handleSubmit}>
        <div className='input'>
            <label htmlFor="name" placeholder='djndkdn'>
                Contact Name:
            </label>
            <input type="text"  onChange={handleChangename} />
        </div>
        <div className='input'>
            <label htmlFor="number">
                Contact Number:
            </label>
            <input type="number"onChange={handleChangenumber} />
        </div>
      <button className='btn submit'>Submit</button>
      {
        isValid && <h3 className='error'>Contact Add To Contact List</h3>
      }
      </form>
    </div>
  )
}
