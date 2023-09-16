import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import DraggableOption from '../../components/DraggableOption/DraggableOption';
import './Level2.css'


const Level2 = () => {

    const [options,setOptions] = useState([]);
  const [solution,setSolution] = useState(['+ Drop','+ Drop','+ Drop','+ Drop','+ Drop']);
  const [dragging,setDragging] = useState(false);
  const [draggedIndex,setDraggedIndex] = useState(null);
  const [disabledBtn,setDisabledBtn] = useState(true)

  const generateOptions = ()=>{

    let arr =[]
    while (arr.length < 5) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      
      if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
      }
    }
    setOptions(arr);
  }

  const handleDragStart = (e,index) => {
      
    const element = solution[index];
    e.dataTransfer.setData('text/plain', element);

    setDraggedIndex(index);
    setDragging(true);
    
  };

  const handleDragOver = (e)=>{
    e.preventDefault()

    const element = e.target;
    console.log(element)

    element.classList.add('drag-over');

  }

  const handleDragLeave=(e)=>{
    e.preventDefault();
    const element = e.target;
    console.log(element)

    element.classList.remove('drag-over');
  }

  const handleDragEnd= ()=>{
      setDragging(false)
  }

  const onDrop=(event,index)=> {
    
    

    const data = Number(event.dataTransfer.getData("text/plain"));

    const tempSolution = [...solution];

    // if option is dragged -> add it to solution + remove it from options
    if(options.includes(data)){

      const tempOptions = options;
      if(tempSolution[index]!=='+ Drop'){
        
        tempOptions.push(tempSolution[index]);
        
      }

      tempSolution[index] = data;
      
      setOptions([...tempOptions.filter((ele)=>ele!==data)])
    }
    // else if an already present solution is dragged simply swap the values
    else{

      // Not letting Drop dragged
      if(tempSolution[draggedIndex]=='+ Drop'){
        return;
      }

      let temp = tempSolution[index];
      tempSolution[draggedIndex]=temp;
      tempSolution[index]=data;
      
    }

    setSolution(tempSolution);
    setDisabledBtn(tempSolution.includes('+ Drop'));

    event.preventDefault();
  }


  useEffect(() => {
    
    generateOptions();

  }, [])


  return (
    <div className='playscreen'>
        
        <div className='playscreen-headings'>
          <div>Exercise : <strong>Sort-Down</strong> </div>
          <div><strong>Task - </strong>Arrange the numbers in Descending Order.</div>
        </div>


        <div className='droppable-container'>

          {
            solution.map((element,index)=>{
              return (
                <div className={dragging?'dragging solution-boxes':'solution-boxes'} onDrop={(event)=>onDrop(event,index)} onDragOver={handleDragOver}  onDragStart={(event)=>handleDragStart(event,index)} onDragEnd={handleDragEnd} onDragLeave={handleDragLeave} draggable key={index}>
                  {element} 
                </div>
              )
            })
          }
     
        </div>

        <h3 className='playscreen-headings'>Options : </h3>

        <div className='options-container'>

          {
            options.map((element,index)=>{
              return (
                <DraggableOption item={element} key={index}/>
              )
            })
          }
          
        </div>

        <div className='btn-container'>

        <Link to='/result' state={{ solution: solution , level:"2" }}><button disabled={disabledBtn} className={disabledBtn?'check-btn disabled-btn':'check-btn'} >Check Answer</button></Link>
        </div>


    </div>
  )
}

export default Level2