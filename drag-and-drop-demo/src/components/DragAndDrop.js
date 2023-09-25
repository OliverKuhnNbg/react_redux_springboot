import React from 'react'
import PicturePanel from './PicturePanel';

const picList =[
    {
        id:1,
        url: "https://fastly.picsum.photos/id/221/200/300.jpg?grayscale&hmac=ESmcy_Qjj4F9HuhtmspjnzAnuOJlT1kVNvnRj2q-W60"
    },
    {
        id: 2,
        url: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
    },
    {
        id: 3,
        url: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
    }
];

function DragAndDrop() {

    console.log(picList.length)
  return (
    <>
        <div className="Pictures">
            {picList.map((item, index) => {
                return <PicturePanel pictureId={item.id} pictureUrl={item.url}/>
            })}
        </div>
        <div className="Board"></div>
    </>
  )
}

export default DragAndDrop