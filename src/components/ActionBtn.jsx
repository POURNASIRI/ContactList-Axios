import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ActionBtn(props) {
  const navigate = useNavigate()

    const handelClick = ()=>{
        navigate(`${props.infoLink}`)
    }
  return (
    <div>
        <button className='btn delete'   onClick={props.onClick}>{props.deletename}</button>
        <button className='btn edit' ><Link className='editlink' to={props.link}>{props.editname}</Link></button>
        <button className='btn edit' onClick={handelClick} >{props.info}</button>
    </div>
  )
}
