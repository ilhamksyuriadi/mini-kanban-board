import React, { useState } from 'react';
import './MainPage.css';
import { CardState } from '../config/CardState';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Card from '../components/Card';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 25px;
  min-height: 100vh;
`

const MainPage = () => {
  const [state, setState] = useState(CardState);

  const onDragEnd = (result) => {
    const {draggableId, source, destination, type} = result;
    if ((!destination) || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    if (type === "card") {
      const newCardOrder = Array.from(state.cardOrder);
      newCardOrder.splice(source.index, 1);
      newCardOrder.splice(destination.index, 0, draggableId);
      
      const newState = {
        ...state,
        cardOrder: newCardOrder
      }
      setState(newState);
      return;
    }

    if (type === "task") {
      const start = state.cards[source.droppableId];
      const finish = state.cards[destination.droppableId];
  
      if (start === finish) {
        const card = state.cards[source.droppableId];
        const newTaskIds = Array.from(card.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newCard = {
          ...card,
          taskIds: newTaskIds
        };
        const newState = {
          ...state,
          cards: {
            ...state.cards,
            [newCard.id]: newCard
          }
        }
        setState(newState);
        return
      }
      // move to another card
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds
      }
  
      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds
      }
  
      const newState = {
        ...state,
        cards: {
          ...state.cards,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        }
      }
      setState(newState);
      return;
    }
  }

  let value = {
    title: React.createRef(),
    assignee: React.createRef(),
    tags: React.createRef(),
    start_date: React.createRef(),
    end_date: React.createRef(),
    card: React.createRef()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let new_task = {
      id: uuid(),
      title: value.title.current.value,
      assignee: value.assignee.current.value,
      tags: value.tags.current.value,
      start_date: value.start_date.current.value,
      end_date: value.end_date.current.value,
      card: value.card.current.value
    }
    alert("Task added ! Close to add another task");
    updateState(new_task)
  }

  const updateState = (new_task) => {
    let new_state = {...state};
    new_state.tasks[new_task.id] = new_task;
    new_state.cards[new_task.card].taskIds.push(new_task.id);
    setState(new_state)
    console.log('from update state', new_task);
  }

  return (
    <React.Fragment>
        <div className="header">
            <h1>Kanban Board</h1>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="all-cards" direction="horizontal" type="card">
                {(provided) => (
                <CardContainer ref={provided.innerRef} {...provided.droppableProps}>
                    {
                        state.cardOrder.map((cardId, index) => {
                            const card = state.cards[cardId];
                            const tasks = card.taskIds.map(taskId => state.tasks[taskId]);
                            return <Card formHandle = {handleSubmit} 
                                        formValue = {value}
                                        key = {cardId} 
                                        card = {card}
                                        tasks = {tasks} 
                                        index = {index}
                                        {...provided.card}
                                    />
                        })
                    }
                    {provided.placeholder}
                </CardContainer>
                )}
            </Droppable>
        </DragDropContext>
        <div className="footer">
            <h6>@2020 by ilhamksyuriadi</h6>
        </div>
    </React.Fragment>
  )
  
}

export default MainPage;