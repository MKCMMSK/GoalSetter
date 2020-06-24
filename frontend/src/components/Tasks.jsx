import React, { useState, useEffect } from "react"
import axios from "axios"
import Board from 'react-trello'
// import Draggable from './Dragable';

const mockDataTrello = {
  lanes: [
    {
      id: '1',
      title: 'Planned Tasks',
      cards: [
        { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false },
        { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
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
const dbProjectsFixed = [
  {
    "id": 1,
    "name": "productivity web app",
    description: "web app with ML to stay on track",
    "start_date": "2020-06-18",
    "user": 1
  },
  {
    "id": 2,
    "name": "tinder for cats",
    "description": "Heard of tinder? heard of tinder for dogs? i present to you tinder for cats",
    "start_date": "2020-06-18",
    "user": 1
  },
  {
    "id": 3,
    "name": "travel POI",
    "description": "travel app that shows you POI around you and must sees",
    "start_date": "2020-06-18",
    "user": 1
  },
  {
    "id": 7,
    "name": "interview",
    "description": "practice leet code",
    "start_date": "2020-06-18",
    "user": 1
  }
]
const dbTasksFixed = [
  [
    {
      "id": 1,
      "name": "Researching stack",
      "category": "research",
      "notes": "thinking about react and node",
      "start_date": "2020-06-18",
      "project": 1
    },
    {
      "id": 2,
      "name": "plan out wire frames",
      "category": "execution",
      "notes": "look into user experience and what I want out of this",
      "start_date": "2020-06-18",
      "project": 1
    },
    {
      "id": 3,
      "name": "break down front and backend",
      "category": "execution",
      "notes": "things i want to do on the front end and the things i want to do in the backend",
      "start_date": "2020-06-18",
      "project": 1
    }
  ],
  [
    {
      "id": 4,
      "name": "market research",
      "category": "research",
      "notes": "check out cat users and demand",
      "start_date": "2020-06-18",
      "project": 2
    },
    {
      "id": 5,
      "name": "tech stack",
      "category": "research",
      "notes": "want it for mobile so react native? swift?",
      "start_date": "2020-06-18",
      "project": 2
    }
  ],
  [],
  []
]

export default function Tasks({ projectsList, tasksList }) {
  const [state, setState] = useState({ lanes: projectsList });
  // const [state, setState] = useState(mockDataTrello);
console.log(projectsList)
console.log(tasksList)

  const combineLists = (() => {
    console.log(Boolean(tasksList.id))
    tasksList.length > 0 ?
    tasksList.map((taskArr) => {
      taskArr.map((task) => {
        console.log(task)
        task.title = task.name
        task.description = task.notes
        task.label = "30min" //TODO change to estimate time
      })
    })
    : tasksList = [[{}]]
    console.log(tasksList)

    projectsList.map((project, index) => {
      project.cards = tasksList[index]
      project.title = project.name
    })
    setState({ lanes: projectsList })
    console.log(state)
  })

  const handleCardDelete = (cardId, laneId) => {
    console.log(`Card: ${cardId} deleted from lane: ${laneId}`)

    axios({
      method: "delete",
      url: `http://localhost:8000/tasks/`,
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
      url: `http://localhost:8000/tasks/`,
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
    combineLists()
  }, [projectsList, tasksList])

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