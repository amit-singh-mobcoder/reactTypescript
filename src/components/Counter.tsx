import React, { useState } from "react";
import MyButton from "./MyButton";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p>{count}</p>
            <MyButton text={'Increment'} onClick={() => setCount(count + 1)} />
        </div>
    )
}


export default Counter;