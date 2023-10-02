import React, { useEffect, useState } from 'react';

const withSortingOrder = (WrappedComponent) => {
    return (props) => {
      const [options, setOptions] = useState([]);
      const [solution, setSolution] = useState(Array(5).fill('+ Drop'));
      const [draggedIndex, setDraggedIndex] = useState(null);
      const [disabledBtn, setDisabledBtn] = useState(true);
  
      const generateOptions = () => {
        let arr = [];
        while (arr.length < 5) {
          const randomNumber = Math.floor(Math.random() * 100) + 1;
  
          if (!arr.includes(randomNumber)) {
            arr.push(randomNumber);
          }
        }
        setOptions(arr);
      };
  
      const handleDragStart = (e, index) => {
        const element = solution[index];
        e.dataTransfer.setData('text/plain', element);
        setDraggedIndex(index);
      };
  
      const handleDragOver = (e) => {
        e.preventDefault();
        const element = e.target;
        element.classList.add('drag-over');
      };
  
      const handleDragLeave = (e) => {
        e.preventDefault();
        const element = e.target;
        if (element.innerText === '+ Drop') element.classList.remove('drag-over');
      };
  
      const onDrop = (event, index) => {
        event.preventDefault();
        const data = Number(event.dataTransfer.getData('text/plain'));
        const tempSolution = [...solution];
  
        if (options.includes(data)) {
          const tempOptions = options;
          if (tempSolution[index] !== '+ Drop') {
            tempOptions.push(tempSolution[index]);
          }
          tempSolution[index] = data;
          setOptions([...tempOptions.filter((ele) => ele !== data)]);
        } else {
          if (tempSolution[draggedIndex] === '+ Drop') {
            return;
          }
          let temp = tempSolution[index];
          tempSolution[draggedIndex] = temp;
          tempSolution[index] = data;
        }
  
        setSolution(tempSolution);
        setDisabledBtn(tempSolution.includes('+ Drop'));
      };
  
      useEffect(() => {
        const arr = document.getElementsByClassName('drag-over');
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].innerText === '+ Drop') {
            arr[i].classList.remove('drag-over');
          }
        }
      }, [solution]);
  
      useEffect(() => {
        generateOptions();
      }, []);
  
      return (
        <WrappedComponent
          {...props}
          options={options}
          solution={solution}
          draggedIndex={draggedIndex}
          setSolution={setSolution}
          setOptions={setOptions}
          setDraggedIndex={setDraggedIndex}
          disabledBtn={disabledBtn}
          setDisabledBtn={setDisabledBtn}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          onDrop={onDrop}
        />
      );
    };
  };

export default withSortingOrder;