import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './ContactList.css'
import ActionBtn from './ActionBtn'
import DialogBox from './DiaglogBox'

export default function ContactList() {

    const[contacts,SetContacts] = useState([])
    const navigate = useNavigate()

    const[error,setError] = useState(false)

    const[dialog,setDialog] = useState({
        message:"",
        isLoading:false
    }
    )
    const contactIdRef = useRef()
    const[isloading, setIsLoading] = useState(false)
    

    useEffect(() =>{
        const getContactData = async() =>{
            
            try{
                setIsLoading(true)
                const {data} = await axios.get("http://localhost:3000/contacts/")
                setIsLoading(false)
                SetContacts(data)
                setError(false)
            }catch (e){
                setError(true)
                
            }
        }
        getContactData();
    },[])

    if(isloading){
        return(
            <div className='loading'>
               <h2> Loading...</h2>
            </div>
        )
    }

    const handleEdit = (e) =>{
        navigate("/new-contact")
    }

   

    //for home page reload after delete items
    const reloadPage = () =>{
        window.location.reload(false);
    }

    const handdledelet = (id) =>{
            setDialog({
                message:"Are You Sure To Delete This Contact?",
                isLoading:true
            })
            contactIdRef.current = id
            
        }
        const areUSureDelete = (choose) =>{
                if(choose){
                    axios.delete('http://localhost:3000/contacts/' + contactIdRef.current)
                    .then(res =>{
                        reloadPage()
                    })
                }else{
                    setDialog("")
                    
                }
        }
        



        return (
          <div className='contactlist-wrapper'>
              {error && 
              <div className='error-container'> 
                  <h1 className='error__message'> ERROR! CONNECTION REFUSED</h1>
              </div>}
               {
                
                  contacts.map((items,index)=>(
                      <div key={index} className='contacts'>
                          <div className='contacts__info'>
                          <h2>{items.id}. {items.name}</h2>
                          <h2>{items.number}</h2>
                          </div>
                          <div className='actions'>
                          <ActionBtn 
                          deletename={"Delete"} 
                          editname={"Edit"} 
                          onClick={(e) => handdledelet(items.id)}
                          link={`/edit/${items.id}`}
                          infoLink={`/info/${items.id}`}
                          info={"info"}
                          />
                          </div>
                      </div>
                      ))
                  }
                  {dialog.isLoading && <DialogBox onDialog={areUSureDelete} message={dialog.message}/>}
                 
          </div>
        )


    }

   

