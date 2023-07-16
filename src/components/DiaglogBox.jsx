import React from 'react'
import './DialogBox.css'

export default function DiaglogBox({message, onDialog,}) {
  return (
    <div className='dialogbox-container'>
        <div className='dialogbox'>
            <h2>{message}</h2>
            <div className='dialogbox__btns'>
            <button className='true__btn' onClick={() => onDialog(true)}>Yes</button>
            <button className='false__btn' onClick={() => onDialog(false)}>No</button>
            </div>
        </div>
    </div>
  )
}
