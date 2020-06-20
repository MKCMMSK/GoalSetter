import React, { useState, useEffect } from "react"
import axios from "axios"
import Board from 'react-trello'
// import Draggable from './Dragable';

const mockData = {
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
  const [state, setState] = useState(mockData);
  // const [state, setState] = useState({});

  const fetchData = (
    axios({
      method: "get",
      url: `https://localhost:8000/projects/`,
      data: { userId: 1 }, //TODO remove hardcoded data
    })
      .then(data => setState(data))
      .catch(error => console.log(error))
  )

  const handleCardDelete = (cardId, laneId) => {
    console.log(`Card: ${cardId} deleted from lane: ${laneId}`)

    axios({
      method: "delete",
      url: `https://localhost:8000/tasks/`,
      data: { cardId: cardId }
    })
      .then(() => {
        axios
        .get(`localhost:8000/tasks/`)
        .catch(error => console.log(error))
      })
      .catch(error => console.log(error))

    // const project = state.find(id => id = laneId)
    // project.cards.pop(card)
    // setState(...state, project)
  }

  const handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}: ${card}`)

    axios({
      method: "put",
      url: `https://localhost:8000/tasks/`,
      data: { cardId: card }
    })
      .then(() => {
        axios
        .get(`localhost:8000/tasks/`)
        .catch(error => console.log(error))
      })
      .catch(error => console.log(error))

    // const project = state.map(() => {})
    // const project = state.find(id => id = laneId)
    // project.cards.push(card)
    // setState(...state, project)
  }

  const shouldReceiveNewData = nextData => {
    console.log('Board has changed')
    console.log(nextData) //ALL DATA - might enable to fetchData get request when theres a change to the data to DRY
    // setState(...state, nextData)
  }

  const onLaneUpdate = (laneId, data) => {
    console.log(`Card updated on lane ${laneId}: ${data}`)
    // const project = state.find(id => id = laneId)
    // project.push(data)
    // setState(...state, project)
  }

  //TODO: allow user to edit card by creating custom edit box 
  // show edit box to change data
  // might need to delete and add new card 
  const onCardEdit = (cardId, metadata, laneId) => {
    console.log(`Card updated on lane `)

    return (
      <div>test</div>
    )
    // axios
    //   .put(`localhost:8000/projects/${cardId}`)
    //   .catch(error => console.log(error))

    // const project = state.find(id => id = laneId)
    // project.push(data)
    // setState(...state, project)
  }


  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <>
      {/* <Draggable> */}
      <Board
        style={{ backgroundColor: '#A8D0E6' }}
        data={state}
        draggable
        editable
        canAddLanes
        editLaneTitle
        addLaneTitle="NEW LANE"
        // addCardLink="ADD CARD"
        onDataChange={shouldReceiveNewData}
        onCardDelete={handleCardDelete}
        onCardAdd={handleCardAdd}
        onLaneAdd={t => console.log('You added a line with title ' + t.title)}
        onLaneClick={t => console.log('You clicked on a lane')}
        onCardClick={onCardEdit}
        onLaneUpdate={onLaneUpdate}
      // onLaneUpdate={(laneId, data) => console.log(`onLaneUpdate: ${laneId} -> ${data.title}`)} 
      />
      {/* </Draggable> */}
    </>
  );

}