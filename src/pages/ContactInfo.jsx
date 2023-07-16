import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, } from 'react-router-dom'
import './Contactinfo.css'

export default function ContactInfo() {
     const {id} = useParams()
     const navigate = useNavigate()
     const[info, setInfo] = useState([])

     useEffect(() =>{
        const getContactData = async() =>{
            
            try{
                const {data} = await axios.get("http://localhost:3000/contacts/"+id)
                setInfo(data)
                
            }catch (e){
                console.log(e)
            }
        }
        getContactData();
        
    },[])
    
    const handleClick = ()=>{
        navigate("/")
    }
  return (
    <div className="contact__info-container">
        <ul className='contact__info__list'>
            <div>
                <h2>Contact Id: </h2> <span>{info.id}</span>
            </div>
            <div>
                 <h2>Contact Name: </h2><span>{info.name}</span>
            </div>
            <div>
                <h2>Contact Number: </h2><span>{info.number}</span>
            </div>
            <button className='btn info' onClick={handleClick}>Back</button>
        </ul>
    </div>
  )
}
