import React from 'react'

export function ToDoListEntry(props) {
  
  return (
    <div>
        <p><span><strong>{props.title}:</strong> </span> <br/> <span> {props.task}</span> </p>
    </div>
  )
}

