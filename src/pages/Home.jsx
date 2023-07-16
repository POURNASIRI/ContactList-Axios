

import React, { useEffect, useState } from 'react'
import CreateBtn from '../components/CreateBtn'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Home.css"
import ContactList from '../components/ContactList'


export default function Home() {

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate("/new-contact")
    }

  return (
    <div className='list-container'>
        <div className='list__header'>
            <h1>Contact List</h1>
            <CreateBtn  name={'Create +'} onClick={handleClick}/>
        </div>
        <ContactList/>
    </div>
  )
}
