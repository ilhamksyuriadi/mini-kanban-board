import React from 'react';
import Task from './Task';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { FormComponent } from './FormComponent';
import { v4 as uuid } from 'uuid';
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

const TaskContainer = styled.div`
  min-height: 400px;
  width: 100%;
`

function Card({card, tasks, index}) {

  let task = {
    title: React.createRef(),
    assignee: React.createRef(),
    tags: React.createRef(),
    start_date: React.createRef(),
    end_date: React.createRef()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let new_task = {
      issue_id: uuid(),
      title: task.title.current.value,
      assignee: task.assignee.current.value,
      tags: task.tags.current.value,
      start_date: task.start_date.current.value,
      end_date: task.end_date.current.value
    }
    alert("Task added !")
    console.log('submit clickeddded', new_task)
  }

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (  
        <Droppable droppableId={card.id} type="task">
            {(provided2, snapshot) => (
                <CardContainer ref={provided.innerRef} color={card.color} {...provided.dragHandleProps} isDraggingOver={snapshot.isDraggingOver} {...provided.draggableProps}>
                    <div className="card-head">
                        <h1>{card.title}</h1>
                        <FormComponent
                          onSubmit = {handleSubmit}
                          title = {task.title}
                          assignee = {task.assignee}
                          tag = {task.tags}
                          start_date = {task.start_date}
                          end_date = {task.end_date}
                        ></FormComponent>
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