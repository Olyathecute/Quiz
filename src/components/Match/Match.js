import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import './Match.scss'

// const state = {
//   'droppableId-1': null || { id: `empty-${index}`, value: null, class: 'cell' }
//   'droppableId-2': null || { id: `empty-${index}`, value: null, class: 'cell' }
// }

export default function Match({ question, userAnswer, setUserAnswer, setDisabledClick }) {
  console.log(question, 'question')
  console.log(question.id, 'questionId')
  console.log(question.choiceRight, 'question.choiceRight')

  useEffect(() => {
    console.log(question, 'new component')
  }, [])

  const initCurrentCell = Array(question.choiceRight.length)
    .fill(0)
    .reduce((acc, _, index) => ((acc[`ans-${question.id}-${index}`] = null), acc), {}) // filling empty cell

  const [currentCell, setCurrentCell] = useState(initCurrentCell) // cell for answers
  console.log(currentCell, 'currentCell')

  const initList = question.choiceRight.map((value, index) => ({ value, id: `list-${question.id}-${index}` })) // filling answers
  const [list, setList] = useState(initList) // answers in list
  console.log(list, 'list')

  const handleOnDragEnd = result => {
    console.log(result, 'result')

    const dropTo = result.destination?.droppableId
    console.log(dropTo, 'dropTo')
    const dropFrom = result.source.droppableId

    const draggedValue = dropFrom === 'list' ? list.find(item => item.id === result.draggableId) : currentCell[dropFrom]

    if (dropTo === 'list') {
      if (dropFrom === dropTo) {
        //  from list to list
        const items = Array.from(list)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setList([...items])
      } else {
        //  from answers to list
        list.splice(result.destination.index, 0, currentCell[dropFrom])
        currentCell[dropFrom] = null

        setCurrentCell({ ...currentCell })
        setList([...list])
        setUserAnswer({ ...userAnswer, [question.choiceLeft[dropFrom.split('-')[2]]]: null }) // update userAnswer
      }

      if (!list.length) setDisabledClick(false) // check answer is full
      else setDisabledClick(true)
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
        } else {
          const temp = currentCell[dropFrom]
          currentCell[dropFrom] = currentCell[dropTo]
          currentCell[dropTo] = temp
        }
      }
      console.log(dropTo.split('-')[2], 'куда')
      console.log(question, 'question')
      console.log(draggedValue, 'что')

      setCurrentCell({ ...currentCell })
      setUserAnswer({ ...userAnswer, [question.choiceLeft[dropTo.split('-')[2]]]: draggedValue.value })
      if (!list.length) setDisabledClick(false)
      else setDisabledClick(true)
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="answer-box">
        <div className="left-part">
          {question.choiceLeft.map((item, index) => {
            return (
              <div key={index} className="match">
                &nbsp;{item}
              </div>
            )
          })}
        </div>
        <div className="empty-part">
          {Object.entries(currentCell).map(([id, answer]) => {
            return (
              <Droppable droppableId={id} key={id} isDropDisabled={!!answer}>
                {(provided, snapshot) => (
                  <div
                    key={id}
                    className={
                      (answer && !snapshot.draggingFromThisWith ? '' : 'cell') +
                      (snapshot.isDraggingOver ? ' fill' : '')
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
            )
          })}
        </div>
      </div>
      <Droppable droppableId="list" key="list">
        {provided => (
          <div className="right-part">
            <div className="right-part-box" {...provided.droppableProps} ref={provided.innerRef}>
              {list.map(({ value, id }, index) => {
                return (
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
                )
              })}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
