import {createSignal} from "solid-js";

export function Counter() {
    const [count, setCount] = createSignal(0)

    return (
        <span>
          <button onClick={() => setCount(prev => prev - 1)}>-1</button>
            <span>{count()}</span>
          <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        </span>
    )
}