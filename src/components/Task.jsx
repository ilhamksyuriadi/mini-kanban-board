import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
import './Task.css';

const TaskList = styled.div`
  width: 100%;
  background: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: ${props => props.isDragging ? '0px 10px 20px rgba(0, 0, 0, 0.25)' : '0px 4px 4px rgba(0, 0, 0, 0.25)'};
  cursor: pointer;
`

const TaskListText = styled.h6`
  color: #7B7B7B;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 0px;
  padding: 15px;
  text-transform: none;
`

function Task({task, index}) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskList ref={provided.innerRef} isDragging={snapshot.isDragging} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className="task-body">
            <h4>{task.title}</h4>
            <div className="sub">
              <p><span className="bold-text">Assignee:</span> {task.assignee}</p>
              <p><span className="bold-text">Tags:</span> {task.tags}</p>
            </div>
            <div className="sub">
              <p><span className="bold-text">Start Date:</span> {task.start_date}</p>
              <p><span className="bold-text">End Date:</span> {task.end_date}</p>
            </div>
          </div>
        </TaskList>
      )}
    </Draggable>
  );
}

export default Task;
