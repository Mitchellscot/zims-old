import React from 'react';

export default function Counter() {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h1>Counter</h1>

            <p>Current count: <strong>{counter}</strong></p>

            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    );
}