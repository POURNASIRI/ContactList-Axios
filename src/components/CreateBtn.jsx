import React from 'react'

export default function CreateBtn(props) {
  return (
    <div>
        <button className='btn add' onClick={props.onClick}>{props.name}</button>
    </div>
  )
}
