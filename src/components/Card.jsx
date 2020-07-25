import React from 'react';
import Task from './Task';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { FormComponent } from './FormComponent';
import './Card.css'

const CardContainer = styled.div`
  width: 30vw;
  margin: 0px 25px;
  background: ${props => props.color};
  border: ${props => (props.isDraggingOver ? '4px dashed #FFF' : '4px dashed rgba(0,0,0,0)')};
  border-radius: 0px;
  padding: 10px;
  box-shadow: 25px 25px 50px rgba(0, 0, 0, 0.15);
`

// const CardTitle = styled.h3`
//   color: #FFFFFF;
//   text-align: center;
//   margin-bottom: 25px;
//   font-family: sans-serif;
//   font-size: 25px;
//   font-weight: bold;
// `

const TaskContainer = styled.div`
  min-height: 400px;
  width: 100%;
`


function Card({card, tasks, index}) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (  
        <Droppable droppableId={card.id} type="task">
            {(provided2, snapshot) => (
                <CardContainer ref={provided.innerRef} color={card.color} {...provided.dragHandleProps} isDraggingOver={snapshot.isDraggingOver} {...provided.draggableProps}>
                    <div className="card-head">
                        <h1>{card.title}</h1>
                        <FormComponent></FormComponent>
                    </div>
                    <TaskContainer ref={provided2.innerRef} {...provided2.droppableProps}>
                    {tasks.map((task, index) => <Task key={task.id} task={task} index={index} /> )}
                    {provided2.placeholder}
                    </TaskContainer>
                </CardContainer>
            )}
        </Droppable>
      )}
    </Draggable>
  );
}

export default Card;