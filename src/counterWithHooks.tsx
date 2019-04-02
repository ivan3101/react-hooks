import React, {FC, MouseEventHandler, useState} from 'react';

const CounterWithHooks: FC = () => {

    const [count, updateCount] = useState(0);

    const incrementCount: MouseEventHandler<HTMLButtonElement> = (): void => {
        updateCount(count + 1);
    };

    return (
        <div>
            <h4>Counter with Hooks</h4>
            <p>
                <button onClick={incrementCount}>Click to increment count</button>
                {" "}
                <span>Count: {count}</span>
            </p>
        </div>
    );
};

export default CounterWithHooks;
