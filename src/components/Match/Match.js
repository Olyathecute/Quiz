import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import './Match.scss'

// const state = {
//   'droppableId-1': null || { id: `empty-${index}`, value: null, class: 'cell' }
//   'droppableId-2': null || { id: `empty-${index}`, value: null, class: 'cell' }
// }

export default function Match({ question, userAnswer, setUserAnswer, setDisabledClick }) {
  const initCurrentCell = Array(question.choiceRight.length)
    .fill(0)
    .reduce((acc, _, index) => ((acc[`ans-${index + 1}`] = null), acc), {})

  const [currentCell, setCurrentCell] = useState(initCurrentCell)

  const initList = question.choiceRight.map((value, index) => ({ value, id: `list-${index}` }))
  const [list, setList] = useState(initList)

  const handleOnDragEnd = result => {
    const dropTo = result.destination?.droppableId
    const dropFrom = result.source.droppableId

    const draggedValue = dropFrom === 'list' ? list.find(item => item.id === result.draggableId) : currentCell[dropFrom]

    const answerValue = list.find(item => item.id === result.draggableId)?.value
    const answerItemToCurrent = dropTo.slice(-1)
    const answerItemToList = dropFrom.slice(-1)

    if (dropTo === 'list') {
      if (dropFrom === dropTo) {
        //  из листа в лист
        const items = Array.from(list)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setList([...items])
      } else {
        //  из ответов в лист
        list.splice(result.destination.index, 0, currentCell[dropFrom])
        currentCell[dropFrom] = null

        setCurrentCell({ ...currentCell })
        setList([...list])
        setUserAnswer({ ...userAnswer, [answerItemToList]: null }) // update userAnswer
      }

      if (!list.length) setDisabledClick(false) // проверка заполненности ответа
      else setDisabledClick(true)
    } else {
      if (dropFrom === 'list') {
        // из листа в список
        if (currentCell[dropTo] !== null) return

        currentCell[dropTo] = draggedValue
        const index = list.indexOf(draggedValue)
        list.splice(index, 1)
        setList([...list])
      } else {
        // в список из списка
        if (!dropTo) {
          // если ни туда, ни сюда - в лист
          list.push(currentCell[dropFrom])
          currentCell[dropFrom] = null
          setList([...list])
        } else {
          const temp = currentCell[dropFrom]
          currentCell[dropFrom] = currentCell[dropTo]
          currentCell[dropTo] = temp
        }
      }

      setCurrentCell({ ...currentCell })
      setUserAnswer({ ...userAnswer, [answerItemToCurrent]: answerValue })
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
                {index + 1}.&nbsp;{item}
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
