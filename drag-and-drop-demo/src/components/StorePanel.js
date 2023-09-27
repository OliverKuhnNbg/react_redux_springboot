import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

export function StorePanel({name, items, id}) {
    console.log(items.length)
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    <div className='store-container'>
                        <h3>{name}</h3>
                    </div>
                    <div className='items-container'>
                        {items.map((item, index) => 
                            <Draggable draggableId={item.id} index={index} key={item.id}>
                                {(provided) => (
                                    <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className='item-container'><h4>{item.name}</h4></div>
                                )}
                            </Draggable>
                        )}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}