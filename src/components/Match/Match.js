import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import './Match.scss'

export default function Match({ question, userAnswer, setUserAnswer, setDisabledClick }) {
  const initCurrentCell = Array(question.choiceRight.length)
    .fill(0)
    .reduce((acc, _, index) => ((acc[`ans-${question.id}-${index}`] = null), acc), {}) // filling empty cell

  const [currentCell, setCurrentCell] = useState(initCurrentCell) // cell for answers

  const initList = question.choiceRight.map((value, index) => ({ value, id: `list-${question.id}-${index}` })) // filling answers
  const [list, setList] = useState(initList) // answers in list

  const handleOnDragEnd = result => {
    const dropTo = result.destination?.droppableId
    const dropFrom = result.source.droppableId

    const draggedValue = dropFrom === 'list' ? list.find(item => item.id === result.draggableId) : currentCell[dropFrom]

    if (dropTo === 'list') {
      if (dropFrom === dropTo) {
        //  from list to list
        const [reorderedItem] = list.splice(result.source.index, 1)
        list.splice(result.destination.index, 0, reorderedItem)
      } else {
        //  from answers to list
        list.splice(result.destination.index, 0, currentCell[dropFrom])
        currentCell[dropFrom] = null

        setCurrentCell({ ...currentCell })
        setUserAnswer({ ...userAnswer, [question.choiceLeft[dropFrom.split('-')[2]]]: null }) // update userAnswer
      }
      setList([...list])
    } else {
      if (dropFrom === 'list') {
        // from list to answers
        if (currentCell[dropTo] !== null) return

        currentCell[dropTo] = draggedValue
        const index = list.indexOf(draggedValue)
        list.splice(index, 1)
        setList([...list])
      } else {
        // from answers to answers
        if (!dropTo) {
          // just draggable -> to list
          list.push(currentCell[dropFrom])
          currentCell[dropFrom] = null
          setList([...list])
          setDisabledClick(list.length !== 0)
        }
      }

      setCurrentCell({ ...currentCell })
      setUserAnswer({ ...userAnswer, [question.choiceLeft[dropTo.split('-')[2]]]: draggedValue.value })
    }
    setDisabledClick(list.length !== 0) // allow click if no more free answers left
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="answer-box">
        <div className="left-part">
          {question.choiceLeft.map((item, index) => (
            <div key={index} className="match">
              &nbsp;{item}
            </div>
          ))}
        </div>
        <div className="empty-part">
          {Object.entries(currentCell).map(([id, answer]) => (
            <Droppable droppableId={id} key={id} isDropDisabled={!!answer}>
              {(provided, snapshot) => (
                <div
                  key={id}
                  className={
                    (answer && !snapshot.draggingFromThisWith ? '' : 'cell') + (snapshot.isDraggingOver ? ' fill' : '')
                  }
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {answer && (
                    <div>
                      <Draggable draggableId={answer.id} key={answer.id} index={0}>
                        {provided => (
                          <div
                            className="match"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            &nbsp;{answer.value}
                          </div>
                        )}
                      </Draggable>
                      {snapshot.draggingFromThisWith ? <div>&nbsp;</div> : ''}
                    </div>
                  )}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
      <Droppable droppableId="list" key="list">
        {provided => (
          <div className="right-part">
            <div className="right-part-box" {...provided.droppableProps} ref={provided.innerRef}>
              {list.map(({ value, id }, index) => (
                <Draggable draggableId={id} key={id} index={index}>
                  {provided => (
                    <div
                      className="match"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      &nbsp;{value}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
