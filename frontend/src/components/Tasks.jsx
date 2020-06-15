import React from 'react'
import Board from 'react-trello'
// import Draggable from './Dragable';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false },
        { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane3',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
}

export default function Tasks() {

  const shouldReceiveNewData = nextData => {
    console.log('Board has changed')
    console.log(nextData)
  }

  const handleCardDelete = (cardId, laneId) => {
    console.log(`Card: ${cardId} deleted from lane: ${laneId}`)
  }

  const handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`)
    console.log(card)
  }
  return (
    <>
      {/* <Draggable> */}
      <Board
        data={data}
        draggable
        editable
        canAddLanes
        editLaneTitle
        addLaneTitle="NEW LANE"
        addCardLink="ADD CARD"
        onDataChange={shouldReceiveNewData}
        onCardDelete={handleCardDelete}
        onCardAdd={handleCardAdd}
        onLaneAdd={t => console.log('You added a line with title ' + t.title)}
        onLaneClick={t => console.log('You clicked on a lane')}
        onLaneUpdate={ (laneId, data) => console.log(`onLaneUpdate: ${laneId} -> ${data.title}`)}
        />
      {/* </Draggable> */}
    </>
  );

}