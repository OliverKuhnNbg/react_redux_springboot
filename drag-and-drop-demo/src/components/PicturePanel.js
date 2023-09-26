import React from 'react';
import { useDrag } from 'react-dnd';

function PicturePanel({pictureId, pictureUrl}) {
    /* const [{isDragging}, drag] = useDrag(() => {
        type: "image"
    }); */

    return (
        <img  src={ pictureUrl } /> 
    )
}

export default PicturePanel