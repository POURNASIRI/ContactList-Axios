import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import axios from 'axios'

export default function EditContact() {

    const {id} = useParams()
    

  const [input, setInput] = useState({
    name:"",
    number:""
  })

  const[success, setSuccess] = useState(false)

  const navigate = useNavigate()

  const handleChangename = (e)=>{
   setInput({...input, name:e.target.value})
                
  }

  const handleChangenumber = (e)=>{
    setInput({...input, number:e.target.value})
  
  }

    useEffect(() =>{
      axios.get('http://localhost:3000/contacts/'+id)
      .then(res => {
        setInput(res.data)
      })
      .catch(err => alert("ERROR!"))
      
    },[])

  

    const handleSubmit  = (e)=>{
      e.preventDefault();
      axios.put('http://localhost:3000/contacts/'+id ,input)
      .then(res =>{
          setSuccess(true)
          setTimeout(()=>{
            navigate("/")
          },1000)
      }) 
  }
      return (
        <div className='input__container'>
          <form action="" className='contact__form' onSubmit={handleSubmit}>
            <div className='input' name="name">
                <label htmlFor="name" placeholder='djndkdn'>
                    Contact Name:
                </label>
                <input type="text" value={input.name}  onChange={handleChangename} />
            </div>
            <div className='input'>
                <label htmlFor="number">
                    Contact Number:
                </label>
                <input type="number" name="number" value={input.number}   onChange={handleChangenumber} />
            </div>
          <button className='btn submit'>Submit</button>
          
            {success && <h4 className='error'>Edit Contact successed</h4>} 
          
          </form>
        </div>
      )
  }

