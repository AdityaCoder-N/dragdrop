import React, { useState } from 'react'
import './DraggableOption.css'
import '../../pages/PlayScreen/PlayScreen.css'
const DraggableOption = ({ item }) => {

    const [dragging,setDragging] = useState(false);
    const handleDragStart = (e) => {
        
        e.dataTransfer.setData('text/plain', item);
        
        setDragging(true);
        console.log(item);
    };
    const handleDragEnd= ()=>{
        setDragging(false)
    }

  return (

    <div className={dragging?'draggable-boxes dragging':'draggable-boxes'} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {item}
    </div>

  )
}

export default DraggableOption