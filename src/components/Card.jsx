import React, { useState } from 'react';
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

const TaskContainer = styled.div`
  min-height: 400px;
  width: 100%;
`

const Card = ({card, tasks, index, formHandle, formValue}) => {
  const [state, setState] = useState({
    modalState: false
  })

  let task = {
    title: React.createRef(),
    assignee: React.createRef(),
    tags: React.createRef(),
    start_date: React.createRef(),
    end_date: React.createRef()
  }

  const showModal = () => {
    setState({modalState: true})
  }

  const hideModal = () => {
    setState({modalState: false})
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
                            card_id = {card.id}
                            onSubmit = {formHandle}
                            onShowModal = {showModal}
                            onHideModal = {hideModal}
                            modal_state = {state.modalState}
                            title = {formValue.title}
                            assignee = {formValue.assignee}
                            tag = {formValue.tags}
                            start_date = {formValue.start_date}
                            end_date = {formValue.end_date}
                            card = {formValue.card}
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