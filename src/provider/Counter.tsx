import React, {createContext, useContext, useState} from "react";

interface CounterContextValues {
    value: number;
    setCount: (num: number) => void
}

export const CounterContext = createContext<CounterContextValues| null>(null);

interface CounterProviderProps {
    children: React.ReactNode;
}
export const CounterProvider: React.FC<CounterProviderProps> = (props) => {

    const [count, setCount] = useState<number>(100);

    return(
        <CounterContext.Provider value={{value: count, setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}

// it also a way of using context
export const useCounter = () => {
    return useContext(CounterContext);
}

