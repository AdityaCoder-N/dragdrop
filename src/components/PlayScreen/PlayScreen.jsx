// screens/PlayScreen/PlayScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import withSortingOrder from '../../HOC/withSortingOrder';
import DraggableOption from '../DraggableOption/DraggableOption';
import './PlayScreen.css';

const PlayScreen = ({
  options,
  solution,
  draggedIndex,
  setSolution,
  setOptions,
  setDraggedIndex,
  disabledBtn,
  setDisabledBtn,
  handleDragStart,
  handleDragOver,
  handleDragLeave,
  onDrop,
  sortOrder,
  level,
}) => {

  // console.log("SORT ORDER IN PLAY SCREEN : " ,sortOrder);
  return (
    <div className="playscreen">
      <div className="playscreen-headings">
        <div>
          Level-{level} : <strong>{sortOrder === 'asc' ? 'Sort-Up' : 'Sort-Down'}</strong>
        </div>
        <div>
          <strong>Task - </strong>
          Arrange the numbers in {sortOrder === 'asc' ? 'Ascending' : 'Descending'} Order.
        </div>
      </div>

      <div className="droppable-container">
        {solution.map((element, index) => (
          <div
            className="solution-boxes"
            onDrop={(event) => onDrop(event, index)}
            onDragOver={handleDragOver}
            onDragStart={(event) => handleDragStart(event, index)}
            onDragLeave={(event) => handleDragLeave(event, index)}
            draggable
            key={index}
          >
            {element}
          </div>
        ))}
      </div>

      <h3 className="playscreen-headings">Options : </h3>

      <div className="options-container">
        {options.map((element, index) => (
          <DraggableOption item={element} key={index} />
        ))}
      </div>

      <div className="btn-container">
        <Link to="/result" state={{ solution: solution, level: level }}>
          <button disabled={disabledBtn} className={disabledBtn ? 'check-btn disabled-btn' : 'check-btn'}>
            Check Answer
          </button>
        </Link>
      </div>

      <div className="playscreen-headings">
        <small>Hold the options to drag</small>
      </div>
    </div>
  );
};

export default withSortingOrder(PlayScreen);
