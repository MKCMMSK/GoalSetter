import React from 'react';
import Draggable from 'react-draggable';

export default class App extends React.Component {

    eventLogger = (e, data) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
        console.log(this.children)
    };

    render() {
        return (
            <Draggable
                axis="x"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
                onChange={this.eventLogger}>
                <div className="handle"> {this.props.children}
                </div>
            </Draggable>
        );
    }
}
