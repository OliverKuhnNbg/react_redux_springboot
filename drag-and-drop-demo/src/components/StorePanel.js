import React from 'react'

export function StorePanel({name, items, id}) {
    console.log(items.lenght)
  return (
    <div >
        <h3 className='store-container'>{name}</h3>
        <div className='items-container'>
            {items.map((item, index) => 
                <div className='item-container'>{item.name}</div>
            )}
        </div>
    </div>
  )
}