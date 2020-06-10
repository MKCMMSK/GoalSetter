import React, { useState } from 'react';
import "./DragScroll.scss"
import PropTypes from 'prop-types';
import Tasks from "./Tasks"
import Board from 'react-trello'

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
        }
    ]
}

function DragScroll() {


    // const [state, setState] = useState({
    //     isScrolling: false,
    //     clientX: 0,
    //     scrollX: 0,
    // })

    // const onMouseDown = e => {
    //     console.log('move')

    //     setState({
    //         ...state, isScrolling: true,
    //         clientX: e.clientX
    //     });
    // };

    // const onMouseUp = () => {
    //     console.log('move')

    //     setState({ ...state, isScrolling: false });
    // };

    // const onMouseMove = e => {
    //     console.log('move')
    //     const { clientX, scrollX } = state;
    //     if (state.isScrolling) {
    //         DragScroll.ref.current.scrollLeft = scrollX + e.clientX - clientX;
    //         state.scrollX = scrollX + e.clientX - clientX;
    //         state.clientX = e.clientX;
    //     }
    // };

    // const { ref, rootClass } = DragScroll;
    return (
        <>
            {/* <div style={{ width: "500px", backgroundColor: "red" }}
                ref={ref}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                className={rootClass}
            > */}
                <Board data={data} style={{ width: "500px"}} />

                {/* {React.Children.map(DragScroll.children, child =>
                React.Children.only(child))} */}
            {/* </div> */}
        </>
    );
}

// DragScroll.defaultProps = {
//     ref: { current: {} },
//     rootClass: '',
// };

// DragScroll.propTypes = {
//     ref: PropTypes.object,
//     rootClass: PropTypes.string,
//     children: PropTypes.string,
// };

export default DragScroll;